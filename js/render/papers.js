let papersCurrentPage = 1;
const papersPerPage = 10;
let papersCurrentFilter = 'all';
let papersCurrentStatus = 'all';
let papersSearchQuery = '';

function renderPapers(page, filter, status, searchQuery) {
    if (typeof paperReadingData === 'undefined') return;

    page = page || 1;
    filter = filter || 'all';
    status = status || 'all';
    searchQuery = searchQuery || '';

    papersCurrentPage = page;
    papersCurrentFilter = filter;
    papersCurrentStatus = status;
    papersSearchQuery = searchQuery;

    const heroTitle = document.querySelector('.papers-hero-title');
    const heroSubtitle = document.querySelector('.papers-hero-subtitle');
    const repoLink = document.querySelector('.papers-repo-link');
    if (heroTitle) heroTitle.textContent = paperReadingData.pageTitle;
    if (heroSubtitle) heroSubtitle.textContent = paperReadingData.pageSubtitle;
    if (repoLink) repoLink.href = paperReadingData.repoLink;

    // Stats
    const allPapers = paperReadingData.papers;
    const readCount = allPapers.filter(p => p.status === 'read').length;
    const toreadCount = allPapers.filter(p => p.status === 'toread').length;
    const readEl = document.getElementById('papers-read-count');
    const toreadEl = document.getElementById('papers-toread-count');
    const totalEl = document.getElementById('papers-total-count');
    if (readEl) readEl.textContent = readCount;
    if (toreadEl) toreadEl.textContent = toreadCount;
    if (totalEl) totalEl.textContent = allPapers.length;

    // Filter buttons (create once)
    const filterContainer = document.getElementById('papers-filter-buttons');
    if (filterContainer && filterContainer.children.length === 0) {
        paperReadingData.categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn' + (cat.id === filter ? ' active' : '');
            btn.setAttribute('data-paper-filter', cat.id);
            btn.textContent = cat.label;
            btn.addEventListener('click', () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderPapers(1, cat.id, papersCurrentStatus, papersSearchQuery);
            });
            filterContainer.appendChild(btn);
        });
    }

    // Apply filters
    let filtered = allPapers;
    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }
    if (status !== 'all') {
        filtered = filtered.filter(p => p.status === status);
    }
    if (searchQuery && searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.venue.toLowerCase().includes(q) ||
            p.takeaway.toLowerCase().includes(q)
        );
    }

    // Search info
    const searchInfo = document.getElementById('papers-search-results-info');
    if (searchInfo) {
        if (searchQuery && searchQuery.trim() !== '') {
            searchInfo.innerHTML = filtered.length === 0
                ? `No results found for "<strong>${searchQuery}</strong>"`
                : `Found <strong>${filtered.length}</strong> ${filtered.length === 1 ? 'paper' : 'papers'} for "<strong>${searchQuery}</strong>"`;
            searchInfo.className = 'search-results-info' + (filtered.length > 0 ? ' highlight' : '');
        } else {
            searchInfo.innerHTML = '';
            searchInfo.className = 'search-results-info';
        }
    }

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / papersPerPage));
    const startIdx = (page - 1) * papersPerPage;
    const pagePapers = filtered.slice(startIdx, startIdx + papersPerPage);

    // Render list
    const list = document.getElementById('papers-list');
    if (!list) return;
    list.innerHTML = '';

    if (filtered.length === 0) {
        list.innerHTML = '<p class="papers-empty">No papers found.</p>';
        return;
    }

    pagePapers.forEach(paper => {
        const item = document.createElement('div');
        item.className = 'paper-item';

        const statusLabel = paper.status === 'read' ? '✅' : '⬜';
        const statusClass = paper.status === 'read' ? 'paper-status-read' : 'paper-status-toread';
        const categoryLabel = (paperReadingData.categories.find(c => c.id === paper.category) || {}).label || paper.category;

        const linksHTML = [
            paper.paper ? `<a href="${paper.paper}" target="_blank" class="paper-link"><i class="fas fa-file-pdf"></i> Paper</a>` : '',
            paper.note ? `<a href="${paper.note}" target="_blank" class="paper-link"><i class="fas fa-sticky-note"></i> Note</a>` : '',
        ].filter(Boolean).join('');

        const takeawayHTML = paper.takeaway
            ? `<p class="paper-takeaway"><i class="fas fa-lightbulb"></i> ${paper.takeaway}</p>`
            : '';

        item.innerHTML = `
            <div class="paper-item-header">
                <span class="paper-status ${statusClass}" title="${paper.status === 'read' ? 'Read' : 'To Read'}">${statusLabel}</span>
                <div class="paper-item-meta">
                    <h3 class="paper-item-title">${paper.title}</h3>
                    <div class="paper-item-info">
                        <span class="paper-venue">${paper.venue}</span>
                        <span class="paper-category-tag">${categoryLabel}</span>
                    </div>
                </div>
            </div>
            ${takeawayHTML}
            <div class="paper-item-links">${linksHTML}</div>
        `;
        list.appendChild(item);
    });

    // Update pagination
    const pagination = document.querySelector('.papers-pagination');
    if (pagination) {
        if (filtered.length <= papersPerPage) {
            pagination.style.display = 'none';
        } else {
            pagination.style.display = 'flex';
            document.getElementById('papers-current-page').textContent = page;
            document.getElementById('papers-total-pages').textContent = totalPages;

            const prevBtn = document.getElementById('papers-prev-page');
            const nextBtn = document.getElementById('papers-next-page');
            prevBtn.disabled = page === 1;
            nextBtn.disabled = page === totalPages;
            prevBtn.onclick = () => {
                if (papersCurrentPage > 1) {
                    renderPapers(papersCurrentPage - 1, papersCurrentFilter, papersCurrentStatus, papersSearchQuery);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            };
            nextBtn.onclick = () => {
                if (papersCurrentPage < totalPages) {
                    renderPapers(papersCurrentPage + 1, papersCurrentFilter, papersCurrentStatus, papersSearchQuery);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            };
        }
    }
}

function initializePapersPage() {
    // Status toggle
    document.querySelectorAll('.status-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.status-toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPapers(1, papersCurrentFilter, btn.getAttribute('data-status'), papersSearchQuery);
        });
    });

    // Search
    const searchInput = document.getElementById('papers-search-input');
    const clearBtn = document.getElementById('papers-clear-search');
    if (searchInput) {
        let timeout;
        searchInput.addEventListener('input', e => {
            const q = e.target.value;
            if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                renderPapers(1, papersCurrentFilter, papersCurrentStatus, q);
            }, 300);
        });
        searchInput.addEventListener('keydown', e => {
            if (e.key === 'Escape' && searchInput.value) {
                searchInput.value = '';
                if (clearBtn) clearBtn.style.display = 'none';
                renderPapers(1, papersCurrentFilter, papersCurrentStatus, '');
            }
        });
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            renderPapers(1, papersCurrentFilter, papersCurrentStatus, '');
            searchInput.focus();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.papers-hero')) return;
    renderPapers();
    initializePapersPage();
});
