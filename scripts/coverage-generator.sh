#!/bin/bash

# Usage check
if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <path-to-lcov.info>"
  exit 1
fi

LCOV_FILE="$1"

# Check if file exists
if [[ ! -f "$LCOV_FILE" ]]; then
  echo "Error: '$LCOV_FILE' not found!"
  exit 1
fi

# Calculate total lines and covered lines
total_lines=$(grep -c "^DA:" "$LCOV_FILE")
covered_lines=$(grep "^DA:" "$LCOV_FILE" | awk -F',' '$2 > 0 {sum++} END {print sum+0}')

# Calculate coverage percentage (integer only)
if [[ $total_lines -eq 0 ]]; then
  coverage=0
else
  coverage=$(( covered_lines * 100 / total_lines ))
fi

echo "Overall Coverage: $coverage%"

# Generate a Shields.io badge
COLOR="red"
if [[ $coverage -ge 90 ]]; then
  COLOR="brightgreen"
elif [[ $coverage -ge 75 ]]; then
  COLOR="yellow"
fi

BADGE_URL="https://img.shields.io/badge/coverage-${coverage}%25-${COLOR}.svg"

# Download badge
curl -s -o coverage-badge.svg "$BADGE_URL"
echo "Badge generated: coverage-badge.svg"
