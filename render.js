// 自动渲染页面内容
// 从 data.js 读取数据并填充到 HTML 中

// 渲染个人信息
function renderProfile() {
    const { name, title, description, avatar, email, github, linkedin, zhihu, scholar, orcid } = portfolioData.profile;
    
    // 设置头像
    const avatarImg = document.querySelector('.hero-image img');
    if (avatarImg && avatar) {
        avatarImg.src = avatar;
        avatarImg.alt = name;
    }
    
    document.querySelector('.hero-title').textContent = name;
    document.querySelector('.hero-subtitle').textContent = title;
    document.querySelector('.hero-description').innerHTML = description;
    
    // 更新社交链接（按照HTML中的顺序）
    const socialLinks = document.querySelectorAll('.social-link');
    
    // Email（不需要在新标签打开）
    if (socialLinks[0] && email) {
        socialLinks[0].href = `mailto:${email}`;
    }
    
    // GitHub
    if (socialLinks[1] && github) {
        socialLinks[1].href = github;
        socialLinks[1].setAttribute('target', '_blank');
        socialLinks[1].setAttribute('rel', 'noopener noreferrer');
    }
    
    // LinkedIn
    if (socialLinks[2] && linkedin) {
        socialLinks[2].href = linkedin;
        socialLinks[2].setAttribute('target', '_blank');
        socialLinks[2].setAttribute('rel', 'noopener noreferrer');
    }
    
    // 知乎
    if (socialLinks[3] && zhihu) {
        socialLinks[3].href = zhihu;
        socialLinks[3].setAttribute('target', '_blank');
        socialLinks[3].setAttribute('rel', 'noopener noreferrer');
    }
    
    // Google Scholar
    if (socialLinks[4] && scholar) {
        socialLinks[4].href = scholar;
        socialLinks[4].setAttribute('target', '_blank');
        socialLinks[4].setAttribute('rel', 'noopener noreferrer');
        socialLinks[4].style.display = scholar && scholar !== '#' ? '' : 'none';
    }
    
    // ORCID
    if (socialLinks[5] && orcid) {
        socialLinks[5].href = orcid;
        socialLinks[5].setAttribute('target', '_blank');
        socialLinks[5].setAttribute('rel', 'noopener noreferrer');
    }
}

