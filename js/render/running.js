let runningCurrentPage = 1;
const RUNNING_PER_PAGE = 15;

function getRunningData() {
    return runningData[getCurrentLang()];
}

function renderRunningHero() {
    const data = getRunningData();
    const title = document.querySelector('.running-hero-title');
    const subtitle = document.querySelector('.running-hero-subtitle');
    if (title) title.textContent = data.sectionTitle;
    if (subtitle) {
        subtitle.textContent = getCurrentLang() === 'en'
            ? 'Every kilometer counts.'
            : '每一公里都算数。';
    }
}

function renderRunningSummary() {
    const data = getRunningData();
    const row = document.querySelector('.running-stats-row');
    if (!row) return;
    row.innerHTML = '';

    const keys = ['totalDistance', 'totalRuns', 'avgPace', 'totalDuration', 'longestRun'];
    const icons = ['fa-road', 'fa-shoe-prints', 'fa-gauge-high', 'fa-clock', 'fa-trophy'];

    keys.forEach((key, i) => {
        const card = document.createElement('div');
        card.className = 'running-stat-card';
        const value = data.summary[key];
        const label = data.summaryLabels[key];
        card.innerHTML = `
            <span class="running-stat-value">${value}</span>
            <span class="running-stat-label">${label}</span>
        `;
        row.appendChild(card);
    });
}

function renderRunningHeatmap() {
    const data = getRunningData();
    const container = document.querySelector('.running-heatmap');
    const legendContainer = document.querySelector('.running-heatmap-legend');
    if (!container) return;

    const distanceMap = {};
    data.heatmap.forEach(entry => {
        distanceMap[entry.date] = entry.distance_km;
    });

    const today = new Date();
    const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startDate = new Date(endDate);
    startDate.setFullYear(startDate.getFullYear() - 1);
    startDate.setDate(startDate.getDate() + 1);

    // Align start to a Monday
    const startDay = startDate.getDay();
    const mondayOffset = startDay === 0 ? -6 : 1 - startDay;
    startDate.setDate(startDate.getDate() + mondayOffset);

    const weeks = [];
    const current = new Date(startDate);
    let currentWeek = [];

    while (current <= endDate) {
        currentWeek.push(new Date(current));
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
        current.setDate(current.getDate() + 1);
    }
    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }

    const allDistances = data.heatmap.map(e => e.distance_km).filter(d => d > 0);
    const maxDist = Math.max(...allDistances);
    const thresholds = [0, maxDist * 0.15, maxDist * 0.35, maxDist * 0.6];

    function getLevel(dist) {
        if (!dist || dist <= 0) return 0;
        if (dist <= thresholds[1]) return 1;
        if (dist <= thresholds[2]) return 2;
        if (dist <= thresholds[3]) return 3;
        return 4;
    }

    function formatDate(d) {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }

    const isZh = getCurrentLang() === 'zh';
    const dayLabels = isZh
        ? ['一', '', '三', '', '五', '', '日']
        : ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'];
    const monthNames = isZh
        ? ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    container.innerHTML = '';

    // Month labels row
    const monthRow = document.createElement('div');
    monthRow.className = 'running-heatmap-month-row';
    // Spacer for day labels column
    const spacer = document.createElement('div');
    spacer.style.width = '28px';
    spacer.style.flexShrink = '0';
    monthRow.appendChild(spacer);

    let lastMonth = -1;
    weeks.forEach(week => {
        const label = document.createElement('div');
        label.className = 'running-heatmap-month-label';
        label.style.width = '14px';
        const firstDay = week[0];
        if (firstDay.getMonth() !== lastMonth && firstDay.getDate() <= 7) {
            label.textContent = monthNames[firstDay.getMonth()];
            lastMonth = firstDay.getMonth();
        }
        monthRow.appendChild(label);
    });
    container.appendChild(monthRow);

    // Grid area with day labels
    const gridArea = document.createElement('div');
    gridArea.style.display = 'flex';

    // Day labels
    const dayLabelCol = document.createElement('div');
    dayLabelCol.className = 'running-heatmap-day-labels';
    dayLabels.forEach(label => {
        const el = document.createElement('div');
        el.className = 'running-heatmap-day-label';
        el.textContent = label;
        dayLabelCol.appendChild(el);
    });
    gridArea.appendChild(dayLabelCol);

    // Heatmap grid
    const grid = document.createElement('div');
    grid.className = 'running-heatmap-grid';

    const oneYearAgo = new Date(endDate);
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    weeks.forEach(week => {
        const weekCol = document.createElement('div');
        weekCol.className = 'running-heatmap-week';
        week.forEach(day => {
            const cell = document.createElement('div');
            cell.className = 'running-heatmap-cell';
            const dateStr = formatDate(day);
            const dist = distanceMap[dateStr] || 0;
            const level = getLevel(dist);
            if (level > 0) {
                cell.classList.add(`level-${level}`);
            }
            if (day > endDate || day < oneYearAgo) {
                cell.style.visibility = 'hidden';
            } else {
                const distLabel = isZh ? `${dist.toFixed(1)} 公里` : `${dist.toFixed(1)} km`;
                const noRun = isZh ? '无跑步' : 'No run';
                cell.setAttribute('data-distance', dist);
                cell.setAttribute('data-tooltip', `${dateStr}\n${dist > 0 ? distLabel : noRun}`);
            }
            weekCol.appendChild(cell);
        });
        grid.appendChild(weekCol);
    });

    gridArea.appendChild(grid);
    container.appendChild(gridArea);

    // Legend
    if (legendContainer) {
        const lessLabel = isZh ? '少' : 'Less';
        const moreLabel = isZh ? '多' : 'More';
        legendContainer.innerHTML = `
            <span>${lessLabel}</span>
            <div class="running-heatmap-legend-cell level-0"></div>
            <div class="running-heatmap-legend-cell level-1"></div>
            <div class="running-heatmap-legend-cell level-2"></div>
            <div class="running-heatmap-legend-cell level-3"></div>
            <div class="running-heatmap-legend-cell level-4"></div>
            <span>${moreLabel}</span>
        `;
    }
}

