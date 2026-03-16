function renderProfile() {
    const data = getData();
    const { name, title, description, avatar, email, github, linkedin, zhihu, scholar, orcid, xiaohongshu, cv } = data.profile;

    const avatarImg = document.querySelector('.hero-image img');
    if (avatarImg && avatar) {
        avatarImg.src = avatar;
        avatarImg.alt = name;
    }

    document.querySelector('.hero-title').textContent = name;
    document.querySelector('.hero-subtitle').textContent = title;
    document.querySelector('.hero-description').innerHTML = description;

    const socialLinks = document.querySelectorAll('.social-link');

    if (socialLinks[0] && email) {
        socialLinks[0].href = `mailto:${email}`;
    }
    if (socialLinks[1] && github) {
        socialLinks[1].href = github;
        socialLinks[1].setAttribute('target', '_blank');
        socialLinks[1].setAttribute('rel', 'noopener noreferrer');
    }
    if (socialLinks[2] && linkedin) {
        socialLinks[2].href = linkedin;
        socialLinks[2].setAttribute('target', '_blank');
        socialLinks[2].setAttribute('rel', 'noopener noreferrer');
    }
    if (socialLinks[3] && zhihu) {
        socialLinks[3].href = zhihu;
        socialLinks[3].setAttribute('target', '_blank');
        socialLinks[3].setAttribute('rel', 'noopener noreferrer');
    }
    if (socialLinks[4] && scholar) {
        socialLinks[4].href = scholar;
        socialLinks[4].setAttribute('target', '_blank');
        socialLinks[4].setAttribute('rel', 'noopener noreferrer');
        socialLinks[4].style.display = scholar && scholar !== '#' ? '' : 'none';
    }
    if (socialLinks[5] && orcid) {
        socialLinks[5].href = orcid;
        socialLinks[5].setAttribute('target', '_blank');
        socialLinks[5].setAttribute('rel', 'noopener noreferrer');
    }
    if (socialLinks[6] && xiaohongshu) {
        socialLinks[6].href = xiaohongshu;
        socialLinks[6].setAttribute('target', '_blank');
        socialLinks[6].setAttribute('rel', 'noopener noreferrer');
    }

    const cvButton = document.querySelector('.cv-button');
    if (cvButton && cv) {
        cvButton.href = cv;
        const cvLabel = cvButton.querySelector('span');
        if (cvLabel) cvLabel.textContent = data.ui.cvButton;
    }
}

function renderEducation() {
    const data = getData();
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';

    data.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${edu.degree}</h3>
                    <span class="timeline-date">${edu.date}</span>
                </div>
                <p class="timeline-location">${edu.institution}</p>
                <p class="timeline-description">${edu.description}</p>
            </div>
        `;
        timeline.appendChild(item);
    });
}

function renderExperiences() {
    const data = getData();
    const grid = document.querySelector('.experience-grid');
    grid.innerHTML = '';

    data.experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        card.innerHTML = `
            <div class="experience-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <h3>${exp.title}</h3>
            <p class="experience-company">${exp.company}</p>
            <p class="experience-date">${exp.date}</p>
            <p class="experience-description">${exp.description}</p>
        `;
        grid.appendChild(card);
    });
}

function renderProjects() {
    const data = getData();
    const grid = document.querySelector('.projects-grid');
    grid.innerHTML = '';

    data.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const linksHTML = `
            ${project.github ? `<a href="${project.github}" class="project-link github-link" target="_blank" title="View on GitHub"><i class="fab fa-github"></i></a>` : ''}
            ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="project-link demo-link" target="_blank" title="View Demo"><i class="fas fa-play-circle"></i></a>` : ''}
        `;

        const starsHTML = project.stars ? `
            <div class="project-stars">
                <i class="fas fa-star"></i>
                <span class="stars-count">${project.stars.toLocaleString()}</span>
            </div>
        ` : '';

        card.innerHTML = `
            <div class="project-header">
                <div class="project-title-row">
                    <h3>${project.name}</h3>
                    ${starsHTML}
                </div>
                <div class="project-links">${linksHTML}</div>
            </div>
            <div class="project-tags">${tagsHTML}</div>
            <p class="project-description">${project.description}</p>
        `;
        grid.appendChild(card);
    });
}

