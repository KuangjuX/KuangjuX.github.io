#!/usr/bin/env python3
"""
Fetch the Paper-reading README.md from GitHub and generate js/data/papers.js.

Existing takeaways in papers.js are preserved: the script loads the current
papers.js, builds a {title -> takeaway} map, and reuses those values when
regenerating the file.
"""

import json
import re
import urllib.request
from pathlib import Path

README_URL = (
    "https://raw.githubusercontent.com/KuangjuX/Paper-reading/main/README.md"
)

SECTION_TO_CATEGORY = {
    "Deep Learning Compiler": "dl-compiler",
    "LLM Inference": "llm-inference",
    "LLM Training": "llm-training",
    "Deep Learning": "deep-learning",
    "GPU Microarchitecture": "systems",
    "Math Foundations": "systems",
    "Compiler": "systems",
    "Operating Systems": "systems",
    "Hypervisor & Virtualization": "systems",
    "RISC-V": "systems",
}

CATEGORIES_JS = [
    {"id": "all", "label": "All"},
    {"id": "dl-compiler", "label": "DL Compiler"},
    {"id": "llm-inference", "label": "LLM Inference"},
    {"id": "llm-training", "label": "LLM Training"},
    {"id": "deep-learning", "label": "Deep Learning"},
    {"id": "systems", "label": "OS / Hypervisor"},
]

REPO_BASE = "https://github.com/KuangjuX/Paper-reading/blob/main/"


def strip_emoji_prefix(text: str) -> str:
    """Remove leading emoji + space from section titles like '🔧 Deep Learning Compiler'."""
    return re.sub(r"^[\U00010000-\U0010ffff\u2600-\u27bf\u2b50]\s*", "", text).strip()


def normalize_link(href: str) -> str:
    """Turn repo-relative links into absolute GitHub URLs; leave absolute URLs as-is."""
    if not href:
        return ""
    if href.startswith(("http://", "https://")):
        return href
    return REPO_BASE + href.lstrip("/")


def extract_links(cell: str):
    """Parse the Links column and return (paper_url, note_url)."""
    paper_url = ""
    note_url = ""
    for m in re.finditer(r"\[([^\]]+)\]\(([^)]+)\)", cell):
        label, url = m.group(1).strip(), m.group(2).strip()
        url = normalize_link(url)
        if label.lower() == "paper":
            paper_url = url
        elif label.lower() == "note":
            note_url = url
    return paper_url, note_url


def parse_table_row(line: str):
    """Parse a Markdown table row into cells, stripping whitespace."""
    cells = line.strip().strip("|").split("|")
    return [c.strip() for c in cells]


def parse_readme(text: str) -> list[dict]:
    """Parse the README and return a list of paper dicts."""
    papers = []
    current_section = None
    in_table = False

    for line in text.splitlines():
        line_stripped = line.strip()

        if line_stripped.startswith("## "):
            raw_title = line_stripped.lstrip("#").strip()
            current_section = strip_emoji_prefix(raw_title)
            in_table = False
            continue

        if line_stripped.startswith("### "):
            in_table = False
            continue

        if re.match(r"^\|[\s:]*-", line_stripped):
            in_table = True
            continue

        if line_stripped.startswith("| Status"):
            in_table = False
            continue

        if in_table and line_stripped.startswith("|") and current_section:
            cells = parse_table_row(line_stripped)
            if len(cells) < 4:
                continue

            status_cell = cells[0]
            title_cell = cells[1]
            venue_cell = cells[2]
            links_cell = cells[3]

            status = "read" if "✅" in status_cell else "toread"
            title = re.sub(r"\*\*(.+?)\*\*", r"\1", title_cell).strip()
            venue = venue_cell.strip()
            paper_url, note_url = extract_links(links_cell)

            category = SECTION_TO_CATEGORY.get(current_section, "systems")

            papers.append(
                {
                    "category": category,
                    "status": status,
                    "title": title,
                    "venue": venue,
                    "paper": paper_url,
                    "note": note_url,
                    "takeaway": "",
                }
            )

    return papers


def load_existing_takeaways(js_path: Path) -> dict[str, str]:
    """Extract {title: takeaway} from the current papers.js file."""
    takeaways: dict[str, str] = {}
    if not js_path.exists():
        return takeaways

    content = js_path.read_text(encoding="utf-8")

    # Use regex to extract title/takeaway pairs directly from the JS source,
    # since the file uses unquoted keys (not valid JSON).
    # Match each paper object block and extract title + takeaway from it.
    block_pattern = re.compile(
        r"\{\s*category:.*?title:\s*\"([^\"]*)\""
        r".*?takeaway:\s*\"([^\"]*)\"\s*\}",
        re.DOTALL,
    )
    for m in block_pattern.finditer(content):
        title, takeaway = m.group(1), m.group(2)
        if takeaway:
            takeaways[title] = takeaway

    return takeaways


def generate_js(papers: list[dict]) -> str:
    """Generate the contents of papers.js."""
    categories_str = json.dumps(CATEGORIES_JS, indent=8, ensure_ascii=False)
    # Fix indentation to match existing style
    categories_str = categories_str.replace("\n", "\n    ")

    lines = []
    lines.append("const paperReadingData = {")
    lines.append('    pageTitle: "Reading Papers",')
    lines.append(
        '    pageSubtitle: "A curated collection of research papers on ML systems, '
        'compilers, architecture, and systems software — with brief takeaways.",'
    )
    lines.append('    repoLink: "https://github.com/KuangjuX/Paper-reading",')
    lines.append("")
    lines.append(f"    categories: {categories_str},")
    lines.append("")
    lines.append("    papers: [")

    current_cat = None
    category_labels = {c["id"]: c["label"] for c in CATEGORIES_JS}

    for p in papers:
        if p["category"] != current_cat:
            current_cat = p["category"]
            label = category_labels.get(current_cat, current_cat)
            lines.append(f"        // ── {label} ──")

        takeaway_escaped = p["takeaway"].replace("\\", "\\\\").replace('"', '\\"')
        lines.append("        {")
        lines.append(f'            category: "{p["category"]}",')
        lines.append(f'            status: "{p["status"]}",')
        lines.append(f'            title: "{p["title"]}",')
        lines.append(f'            venue: "{p["venue"]}",')
        lines.append(f'            paper: "{p["paper"]}",')
        lines.append(f'            note: "{p["note"]}",')
        lines.append(f'            takeaway: "{takeaway_escaped}"')
        lines.append("        },")

    lines.append("    ]")
    lines.append("};")
    lines.append("")

    return "\n".join(lines)


def main():
    script_dir = Path(__file__).resolve().parent
    repo_root = script_dir.parent
    js_path = repo_root / "js" / "data" / "papers.js"

    print(f"Fetching README from {README_URL} ...")
    with urllib.request.urlopen(README_URL) as resp:
        readme_text = resp.read().decode("utf-8")

    print("Parsing papers from README ...")
    papers = parse_readme(readme_text)
    print(f"  Found {len(papers)} papers")

    print("Loading existing takeaways ...")
    takeaways = load_existing_takeaways(js_path)
    print(f"  Loaded {len(takeaways)} takeaways")

    for p in papers:
        if p["title"] in takeaways:
            p["takeaway"] = takeaways[p["title"]]

    print(f"Writing {js_path} ...")
    js_content = generate_js(papers)
    js_path.write_text(js_content, encoding="utf-8")
    print("Done!")


if __name__ == "__main__":
    main()