function renderRunningDashboard() {
    const data = getRunningData();
    const db = data.dashboard;
    if (!db) return;

    const labels = db.labels;
    const circumference = 2 * Math.PI * 52;

    // Running Level Ring
    const ringFill = document.querySelector('.ring-fill');
    const levelValue = document.querySelector('.running-level-value');
    const levelLabel = document.querySelector('.running-level-label');
    if (ringFill) {
        const pct = db.runningLevel / 100;
        ringFill.setAttribute('stroke-dasharray', circumference);
        ringFill.setAttribute('stroke-dashoffset', circumference * (1 - pct));
    }
    if (levelValue) levelValue.textContent = db.runningLevel;
    if (levelLabel) levelLabel.textContent = labels.runningLevel;

    // Ability Scores
    const scoresGrid = document.querySelector('.running-scores-grid');
    if (scoresGrid) {
        scoresGrid.innerHTML = '';
        const scoreKeys = ['aerobicEndurance', 'lactateThreshold', 'anaerobicEndurance', 'anaerobicCapacity'];
        scoreKeys.forEach(key => {
            const val = db.scores[key];
            const name = db.scoresLabels[key];
            const item = document.createElement('div');
            item.className = 'running-score-item';
            item.innerHTML = `
                <div class="running-score-header">
                    <span class="running-score-name">${name}</span>
                    <span class="running-score-value">${val}</span>
                </div>
                <div class="running-score-bar">
                    <div class="running-score-bar-fill" style="width: ${val}%"></div>
                </div>
            `;
            scoresGrid.appendChild(item);
        });
    }

    // Physiology Stats
    const physGrid = document.querySelector('.running-physiology-grid');
    if (physGrid) {
        physGrid.innerHTML = '';
        const items = [
            { label: labels.restingHr, value: `${db.restingHr} bpm` },
            { label: labels.thresholdHr, value: `${db.thresholdHr} bpm` },
            { label: labels.thresholdPace, value: db.thresholdPace },
            { label: labels.recoveryPct, value: `${db.recoveryPct}%`, cls: db.recoveryPct >= 100 ? 'recovery-full' : '' },
        ];
        items.forEach(({ label, value, cls }) => {
            const el = document.createElement('div');
            el.className = 'running-physiology-item';
            el.innerHTML = `
                <span class="running-physiology-label">${label}</span>
                <span class="running-physiology-value ${cls || ''}">${value}</span>
            `;
            physGrid.appendChild(el);
        });
    }
}

function renderRunningRecords() {
    const data = getRunningData();
    const db = data.dashboard;
    const pbs = data.personalBests;
    if (!db || !pbs) return;

    const labels = db.labels;

    // Personal Bests
    const pbTitle = document.querySelector('.running-pb-title');
    const pbThead = document.querySelector('.running-pb-table thead');
    const pbTbody = document.querySelector('.running-pb-table tbody');
    if (pbTitle) pbTitle.textContent = labels.personalBests;
    if (pbThead) {
        const distLabel = getCurrentLang() === 'zh' ? '距离' : 'Distance';
        pbThead.innerHTML = `<tr>
            <th>${distLabel}</th>
            <th>${labels.time}</th>
            <th>${labels.pace}</th>
            <th>${labels.date}</th>
        </tr>`;
    }
    if (pbTbody) {
        pbTbody.innerHTML = '';
        pbs.forEach(pb => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pb.distance}</td>
                <td class="td-time">${pb.time}</td>
                <td>${pb.pace}</td>
                <td>${pb.date}</td>
            `;
            pbTbody.appendChild(row);
        });
    }

    // Race Predictions
    const predTitle = document.querySelector('.running-predictions-title');
    const predThead = document.querySelector('.running-predictions-table thead');
    const predTbody = document.querySelector('.running-predictions-table tbody');
    if (predTitle) predTitle.textContent = labels.racePredictions;
    if (predThead) {
        predThead.innerHTML = `<tr>
            <th>${labels.race}</th>
            <th>${labels.time}</th>
            <th>${labels.pace}</th>
        </tr>`;
    }
    if (predTbody) {
        predTbody.innerHTML = '';
        db.racePredictions.forEach(pred => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pred.race}</td>
                <td class="td-time">${pred.time}</td>
                <td>${pred.pace}</td>
            `;
            predTbody.appendChild(row);
        });
    }
}

