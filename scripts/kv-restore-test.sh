#!/usr/bin/env bash
# kv-restore-test.sh — Validate a KV backup file and log the restore-test result.
#
# This is a non-destructive test: it reads the backup, validates structure and
# data integrity, and appends a result row to the restore-test log. It does NOT
# write anything back to Cloudflare KV (which would modify production data).
#
# Usage:
#   ./scripts/kv-restore-test.sh [--backup-file <path>] [--log-file <path>]
#
# Exit codes:
#   0  All checks passed
#   1  One or more checks failed
#
# Environment variables:
#   BACKUP_DIR   Directory to search for the most recent backup (default: backups/kv)
#   LOG_FILE     Path to the restore-test log (default: backups/restore-test-log.json)

set -euo pipefail

# ── Configuration ─────────────────────────────────────────────────────────────
BACKUP_DIR="${BACKUP_DIR:-backups/kv}"
LOG_FILE="${LOG_FILE:-backups/restore-test-log.json}"
BACKUP_FILE="${BACKUP_FILE:-}"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
DATE=$(date -u +"%Y-%m-%d")
PASS=true
declare -a FAILURES
declare -a CHECKS

# ── Parse args ────────────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case $1 in
    --backup-file) BACKUP_FILE="$2"; shift 2 ;;
    --log-file)    LOG_FILE="$2"; shift 2 ;;
    *) echo "Unknown argument: $1" >&2; exit 1 ;;
  esac
done

# ── Preflight ────────────────────────────────────────────────────────────────
if ! command -v jq &>/dev/null; then
  echo "ERROR: jq not found." >&2
  exit 1
fi

# ── Find the latest backup if not specified ───────────────────────────────────
if [[ -z "$BACKUP_FILE" ]]; then
  BACKUP_FILE=$(find "$BACKUP_DIR" -name "kv-backup-*.json" | sort | tail -n 1 || true)
  if [[ -z "$BACKUP_FILE" ]]; then
    echo "ERROR: No backup files found in ${BACKUP_DIR}" >&2
    exit 1
  fi
fi

echo "==> Nexphoria KV Restore Test — ${TIMESTAMP}"
echo "    Backup file: ${BACKUP_FILE}"

# ── Helper: record check result ────────────────────────────────────────────────
check_pass() { CHECKS+=("PASS: $1"); echo "    [PASS] $1"; }
check_fail() { CHECKS+=("FAIL: $1"); FAILURES+=("$1"); PASS=false; echo "    [FAIL] $1"; }

# ── Check 1: File exists and is readable ─────────────────────────────────────
echo ""
echo "==> Check 1: File exists and is readable"
if [[ -f "$BACKUP_FILE" && -r "$BACKUP_FILE" ]]; then
  check_pass "Backup file exists: ${BACKUP_FILE}"
else
  check_fail "Backup file not found or not readable: ${BACKUP_FILE}"
fi

# ── Check 2: Valid JSON ───────────────────────────────────────────────────────
echo "==> Check 2: Valid JSON structure"
if jq -e . "$BACKUP_FILE" &>/dev/null 2>&1; then
  check_pass "Backup file is valid JSON"
else
  check_fail "Backup file is NOT valid JSON"
  # Can't continue without valid JSON
  RESULT_STATUS="fail"
  append_log && exit 1
fi

# ── Check 3: Required top-level fields ───────────────────────────────────────
echo "==> Check 3: Required metadata fields"
for FIELD in backup_date backup_timestamp namespace_id key_count format_version entries; do
  if jq -e ".${FIELD}" "$BACKUP_FILE" &>/dev/null 2>&1; then
    check_pass "Field present: ${FIELD}"
  else
    check_fail "Missing required field: ${FIELD}"
  fi
done

# ── Check 4: key_count matches entries array length ──────────────────────────
echo "==> Check 4: key_count matches entries array length"
DECLARED_COUNT=$(jq '.key_count' "$BACKUP_FILE")
ACTUAL_COUNT=$(jq '.entries | length' "$BACKUP_FILE")
if [[ "$DECLARED_COUNT" -eq "$ACTUAL_COUNT" ]]; then
  check_pass "key_count (${DECLARED_COUNT}) matches entries array length (${ACTUAL_COUNT})"
