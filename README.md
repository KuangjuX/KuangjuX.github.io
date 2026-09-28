# Chengxiang Qi — personal website

Bilingual portfolio hosted on GitHub Pages at [kuangjux.top](https://kuangjux.top/).

- `index.html` / `zh.html`: English and Chinese homepages, generated as complete static HTML.
- `writings.html`: technical articles, personal essays, fiction, and reflections, with search and category filters.
- `running.html`: interactive running log.
- [notes.kuangjux.top](https://notes.kuangjux.top/): reading notes and ongoing study. The former in-site paper reading page and synchronization workflow have been removed.

## Editing the homepages

Edit the source data, then regenerate both language versions. Do not edit the generated HTML directly.

| File | Content |
| --- | --- |
| `js/data/profile.js` | Shared profile, experience, education, projects, publications, awards, and talks |
| `js/data/home.js` | Homepage selections, summaries, bilingual labels, and content update date |
| `js/data/writings.js` | Full writing catalog; selected homepage articles resolve their URLs from this catalog |
| `css/home.css` | Homepage layout and responsive styles |
| `scripts/build-home.mjs` | Static HTML rendering, metadata, and content-based asset versioning |

Requires Node.js 18+ and Python 3 for validation. No npm dependencies or runtime build service are needed.

```sh
node scripts/build-home.mjs
node scripts/build-home.mjs --check
python3 scripts/check-site.py
python3 -m http.server 8000
```

Preview at `http://localhost:8000/` and `http://localhost:8000/zh.html`.

The language switch is an ordinary link. Homepage content, contact links, expandable sections, and both CV downloads work without JavaScript. JavaScript remembers the language for the running page and handles the mobile navigation. The two PDFs have content-based version parameters to avoid stale downloads after updates.

The GitHub Stars workflow updates `profile.js` and regenerates both homepages in the same commit. CI checks that generated pages are current and local links resolve.

## Resumes

- English: `assets/docs/resume.typ` → `assets/docs/resume.pdf`
- Chinese: `assets/docs/resume-zh.typ` → `assets/docs/resume-zh.pdf`

Build with Typst and the Noto Serif CJK SC font. After updating a PDF, run the homepage generator to refresh its download version, and visually check the PDF before publishing.

## Publishing

Commit the source data, generated HTML, and changed assets together, then push to `main` to update the existing GitHub Pages site. The `CNAME` file preserves the custom domain. This project does not use Sites hosting.