function renderRunningActivities() {
    const data = getRunningData();
    const activities = data.activities;
    const labels = data.activityLabels;
    const thead = document.querySelector('.running-table thead');
    const tbody = document.querySelector('.running-table tbody');
    const titleEl = document.querySelector('.running-activities-title');
    if (!thead || !tbody) return;

    if (titleEl) {
        titleEl.textContent = getCurrentLang() === 'en' ? 'Activity Log' : '跑步记录';
    }

    thead.innerHTML = `<tr>
        <th>${labels.date}</th>
        <th>${labels.distance}</th>
        <th>${labels.duration}</th>
        <th>${labels.pace}</th>
        <th>${labels.type}</th>
        <th>${labels.calories}</th>
    </tr>`;

    const totalPages = Math.ceil(activities.length / RUNNING_PER_PAGE);
    if (runningCurrentPage > totalPages) runningCurrentPage = totalPages;
    if (runningCurrentPage < 1) runningCurrentPage = 1;

    const start = (runningCurrentPage - 1) * RUNNING_PER_PAGE;
    const pageItems = activities.slice(start, start + RUNNING_PER_PAGE);

    tbody.innerHTML = '';
    pageItems.forEach(act => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${act.date}</td>
            <td>${act.distance}</td>
            <td>${act.duration}</td>
            <td>${act.pace}</td>
            <td class="td-type">${act.type}</td>
            <td class="td-calories">${act.calories} kcal</td>
        `;
        tbody.appendChild(row);
    });

    // Pagination
    const pagination = document.getElementById('running-pagination');
    const prevBtn = document.getElementById('running-prev-page');
    const nextBtn = document.getElementById('running-next-page');
    const currentPageEl = document.getElementById('running-current-page');
    const totalPagesEl = document.getElementById('running-total-pages');

    if (pagination) {
        pagination.style.display = totalPages > 1 ? 'flex' : 'none';
    }
    if (currentPageEl) currentPageEl.textContent = runningCurrentPage;
    if (totalPagesEl) totalPagesEl.textContent = totalPages;
    if (prevBtn) prevBtn.disabled = runningCurrentPage <= 1;
    if (nextBtn) nextBtn.disabled = runningCurrentPage >= totalPages;
}

function renderRunningNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const isZh = getCurrentLang() === 'zh';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = isZh ? '首页' : 'Home';
        else if (href === 'writings.html') link.textContent = isZh ? '文章' : 'Writings';
        else if (href === 'papers.html') link.textContent = isZh ? '论文' : 'Papers';
        else if (href === 'running.html') link.textContent = isZh ? '跑步' : 'Running';
    });

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.textContent = isZh ? '英文' : 'Chinese';
    }

    const footer = document.querySelector('.footer .container');
    if (footer) {
        const rights = isZh ? `\u00A9 2025 齐呈祥。保留所有权利。` : `\u00A9 2025 ChengXiang Qi. All rights reserved.`;
        const updated = isZh ? '最后更新：2026年2月' : 'Last updated: February 2026';
        footer.innerHTML = `<p>${rights}</p><p>${updated}</p>`;
    }
}

function renderRunningAll() {
    renderRunningNav();
    renderRunningHero();
    renderRunningSummary();
    renderRunningHeatmap();
    renderRunningDashboard();
    renderRunningRecords();
    renderRunningActivities();
}

function switchLanguage() {
    const current = getCurrentLang();
    setCurrentLang(current === 'en' ? 'zh' : 'en');
    document.documentElement.lang = getCurrentLang();
    renderRunningAll();
}

document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.lang = getCurrentLang();
    renderRunningAll();

    document.getElementById('running-prev-page')?.addEventListener('click', () => {
        if (runningCurrentPage > 1) {
            runningCurrentPage--;
            renderRunningActivities();
        }
    });

    document.getElementById('running-next-page')?.addEventListener('click', () => {
        const data = getRunningData();
        const totalPages = Math.ceil(data.activities.length / RUNNING_PER_PAGE);
        if (runningCurrentPage < totalPages) {
            runningCurrentPage++;
            renderRunningActivities();
        }
    });
});
