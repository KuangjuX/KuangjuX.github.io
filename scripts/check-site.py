#!/usr/bin/env python3
"""Check generated content, local links, fragments, and removed reading routes."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.ids, self.links, self.text = path, set(), [], []
        self.duplicates = []
        self.meta = {}
        self.lang = None
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                self.duplicates.append(attrs['id'])
            self.ids.add(attrs['id'])
        if tag == 'html':
            self.lang = attrs.get('lang')
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content')
        for name in ('href', 'src'):
            if name in attrs:
                self.links.append(attrs[name])

    def handle_data(self, text):
        self.text.append(text)

pages = {p: Page(p) for p in ROOT.glob('*.html')}
errors = []
for path, page in pages.items():
    errors.extend(f'{path.name}: duplicate id {i}' for i in page.duplicates)
    for href in page.links:
        url = urlsplit(href)
        if url.scheme or url.netloc:
            continue
        target = (ROOT / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path)) if url.path else path
        target = target.resolve()
        if target.is_dir():
            target /= 'index.html'
        if not target.exists():
            errors.append(f'{path.name}: missing {href}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{path.name}: missing fragment {href}')

for filename, lang in [('index.html', 'en'), ('zh.html', 'zh')]:
    page = pages[ROOT / filename]
    text = ' '.join(page.text)
    for term in ['WeLM', 'TileFusion', 'FractalTensor', 'SOSP 2024', 'Light-DuoAttention', 'ncu-cli']:
        if term not in text:
            errors.append(f'{filename}: missing static content {term}')
    if page.lang != lang:
        errors.append(f'{filename}: incorrect language')
    for key in ['description', 'og:title', 'og:description', 'og:url', 'og:image']:
        if not page.meta.get(key):
            errors.append(f'{filename}: missing {key}')
    for pdf in ['resume.pdf', 'resume-zh.pdf']:
        if not any(urlsplit(link).path.endswith('/' + pdf) and 'v=' in urlsplit(link).query for link in page.links):
            errors.append(f'{filename}: missing versioned {pdf}')
    if 'https://notes.kuangjux.top/' not in page.links:
        errors.append(f'{filename}: missing Notes link')

for path in [*ROOT.glob('*.html'), *ROOT.glob('js/**/*.js'), *ROOT.glob('.github/workflows/*')]:
    if 'papers.html' in path.read_text() or 'js/data/papers.js' in path.read_text():
        errors.append(f'{path.relative_to(ROOT)}: obsolete reading route reference')
if (ROOT / 'papers.html').exists():
    errors.append('Removed papers.html still exists')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} pages; local assets, fragments, bilingual static content, CVs, metadata, and Notes links.')
