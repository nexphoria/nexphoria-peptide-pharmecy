#!/bin/bash
# Run with: GITHUB_TOKEN=<token> bash .github/scripts/setup-branch-protection.sh
# Sets up branch protection rules for the nexphoria repo

OWNER="chiya-lab"
REPO="nexphoria"
BRANCH="main"

curl -s -X PUT \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/$OWNER/$REPO/branches/$BRANCH/protection" \
  -d '{
    "required_status_checks": {
      "strict": true,
      "contexts": ["ci"]
    },
    "enforce_admins": false,
    "required_pull_request_reviews": {
      "required_approving_review_count": 1,
      "dismiss_stale_reviews": true
    },
    "restrictions": null,
    "required_linear_history": true,
    "allow_force_pushes": false,
    "allow_deletions": false
  }'

echo "Branch protection set for $BRANCH"
