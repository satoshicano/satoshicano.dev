#!/bin/sh

container run \
  --name hugo-dev \
  --rm \
  -p 1313:1313 \
  -v "$PWD:/src" \
  -w /src \
  -it \
  hugomods/hugo:latest \
  hugo server --bind 0.0.0.0