#!/usr/bin/env bash
# kv-backup.sh — Export all Cloudflare KV entries to a dated JSON file.
#
# Usage:
#   ./scripts/kv-backup.sh [--output-dir <dir>] [--retain-days <n>]
#
# Requirements:
#   - wrangler CLI installed and authenticated (CLOUDFLARE_API_TOKEN env var)
#   - jq installed
#
# Output:
#   <output-dir>/kv-backup-<YYYY-MM-DD>.json
#
# Environment variables:
#   CLOUDFLARE_API_TOKEN   Cloudflare API token with KV read access (required)
#   KV_NAMESPACE_ID        KV namespace ID (default: from wrangler.toml)

set -euo pipefail

# ── Configuration ────────────────────────────────────────────────────────────
KV_NAMESPACE_ID="${KV_NAMESPACE_ID:-67bb9d9a4fa440fe94b1adcfb977c16c}"
OUTPUT_DIR="${OUTPUT_DIR:-backups/kv}"
RETAIN_DAYS="${RETAIN_DAYS:-30}"
DATE=$(date -u +"%Y-%m-%d")
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
OUTPUT_FILE="${OUTPUT_DIR}/kv-backup-${DATE}.json"

# ── Parse args ───────────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case $1 in
    --output-dir) OUTPUT_DIR="$2"; OUTPUT_FILE="${OUTPUT_DIR}/kv-backup-${DATE}.json"; shift 2 ;;
    --retain-days) RETAIN_DAYS="$2"; shift 2 ;;
    *) echo "Unknown argument: $1" >&2; exit 1 ;;
  esac
done

# ── Preflight checks ─────────────────────────────────────────────────────────
if ! command -v wrangler &>/dev/null; then
  echo "ERROR: wrangler CLI not found. Install with: npm install -g wrangler" >&2
  exit 1
fi
if ! command -v jq &>/dev/null; then
  echo "ERROR: jq not found. Install with: brew install jq (macOS) or apt install jq" >&2
  exit 1
fi
if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "ERROR: CLOUDFLARE_API_TOKEN is not set." >&2
  exit 1
fi

# ── Setup ────────────────────────────────────────────────────────────────────
mkdir -p "$OUTPUT_DIR"
echo "==> Nexphoria KV Backup — ${TIMESTAMP}"
echo "    Namespace: ${KV_NAMESPACE_ID}"
echo "    Output:    ${OUTPUT_FILE}"

# ── List all keys ────────────────────────────────────────────────────────────
echo "==> Listing KV keys..."
KEYS_JSON=$(wrangler kv key list \
  --namespace-id "$KV_NAMESPACE_ID" \
  --remote 2>/dev/null)

KEY_COUNT=$(echo "$KEYS_JSON" | jq 'length')
echo "    Found ${KEY_COUNT} keys"

if [[ "$KEY_COUNT" -eq 0 ]]; then
  echo "    WARNING: No keys found — namespace may be empty or there may be an auth issue."
fi

# ── Export each key's value ───────────────────────────────────────────────────
echo "==> Exporting key values..."
TMP_FILE=$(mktemp)
trap "rm -f $TMP_FILE" EXIT

echo "$KEYS_JSON" | jq -r '.[].name' | while IFS= read -r KEY; do
  VALUE=$(wrangler kv key get \
    --namespace-id "$KV_NAMESPACE_ID" \
    --remote "$KEY" 2>/dev/null || echo "null")

  # Attempt to parse as JSON; store raw string if not valid JSON
  if echo "$VALUE" | jq -e . &>/dev/null 2>&1; then
    PARSED_VALUE=$(echo "$VALUE" | jq -c .)
  else
    PARSED_VALUE=$(jq -n --arg v "$VALUE" '$v')
  fi

  jq -n \
    --arg key "$KEY" \
    --argjson value "$PARSED_VALUE" \
    '{"key": $key, "value": $value}' >> "$TMP_FILE"
done

# ── Assemble final JSON ───────────────────────────────────────────────────────
ENTRIES_ARRAY=$(jq -s '.' "$TMP_FILE")
ACTUAL_COUNT=$(echo "$ENTRIES_ARRAY" | jq 'length')

jq -n \
  --arg date "$DATE" \
  --arg timestamp "$TIMESTAMP" \
  --arg namespace_id "$KV_NAMESPACE_ID" \
  --argjson key_count "$ACTUAL_COUNT" \
  --argjson entries "$ENTRIES_ARRAY" \
  '{
    "backup_date": $date,
    "backup_timestamp": $timestamp,
    "namespace_id": $namespace_id,
    "key_count": $key_count,
    "format_version": "1.0",
    "entries": $entries
  }' > "$OUTPUT_FILE"

echo "==> Backup written: ${OUTPUT_FILE} (${ACTUAL_COUNT} entries)"

# ── Prune old backups ─────────────────────────────────────────────────────────
echo "==> Pruning backups older than ${RETAIN_DAYS} days..."
PRUNED=0
while IFS= read -r OLD_FILE; do
  echo "    Removing: ${OLD_FILE}"
  rm -f "$OLD_FILE"
  PRUNED=$((PRUNED + 1))
done < <(find "$OUTPUT_DIR" -name "kv-backup-*.json" -mtime "+${RETAIN_DAYS}" 2>/dev/null || true)
echo "    Pruned ${PRUNED} old backup(s)"

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
echo "==> Backup complete."
echo "    Date:      ${DATE}"
echo "    Keys:      ${ACTUAL_COUNT}"
echo "    File:      ${OUTPUT_FILE}"
echo "    Retained:  ${RETAIN_DAYS} days"
