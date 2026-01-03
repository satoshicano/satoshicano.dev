#!/bin/sh

container run --rm \
  -v "$PWD:/src" \
  -w /src \
  hugomods/hugo:latest \
  hugo