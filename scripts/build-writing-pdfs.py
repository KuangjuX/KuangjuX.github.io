#!/usr/bin/env python3
"""Build the curated PDFs with Tectonic/LaTeX, then copy them to public assets."""
import argparse
import os
from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--tectonic", default="tectonic")
args = parser.parse_args()
output = ROOT / "output/pdf"
output.mkdir(parents=True, exist_ok=True)
sources = ROOT / "assets/docs/writings"
def split_novel():
    text = (sources / "fantasy-and-illness.txt").read_text()
    parts = []
    current = []
    for paragraph in text.strip().split("\n\n"):
        if paragraph in {"（一）", "（二）", "（三）", "（四）", "（五）"}:
            if current:
                parts.append(current)
            current = []
        else:
            current.append(paragraph)
    parts.append(current)
    for index, paragraphs in enumerate(parts, 1):
        (sources / f"fantasy-part-{index}.tex").write_text("\n\n".join(paragraphs) + "\n")

split_novel()
for name in ("gemm-memory", "fantasy-and-illness"):
    target = output / f"{name}.pdf"
    env = os.environ.copy()
    env.setdefault("TECTONIC_CACHE_DIR", "/private/tmp/tectonic-cache")
    subprocess.run([args.tectonic, "-X", "compile", str(sources / f"{name}.tex"),
                    "--outdir", str(output)], check=True, env=env)
    shutil.copyfile(target, sources / target.name)
    print(f"Built {target.name} ({target.stat().st_size:,} bytes)")