function renderFunProjects() {
    const data = getData();
    const grid = document.querySelector('.fun-projects-grid');
    if (!grid || !data.funProjects) return;
    grid.innerHTML = '';

    data.funProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const linksHTML = project.github
            ? `<a href="${project.github}" class="project-link github-link" target="_blank" title="View on GitHub"><i class="fab fa-github"></i></a>`
            : '';

        const starsHTML = project.stars ? `
            <div class="project-stars">
                <i class="fas fa-star"></i>
                <span class="stars-count">${project.stars.toLocaleString()}</span>
            </div>
        ` : '';

        card.innerHTML = `
            <div class="project-header">
                <div class="project-title-row">
                    <h3>${project.name}</h3>
                    ${starsHTML}
                </div>
                <div class="project-links">${linksHTML}</div>
            </div>
            <div class="project-tags">${tagsHTML}</div>
            <p class="project-description">${project.description}</p>
        `;
        grid.appendChild(card);
    });
}

function renderPublications() {
    const data = getData();
    const list = document.querySelector('.publications-list');
    list.innerHTML = '';

    data.publications.forEach(pub => {
        const item = document.createElement('div');
        item.className = 'publication-item';

        const authorsHTML = pub.authors.map(author => {
            if (author === pub.authorBold) {
                return `<strong>${author}</strong>`;
            }
            return author;
        }).join(', ');

        const linksHTML = Object.entries(pub.links).map(([key, url]) => {
            const icons = { pdf: 'fa-file-pdf', code: 'fa-code', link: 'fa-link', bibtex: 'fa-quote-left', video: 'fa-video' };
            const labels = { pdf: 'PDF', code: 'Code', link: 'Link', bibtex: 'BibTeX', video: 'Video' };
            return `<a href="${url}" class="btn btn-small"><i class="fas ${icons[key]}"></i> ${labels[key]}</a>`;
        }).join('');

        const imageHTML = pub.image ? `
            <div class="publication-image">
                <img src="${pub.image}" alt="${pub.title} - Overview" loading="lazy">
            </div>
        ` : '';

        item.innerHTML = `
            ${imageHTML}
            <div class="publication-content">
                <h3 class="publication-title">${pub.title}</h3>
                <p class="publication-authors">${authorsHTML}</p>
                <p class="publication-venue">${pub.venue}</p>
                <div class="publication-links">${linksHTML}</div>
            </div>
        `;
        list.appendChild(item);
    });
}

function renderAwards() {
    const data = getData();
    const grid = document.querySelector('.awards-grid');
    grid.innerHTML = '';

    data.awards.forEach(award => {
        const card = document.createElement('div');
        card.className = 'award-card';
        card.innerHTML = `
            <div class="award-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <h3>${award.name}</h3>
            <p class="award-venue">${award.venue}</p>
            <p class="award-date">${award.date}</p>
        `;
        grid.appendChild(card);
    });
}

function renderTalks() {
    const data = getData();
    const list = document.querySelector('.talks-list');
    list.innerHTML = '';

    data.talks.forEach(talk => {
        const item = document.createElement('div');
        item.className = 'talk-item';

        const linksHTML = Object.entries(talk.links).map(([key, url]) => {
            const icons = { slides: 'fa-file-powerpoint', recording: 'fa-video' };
            const labels = { slides: 'Slides', recording: 'Recording' };
            return `<a href="${url}" class="btn btn-small"><i class="fas ${icons[key]}"></i> ${labels[key]}</a>`;
        }).join('');

        item.innerHTML = `
            <div class="talk-content">
                <h3 class="talk-title">${talk.title}</h3>
                <p class="talk-venue">${talk.venue}</p>
                <p class="talk-date">${talk.date}</p>
                <p class="talk-description">${talk.description}</p>
            </div>
            <div class="talk-links">${linksHTML}</div>
        `;
        list.appendChild(item);
    });
}

