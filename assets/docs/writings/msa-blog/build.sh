#!/bin/sh
set -eu
blog_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$blog_dir"
mkdir -p build
# Tectonic reuses the machine's package cache after its first compilation.
if command -v tectonic >/dev/null 2>&1; then
  tectonic --keep-logs --keep-intermediates --synctex --outdir build main.tex
elif command -v latexmk >/dev/null 2>&1; then
  latexmk -xelatex -interaction=nonstopmode -halt-on-error -synctex=1 -outdir=build main.tex
else
  echo 'Please install Tectonic or a XeLaTeX distribution with latexmk.' >&2
  exit 1
fi
cp build/main.pdf msa-blog.pdf
printf '%s\n' "$blog_dir/msa-blog.pdf"
