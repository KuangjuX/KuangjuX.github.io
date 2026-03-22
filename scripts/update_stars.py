#!/usr/bin/env python3
"""Fetch GitHub star counts and update js/data/profile.js in-place."""

import json
import os
import re
import sys
import urllib.request
import urllib.error


PROFILE_JS = os.path.join(os.path.dirname(__file__), "..", "js", "data", "profile.js")

GITHUB_API = "https://api.github.com/repos/{owner}/{repo}"


def extract_repos(text: str) -> list[dict]:
    """Return [{github_url, owner, repo}, ...] from project entries that have a stars field."""
    repos = []
    seen = set()
    # Match project blocks that contain both a github URL and a stars field
    for m in re.finditer(
        r'github:\s*"(https://github\.com/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+))"'
        r'[^}]*?stars:\s*\d+',
        text,
        re.DOTALL,
    ):
        url, owner, repo = m.group(1), m.group(2), m.group(3)
        key = f"{owner}/{repo}".lower()
        if key not in seen:
            seen.add(key)
            repos.append({"url": url, "owner": owner, "repo": repo})
    return repos


def fetch_stars(owner: str, repo: str) -> int | None:
    """Fetch stargazers_count via GitHub API. Returns None on failure."""
    url = GITHUB_API.format(owner=owner, repo=repo)
    headers = {"Accept": "application/vnd.github+json", "User-Agent": "update-stars-bot"}
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            return int(data["stargazers_count"])
    except (urllib.error.URLError, KeyError, ValueError) as exc:
        print(f"  WARNING: failed to fetch {owner}/{repo}: {exc}", file=sys.stderr)
        return None


def update_stars_in_text(text: str, url: str, new_stars: int) -> str:
    """Replace `stars: <old>` that follows the given github URL."""
    escaped = re.escape(url)
    pattern = rf'(github:\s*"{escaped}"[^}}]*?stars:\s*)\d+'
    return re.sub(pattern, rf"\g<1>{new_stars}", text)


def main() -> None:
    path = os.path.abspath(PROFILE_JS)
    print(f"Reading {path}")
    with open(path, encoding="utf-8") as f:
        original = f.read()

    repos = extract_repos(original)
    print(f"Found {len(repos)} unique repos")

    updated = original
    changed = False

    for r in repos:
        slug = f"{r['owner']}/{r['repo']}"
        stars = fetch_stars(r["owner"], r["repo"])
        if stars is None:
            continue

        old_match = re.search(
            rf'github:\s*"{re.escape(r["url"])}"[^}}]*?stars:\s*(\d+)', updated
        )
        if old_match:
            old_stars = int(old_match.group(1))
            if old_stars != stars:
                print(f"  {slug}: {old_stars} -> {stars}")
                updated = update_stars_in_text(updated, r["url"], stars)
                changed = True
            else:
                print(f"  {slug}: {stars} (unchanged)")
        else:
            print(f"  {slug}: no stars field found, skipping")

    if changed:
        with open(path, "w", encoding="utf-8") as f:
            f.write(updated)
        print("profile.js updated")
    else:
        print("No changes needed")


if __name__ == "__main__":
    main()
