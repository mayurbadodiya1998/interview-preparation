#!/bin/bash

# Add favicon link to all HTML files that don't have it yet
find /Users/mayurbadodiya/Desktop/mayur/projects/projects/interview-preparation/topics -name "*.html" -type f | while read file; do
  if ! grep -q 'rel="icon"' "$file"; then
    sed -i '' '/<meta name="robots"/a\
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any">' "$file"
    echo "Updated: $file"
  fi
done

echo "✓ Favicon link added to all topic HTML files"