function renderTechStack() {
    const data = getData();
    const container = document.querySelector('.tech-stack-map');
    const subtitle = document.querySelector('.tech-stack-subtitle');
    if (!container || !data.techStack) return;

    const { layers, subtitle: subtitleText } = data.techStack;

    if (subtitle && subtitleText) {
        subtitle.textContent = subtitleText;
    }

    container.innerHTML = '';

    layers.forEach((layer, index) => {
        if (index > 0) {
            const arrow = document.createElement('div');
            arrow.className = 'tech-stack-arrow';
            arrow.innerHTML = '&#9650;';
            container.appendChild(arrow);
        }

        const row = document.createElement('div');
        row.className = 'tech-stack-layer';

        const itemsHTML = layer.items.map(item => {
            const noteHTML = item.note ? `<span class="tech-item-note">${item.note}</span>` : '';
            return `<span class="tech-item">${item.name} ${noteHTML}</span>`;
        }).join('');

        row.innerHTML = `
            <div class="tech-layer-label">
                <div class="tech-layer-indicator" style="background-color: ${layer.color}"></div>
                <span class="tech-layer-name">${layer.name}</span>
            </div>
            <div class="tech-layer-items">${itemsHTML}</div>
        `;

        container.appendChild(row);
    });
}

function renderRunningPreview() {
    const row = document.querySelector('.running-preview .running-stats-row');
    if (!row || typeof runningData === 'undefined') return;

    const lang = getCurrentLang();
    const data = runningData[lang];
    row.innerHTML = '';

    const keys = ['totalDistance', 'totalRuns', 'avgPace', 'totalDuration', 'longestRun'];
    keys.forEach(key => {
        const card = document.createElement('div');
        card.className = 'running-stat-card';
        card.innerHTML = `
            <span class="running-stat-value">${data.summary[key]}</span>
            <span class="running-stat-label">${data.summaryLabels[key]}</span>
        `;
        row.appendChild(card);
    });

    const link = document.querySelector('.running-preview-link span');
    if (link) {
        link.textContent = lang === 'zh' ? '查看完整跑步记录' : 'View full running log';
    }
}

function renderUI() {
    const data = getData();
    const ui = data.ui;

    document.querySelectorAll('.section-title').forEach(el => {
        const section = el.closest('section');
        if (!section) return;
        const id = section.id;
        if (id === 'education') el.textContent = ui.sections.education;
        else if (id === 'experience') el.textContent = ui.sections.experiences;
        else if (id === 'projects') el.textContent = ui.sections.projects;
        else if (id === 'fun-projects') el.textContent = ui.sections.funProjects;
        else if (id === 'publications') el.textContent = ui.sections.publications;
        else if (id === 'awards') el.textContent = ui.sections.awards;
        else if (id === 'talks') el.textContent = ui.sections.talks;
        else if (id === 'running') el.textContent = typeof runningData !== 'undefined' ? runningData[getCurrentLang()].sectionTitle : 'Running';
    });

    const funSubtitle = document.querySelector('#fun-projects .section-subtitle');
    if (funSubtitle) funSubtitle.textContent = ui.sections.funProjectsSubtitle;

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = ui.nav.home;
        else if (href === 'writings.html') link.textContent = ui.nav.writings;
        else if (href === 'papers.html') link.textContent = ui.nav.papers;
        else if (href === 'running.html') link.textContent = typeof runningData !== 'undefined' ? runningData[getCurrentLang()].sectionTitle : 'Running';
    });

    const footer = document.querySelector('.footer .container');
    if (footer) {
        footer.innerHTML = `
            <p>${ui.footer.rights}</p>
            <p>${ui.footer.updated}</p>
        `;
    }

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.textContent = getCurrentLang() === 'en' ? 'Chinese' : '英文';
    }
}

function renderAll() {
    if (!document.querySelector('.hero')) return;
    renderUI();
    renderProfile();
    renderEducation();
    renderTechStack();
    renderExperiences();
    renderProjects();
    renderFunProjects();
    renderPublications();
    renderAwards();
    renderTalks();
    renderRunningPreview();
}

function switchLanguage() {
    const current = getCurrentLang();
    setCurrentLang(current === 'en' ? 'zh' : 'en');
    document.documentElement.lang = getCurrentLang();
    renderAll();
}

document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.lang = getCurrentLang();
    renderAll();
});
