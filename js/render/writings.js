let currentPage = 1;
const itemsPerPage = 6;
let currentFilter = 'all';
let currentSearchQuery = '';

function renderWritings(page = 1, filter = 'all', searchQuery = '') {
    if (typeof writingsData === 'undefined') return;

    currentPage = page;
    currentFilter = filter;
    currentSearchQuery = searchQuery;

    const heroTitle = document.querySelector('.writings-hero-title');
    const heroSubtitle = document.querySelector('.writings-hero-subtitle');
    if (heroTitle) heroTitle.textContent = writingsData.pageTitle;
    if (heroSubtitle) heroSubtitle.textContent = writingsData.pageSubtitle;

    const grid = document.querySelector('.writings-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (!writingsData.writings || writingsData.writings.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-secondary); font-style: italic; text-align: center;">Coming soon...</p>';
        document.querySelector('.pagination').style.display = 'none';
        return;
    }

    let filteredWritings = writingsData.writings;
    if (filter !== 'all') {
        filteredWritings = writingsData.writings.filter(w => w.category === filter);
    }

    if (searchQuery && searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        filteredWritings = filteredWritings.filter(writing => {
            return writing.title.toLowerCase().includes(query) ||
                writing.excerpt.toLowerCase().includes(query) ||
                writing.categoryDisplay.toLowerCase().includes(query) ||
                writing.date.toLowerCase().includes(query);
        });
    }

    updateWritingsSearchInfo(filteredWritings.length, writingsData.writings.length, searchQuery);

    const totalPages = Math.ceil(filteredWritings.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const pageWritings = filteredWritings.slice(startIndex, startIndex + itemsPerPage);

    pageWritings.forEach(writing => {
        const card = document.createElement('article');
        card.className = 'writing-card';
        card.setAttribute('data-category', writing.category);

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

    updateWritingsPagination(totalPages, filteredWritings.length);
}

function updateWritingsPagination(totalPages, totalItems) {
    const pagination = document.querySelector('.pagination');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');

    if (!pagination) return;

    if (totalItems <= itemsPerPage) {
        pagination.style.display = 'none';
        return;
    }

    pagination.style.display = 'flex';
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    prevBtn.onclick = () => {
        if (currentPage > 1) {
            renderWritings(currentPage - 1, currentFilter, currentSearchQuery);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            renderWritings(currentPage + 1, currentFilter, currentSearchQuery);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
}

function updateWritingsSearchInfo(filteredCount, totalCount, searchQuery) {
    const el = document.getElementById('search-results-info');
    if (!el) return;

    if (searchQuery && searchQuery.trim() !== '') {
        el.innerHTML = filteredCount === 0
            ? `No results found for "<strong>${searchQuery}</strong>"`
            : `Found <strong>${filteredCount}</strong> ${filteredCount === 1 ? 'result' : 'results'} for "<strong>${searchQuery}</strong>"`;
        el.className = 'search-results-info' + (filteredCount > 0 ? ' highlight' : '');
    } else if (currentFilter !== 'all') {
        el.innerHTML = `Showing <strong>${filteredCount}</strong> ${filteredCount === 1 ? 'article' : 'articles'}`;
        el.className = 'search-results-info';
    } else {
        el.innerHTML = '';
        el.className = 'search-results-info';
    }
}

function initializeWritingsSearch() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    if (!searchInput) return;

    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value;
        if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderWritings(1, currentFilter, query);
        }, 300);
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            renderWritings(1, currentFilter, '');
            searchInput.focus();
        });
    }

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchInput.value) {
            searchInput.value = '';
            if (clearBtn) clearBtn.style.display = 'none';
            renderWritings(1, currentFilter, '');
        }
    });
}

function initializeWritingsFilters() {
    document.querySelectorAll('.writings-filter .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.writings-filter .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            const searchInput = document.getElementById('search-input');
            const searchQuery = searchInput ? searchInput.value : '';
            renderWritings(1, filter, searchQuery);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.writings-hero')) return;
    renderWritings();
    initializeWritingsSearch();
    initializeWritingsFilters();
});