// 渲染教育经历
function renderEducation() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';
    
    portfolioData.education.forEach(edu => {
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

// 渲染工作经历
function renderExperiences() {
    const grid = document.querySelector('.experience-grid');
    grid.innerHTML = '';
    
    portfolioData.experiences.forEach(exp => {
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

// 渲染项目
function renderProjects() {
    const grid = document.querySelector('.projects-grid');
    grid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const linksHTML = `
            ${project.github ? `<a href="${project.github}" class="project-link"><i class="fab fa-github"></i></a>` : ''}
            ${project.demo ? `<a href="${project.demo}" class="project-link"><i class="fas fa-external-link-alt"></i></a>` : ''}
        `;
        
        card.innerHTML = `
            <div class="project-header">
                <h3>${project.name}</h3>
                <div class="project-links">${linksHTML}</div>
            </div>
            <div class="project-tags">${tagsHTML}</div>
            <p class="project-description">${project.description}</p>
        `;
        grid.appendChild(card);
    });
}

// 渲染出版物
function renderPublications() {
    const list = document.querySelector('.publications-list');
    list.innerHTML = '';
    
    portfolioData.publications.forEach(pub => {
        const item = document.createElement('div');
        item.className = 'publication-item';
        
        // 处理作者列表，加粗特定作者
        const authorsHTML = pub.authors.map(author => {
            if (author === pub.authorBold) {
                return `<strong>${author}</strong>`;
            }
            return author;
        }).join(', ');
        
        // 生成链接
        const linksHTML = Object.entries(pub.links).map(([key, url]) => {
            const icons = {
                pdf: 'fa-file-pdf',
                code: 'fa-code',
                link: 'fa-link',
                bibtex: 'fa-quote-left',
                video: 'fa-video'
            };
            const labels = {
                pdf: 'PDF',
                code: 'Code',
                link: 'Link',
                bibtex: 'BibTeX',
                video: 'Video'
            };
            return `<a href="${url}" class="btn btn-small"><i class="fas ${icons[key]}"></i> ${labels[key]}</a>`;
        }).join('');
        
        // 生成图片 HTML（如果存在）
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

// 渲染奖项
function renderAwards() {
    const grid = document.querySelector('.awards-grid');
    grid.innerHTML = '';
    
    portfolioData.awards.forEach(award => {
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

// 渲染演讲
function renderTalks() {
    const list = document.querySelector('.talks-list');
    list.innerHTML = '';
    
    portfolioData.talks.forEach(talk => {
        const item = document.createElement('div');
        item.className = 'talk-item';
        
        const linksHTML = Object.entries(talk.links).map(([key, url]) => {
            const icons = {
                slides: 'fa-file-powerpoint',
                recording: 'fa-video'
            };
            const labels = {
                slides: 'Slides',
                recording: 'Recording'
            };
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

// 渲染博客（支持外部链接）
function renderBlogs() {
    const grid = document.querySelector('.blog-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (portfolioData.blogs.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-secondary); font-style: italic;">Coming soon...</p>';
        return;
    }
    
    portfolioData.blogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        
        // 显示发表平台（如果有）
        const platformText = blog.platform ? ` <span style="color: var(--text-light); font-size: 0.9rem;">[${blog.platform}]</span>` : '';
        
        card.innerHTML = `
            <div class="blog-date">${blog.date}</div>
            <h3 class="blog-title">
                <a href="${blog.link}" target="_blank" style="color: inherit; text-decoration: none;">
                    ${blog.title}${platformText}
                </a>
            </h3>
            <p class="blog-excerpt">${blog.excerpt}</p>
            <a href="${blog.link}" target="_blank" class="blog-link">
                Read on ${blog.platform || 'External Site'} <i class="fas fa-external-link-alt"></i>
            </a>
        `;
        grid.appendChild(card);
    });
}

// 分页配置
let currentPage = 1;
const itemsPerPage = 6; // 每页显示6篇文章
let currentFilter = 'all';

// 渲染文章页面（支持外部链接和分页）
function renderWritings(page = 1, filter = 'all') {
    if (typeof writingsData === 'undefined') {
        console.error('writingsData is not defined!');
        return;
    }
    
    console.log('Rendering writings...', writingsData);
    
    currentPage = page;
    currentFilter = filter;
    
    // 更新标题
    const heroTitle = document.querySelector('.writings-hero-title');
    const heroSubtitle = document.querySelector('.writings-hero-subtitle');
    if (heroTitle) heroTitle.textContent = writingsData.pageTitle;
    if (heroSubtitle) heroSubtitle.textContent = writingsData.pageSubtitle;
    
    // 渲染文章列表
    const grid = document.querySelector('.writings-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (!writingsData.writings || writingsData.writings.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-secondary); font-style: italic; text-align: center;">Coming soon...</p>';
        document.querySelector('.pagination').style.display = 'none';
        return;
    }
    
    console.log('Found writings:', writingsData.writings.length);
    
    // 根据过滤器筛选文章
    let filteredWritings = writingsData.writings;
    if (filter !== 'all') {
        filteredWritings = writingsData.writings.filter(w => w.category === filter);
    }
    
    // 计算总页数
    const totalPages = Math.ceil(filteredWritings.length / itemsPerPage);
    
    // 获取当前页的文章
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageWritings = filteredWritings.slice(startIndex, endIndex);
    
    // 渲染文章
    pageWritings.forEach(writing => {
        const card = document.createElement('article');
        card.className = 'writing-card';
        card.setAttribute('data-category', writing.category);
        
        // 如果是外部链接，添加 target="_blank"
        const isExternal = writing.link && (writing.link.startsWith('http') || writing.link.startsWith('https'));
        const targetAttr = isExternal ? 'target="_blank"' : '';
        const externalIcon = isExternal ? '<i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 0.3em;"></i>' : '';
        
        card.innerHTML = `
            <div class="writing-card-header">
                <span class="writing-category ${writing.category}">${writing.categoryDisplay}</span>
                <span class="writing-date">${writing.date}</span>
            </div>
            <h2 class="writing-card-title">
                <a href="${writing.link}" ${targetAttr} style="color: inherit; text-decoration: none;">
                    ${writing.title}${externalIcon}
                </a>
            </h2>
            <p class="writing-card-excerpt">${writing.excerpt}</p>
            <div class="writing-card-footer">
                <span class="reading-time">
                    <i class="far fa-clock"></i> ${writing.readingTime}
                </span>
                <a href="${writing.link}" ${targetAttr} class="read-more-link">
                    Read Full ${writing.categoryDisplay} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // 更新分页控件
    updatePagination(totalPages, filteredWritings.length);
}

// 更新分页控件
function updatePagination(totalPages, totalItems) {
    const pagination = document.querySelector('.pagination');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    
    if (!pagination) return;
    
    // 如果总数少于等于每页数量，隐藏分页
    if (totalItems <= itemsPerPage) {
        pagination.style.display = 'none';
        return;
    }
    
    pagination.style.display = 'flex';
    
    // 更新页码显示
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
    
    // 更新按钮状态
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // 绑定事件（使用一次性绑定避免重复）
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            renderWritings(currentPage - 1, currentFilter);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            renderWritings(currentPage + 1, currentFilter);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
}

// 页面加载完成后渲染内容
document.addEventListener('DOMContentLoaded', function() {
    // 判断是主页还是文章页
    if (document.querySelector('.hero')) {
        // 主页
        renderProfile();
        renderEducation();
        renderExperiences();
        renderProjects();
        renderPublications();
        renderAwards();
        renderTalks();
        renderBlogs();
    } else if (document.querySelector('.writings-hero')) {
        // 文章页
        renderWritings();
    }
});

