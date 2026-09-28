import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFileSync(root + file, 'utf8');
const load = (file, name) => vm.runInNewContext(`${read(file)}; ${name}`);
const profile = load('js/data/profile.js', 'portfolioData');
const home = load('js/data/home.js', 'homeData');
const writings = load('js/data/writings.js', 'writingsData');
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const plain = value => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const link = (url, label, attrs = '') => `<a href="${esc(url)}" ${attrs}>${esc(label)}</a>`;
const versioned = file => `${file}?v=${createHash('sha256').update(readFileSync(root + file)).digest('hex').slice(0, 10)}`;
const checkOnly = process.argv.includes('--check');
let stale = false;

for (const lang of ['en', 'zh']) {
    const p = profile[lang], h = home[lang], zh = lang === 'zh';
    const filename = zh ? 'zh.html' : 'index.html';
    const url = `https://kuangjux.top/${zh ? 'zh.html' : ''}`;
    const resumeLinks = `${link(versioned('assets/docs/resume.pdf'), 'English', 'type="application/pdf" hreflang="en"')}<span aria-hidden="true">/</span>${link(versioned('assets/docs/resume-zh.pdf'), '中文', 'type="application/pdf" hreflang="zh"')}`;
    const section = (id, title, content) => `<section id="${id}" class="home-section" aria-labelledby="${id}-title"><h2 id="${id}-title">${esc(title)}</h2>${content}</section>`;
    const stars = project => project?.stars ? `<span class="repo-stars" title="${zh ? '仓库 Stars' : 'Repository stars'}">☆ ${Number(project.stars).toLocaleString('en-US')}</span>` : '';
    const projectRow = project => `<article class="small-project"><h3>${link(project.github, project.name)} ${stars(project)}</h3><p>${project.description}</p>${project.demo && project.demo !== '#' ? link(project.demo, 'Demo') : ''}</article>`;
    const publication = pub => `<article class="publication"><div><p class="eyebrow">${esc(pub.venue)}</p><h3>${esc(plain(pub.title))}</h3><p class="authors">${pub.authors.map(a => a === pub.authorBold ? `<strong>${esc(a)}</strong>` : esc(a)).join(', ')}</p><div class="text-links">${Object.entries(pub.links).map(([key, value]) => link(value, key === 'pdf' ? 'PDF' : key === 'code' ? h.code : key)).join('')}</div></div>${pub.image ? `<img src="${esc(pub.image)}" alt="${esc(plain(pub.title))}" width="240" loading="lazy">` : ''}</article>`;
    const selected = h.highlights.map((item, i) => `<article class="selected-item"><span class="work-number" aria-hidden="true">0${i + 1}</span><div><div class="work-heading"><h3>${esc(item.name)}</h3>${stars(p.projects.find(project => project.name === item.project))}</div><p class="work-role">${esc(item.role)}</p><p>${esc(item.text)}</p><div class="text-links">${item.links.map(l => link(l.url, l.label)).join('')}</div></div></article>`).join('\n');
    const experience = p.experiences.map((exp, i) => `<article class="career-row"><p class="career-date">${esc(exp.date)}</p><div><h3>${esc(exp.company)}</h3><p class="career-role">${esc(exp.title)}</p>${i === 0 ? `<div class="experience-description">${exp.description.trim()}</div>` : `<p>${esc(h.experienceSummaries[i])}</p><details><summary>${esc(h.details)}</summary><div class="experience-description">${exp.description.trim()}</div></details>`}</div></article>`).join('\n');
    const articles = h.articles.map(item => {
        const source = writings.writings.find(w => w.title.includes(item.match));
        if (!source) throw Error(`Missing writing: ${item.match}`);
        return `<article class="writing-row"><p class="eyebrow">${esc(source.date)} · ${esc(h.articleLanguage)}</p><h3>${link(source.link, item.title)}</h3><p>${esc(item.text)}</p></article>`;
    }).join('\n');
    const featuredProjects = new Set(h.highlights.map(item => item.project));
    const otherProjects = [...p.projects.filter(project => !featuredProjects.has(project.name)), ...p.funProjects.filter(project => project.name !== 'ncu-cli')];
    const extra = `<details class="archive"><summary>${esc(h.more)} <span class="count">${otherProjects.length}</span></summary><div class="archive-content">${otherProjects.map(projectRow).join('\n')}</div></details>`;
    const awards = `<details class="archive"><summary>${esc(h.background)}</summary><div class="archive-content"><ul>${p.awards.map(a => `<li><strong>${esc(a.name)}</strong> · ${esc(a.venue)} · ${esc(a.date)}</li>`).join('')}</ul>${p.talks.map(t => `<article class="small-project"><h3>${esc(t.title)}</h3><p class="eyebrow">${esc(t.venue)} · ${esc(t.date)}</p><p>${esc(t.description)}</p>${link(t.links.slides, h.slides)}</article>`).join('')}</div></details>`;
    const education = p.education.map(edu => `<article class="career-row education-row"><p class="career-date">${esc(edu.date)}</p><div><h3>${esc(edu.institution)}</h3><p>${esc(edu.degree)}</p><div class="education-detail">${edu.description}</div></div></article>`).join('');
    const html = `<!DOCTYPE html>
<!-- Generated by scripts/build-home.mjs. Edit js/data/profile.js or js/data/home.js. -->
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(h.name)} · ML Systems Engineer</title>
    <meta name="description" content="${esc(h.description)}">
    <link rel="canonical" href="${url}">
    <link rel="alternate" hreflang="en" href="https://kuangjux.top/">
    <link rel="alternate" hreflang="zh" href="https://kuangjux.top/zh.html">
    <link rel="alternate" hreflang="x-default" href="https://kuangjux.top/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${esc(h.name)} · ML Systems Engineer">
    <meta property="og:description" content="${esc(h.description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="https://kuangjux.top/${esc(p.profile.avatar)}">
    <meta property="og:locale" content="${zh ? 'zh_CN' : 'en_US'}">
    <meta name="twitter:card" content="summary">
    <link rel="stylesheet" href="${versioned('css/base.css')}">
    <link rel="stylesheet" href="${versioned('css/home.css')}">
    <script src="${versioned('js/common.js')}" defer></script>
    <script src="${versioned('js/render/home.js')}" defer></script>
</head>
<body class="home-page" data-home-lang="${lang}">
<a class="skip-link" href="#main">${zh ? '跳至正文' : 'Skip to content'}</a>
<nav class="navbar" aria-label="${zh ? '主导航' : 'Main navigation'}"><div class="container"><div class="nav-content">
    <a href="${filename}" class="nav-brand">Chengxiang Qi</a>
    <button class="nav-toggle" aria-label="${zh ? '展开导航' : 'Toggle navigation'}" aria-expanded="false" aria-controls="main-nav"><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span></button>
    <div class="nav-links" id="main-nav">
        ${link(filename, zh ? '首页' : 'Home', 'class="nav-link active" aria-current="page"')}
        ${link('writings.html', zh ? '文章' : 'Writings', 'class="nav-link"')}
        ${link('https://notes.kuangjux.top/', zh ? '笔记 ↗' : 'Notes ↗', 'class="nav-link"')}
        ${link('running.html', zh ? '跑步' : 'Running', 'class="nav-link"')}
        ${link(zh ? 'index.html' : 'zh.html', zh ? 'English' : '中文', `class="nav-link language-link" hreflang="${zh ? 'en' : 'zh'}" lang="${zh ? 'en' : 'zh'}"`)}
    </div>
</div></div></nav>
<main id="main" class="home-main">
    <header class="intro">
        <div class="intro-copy"><p class="eyebrow">${esc(p.profile.title)}</p><h1>${esc(h.name)} <span>${esc(h.otherName)}</span></h1><div class="intro-description">${p.profile.description}</div>
            <div class="text-links contact-links">${link(`mailto:${p.profile.email}`, 'Email')}${link(p.profile.github, 'GitHub')}${link(p.profile.scholar, 'Scholar')}${link(p.profile.linkedin, 'LinkedIn')}${link(p.profile.zhihu, '知乎')}</div>
            <div class="resume-links"><strong>${esc(h.resume)}</strong>${resumeLinks}<span class="resume-date">${esc(h.resumeDate)}</span></div>
        </div>
        <img class="portrait" src="${esc(p.profile.avatar)}" alt="${esc(h.name)}" width="176" height="220" fetchpriority="high">
    </header>
    <nav class="section-nav" aria-label="${zh ? '本页目录' : 'On this page'}">${[['selected-work', h.selected], ['experience', h.experience], ['publications', h.publications], ['writing', h.writing], ['education', h.education]].map(([id, text]) => link(`#${id}`, text)).join('')}</nav>
    ${section('selected-work', h.selected, selected)}
    ${section('experience', h.experience, experience)}
    ${section('publications', h.publications, publication(p.publications[0]) + `<details class="archive"><summary>${esc(h.earlierResearch)}</summary><div class="archive-content">${p.publications.slice(1).map(publication).join('')}</div></details>`)}
    ${section('writing', h.writing, articles + `<p class="writing-more">${link('writings.html', `${h.allWriting} →`)}</p><aside class="notes-callout"><h3>${link('https://notes.kuangjux.top/', `${h.notesTitle} ↗`)}</h3><p>${esc(h.notesText)}</p><p class="small-note">${esc(h.writingsText)}</p></aside>`)}
    ${section('tools', h.tools, projectRow(p.funProjects.find(project => project.name === 'ncu-cli')) + extra)}
    ${section('education', h.education, education + awards)}
    ${section('personal', h.personal, `<p>${esc(h.runningText)}</p><div class="text-links">${link('running.html', h.runningLink)}${link('writings.html?category=essays', h.essaysLink)}${link(p.profile.xiaohongshu, '小红书')}${link(p.profile.orcid, 'ORCID')}</div>`)}
</main>
<footer class="footer"><div class="container"><p>© 2026 ${esc(h.name)} · ${link(`mailto:${p.profile.email}`, 'Email')} · ${link(p.profile.github, 'GitHub')}</p><p>${zh ? '内容更新' : 'Content updated'} <time datetime="${home.updated}">${home.updated}</time></p></div></footer>
</body>
</html>
`.replace(/[ \t]+$/gm, '');
    if (checkOnly) {
        if (read(filename) !== html) { console.error(`Stale generated file: ${filename}`); stale = true; }
    } else {
        writeFileSync(root + filename, html);
        console.log(`Built ${filename}`);
    }
}
if (stale) process.exitCode = 1;
