#!/bin/sh

## posts/new-article.md
content=$0

container run --rm \
  -v "$PWD:/src" \
  -w /src \
  hugomods/hugo:latest \
  hugo new $content