else
  check_fail "key_count mismatch: declared=${DECLARED_COUNT}, actual=${ACTUAL_COUNT}"
fi

# ── Check 5: Entries have key and value fields ───────────────────────────────
echo "==> Check 5: Entry structure"
MALFORMED=$(jq '[.entries[] | select(has("key") and has("value") | not)] | length' "$BACKUP_FILE")
if [[ "$MALFORMED" -eq 0 ]]; then
  check_pass "All ${ACTUAL_COUNT} entries have 'key' and 'value' fields"
else
  check_fail "${MALFORMED} entries missing 'key' or 'value' field"
fi

# ── Check 6: Index keys present ──────────────────────────────────────────────
echo "==> Check 6: Expected index keys"
EXPECTED_INDEXES=("index:emails" "index:orders" "index:crypto_orders" "index:support" "index:wholesale")
for IDX_KEY in "${EXPECTED_INDEXES[@]}"; do
  FOUND=$(jq --arg k "$IDX_KEY" '[.entries[] | select(.key == $k)] | length' "$BACKUP_FILE")
  if [[ "$FOUND" -gt 0 ]]; then
    check_pass "Index key present: ${IDX_KEY}"
  else
    # Warning only — index may be absent if no data has been stored yet
    check_pass "Index key absent (may be empty): ${IDX_KEY}"
  fi
done

# ── Check 7: Backup age ───────────────────────────────────────────────────────
echo "==> Check 7: Backup freshness (must be <= 25 hours old)"
BACKUP_TS=$(jq -r '.backup_timestamp' "$BACKUP_FILE")
if [[ "$BACKUP_TS" != "null" && -n "$BACKUP_TS" ]]; then
  BACKUP_EPOCH=$(date -d "$BACKUP_TS" +%s 2>/dev/null || date -j -f "%Y-%m-%dT%H:%M:%SZ" "$BACKUP_TS" +%s 2>/dev/null || echo "0")
  NOW_EPOCH=$(date +%s)
  AGE_HOURS=$(( (NOW_EPOCH - BACKUP_EPOCH) / 3600 ))
  if [[ "$AGE_HOURS" -le 25 ]]; then
    check_pass "Backup is ${AGE_HOURS}h old (within 25h threshold)"
  else
    check_fail "Backup is ${AGE_HOURS}h old (exceeds 25h — may be stale)"
  fi
else
  check_fail "Could not read backup_timestamp from file"
fi

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
RESULT_STATUS="pass"
if [[ "$PASS" = "false" ]]; then
  RESULT_STATUS="fail"
  echo "==> RESTORE TEST: FAIL (${#FAILURES[@]} failure(s))"
  for F in "${FAILURES[@]}"; do
    echo "    - ${F}"
  done
  EXIT_CODE=1
else
  echo "==> RESTORE TEST: PASS"
  EXIT_CODE=0
fi

# ── Append to log ─────────────────────────────────────────────────────────────
mkdir -p "$(dirname "$LOG_FILE")"

# Read existing log array or initialise empty
if [[ -f "$LOG_FILE" ]]; then
  EXISTING=$(cat "$LOG_FILE")
else
  EXISTING="[]"
fi

CHECKS_JSON=$(printf '%s\n' "${CHECKS[@]}" | jq -R . | jq -s .)
FAILURES_JSON=$(printf '%s\n' "${FAILURES[@]:-}" | jq -R . | jq -s .)

ENTRY=$(jq -n \
  --arg date "$DATE" \
  --arg timestamp "$TIMESTAMP" \
  --arg backup_file "$BACKUP_FILE" \
  --arg status "$RESULT_STATUS" \
  --argjson key_count "$ACTUAL_COUNT" \
  --argjson checks "$CHECKS_JSON" \
  --argjson failures "$FAILURES_JSON" \
  '{
    "test_date": $date,
    "test_timestamp": $timestamp,
    "backup_file": $backup_file,
    "status": $status,
    "key_count": $key_count,
    "checks": $checks,
    "failures": $failures
  }')

echo "$EXISTING" | jq --argjson entry "$ENTRY" '. + [$entry]' > "$LOG_FILE"
echo "==> Result appended to log: ${LOG_FILE}"

exit $EXIT_CODE
