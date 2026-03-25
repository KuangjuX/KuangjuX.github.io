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
        week.forEach((day, dayIndex) => {
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
                if (dayIndex === 0) {
                    cell.classList.add('tooltip-below');
                }
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

// --- WGS-84 to GCJ-02 coordinate conversion ---
const _GCJ_A = 6378245.0;
const _GCJ_EE = 0.00669342162296594323;

function _outOfChina(lat, lng) {
    return lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271;
}

function _transformLat(x, y) {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320.0 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
    return ret;
}

function _transformLng(x, y) {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
    return ret;
}

function wgs84ToGcj02(lat, lng) {
    if (_outOfChina(lat, lng)) return [lat, lng];
    let dLat = _transformLat(lng - 105.0, lat - 35.0);
    let dLng = _transformLng(lng - 105.0, lat - 35.0);
    const radLat = lat / 180.0 * Math.PI;
    let magic = Math.sin(radLat);
    magic = 1 - _GCJ_EE * magic * magic;
    const sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((_GCJ_A * (1 - _GCJ_EE)) / (magic * sqrtMagic) * Math.PI);
    dLng = (dLng * 180.0) / (_GCJ_A / sqrtMagic * Math.cos(radLat) * Math.PI);
    return [lat + dLat, lng + dLng];
}

// --- Douglas-Peucker path simplification ---
function _perpendicularDist(pt, lineStart, lineEnd) {
    const dx = lineEnd[0] - lineStart[0];
    const dy = lineEnd[1] - lineStart[1];
    const mag = dx * dx + dy * dy;
    if (mag === 0) return Math.sqrt((pt[0] - lineStart[0]) ** 2 + (pt[1] - lineStart[1]) ** 2);
    const u = ((pt[0] - lineStart[0]) * dx + (pt[1] - lineStart[1]) * dy) / mag;
    const clamped = Math.max(0, Math.min(1, u));
    const projX = lineStart[0] + clamped * dx;
    const projY = lineStart[1] + clamped * dy;
    return Math.sqrt((pt[0] - projX) ** 2 + (pt[1] - projY) ** 2);
}

function simplifyPath(points, tolerance) {
    if (points.length <= 2) return points;
    let maxDist = 0, maxIdx = 0;
    for (let i = 1; i < points.length - 1; i++) {
        const d = _perpendicularDist(points[i], points[0], points[points.length - 1]);
        if (d > maxDist) { maxDist = d; maxIdx = i; }
    }
    if (maxDist > tolerance) {
        const left = simplifyPath(points.slice(0, maxIdx + 1), tolerance);
        const right = simplifyPath(points.slice(maxIdx), tolerance);
        return left.slice(0, -1).concat(right);
    }
    return [points[0], points[points.length - 1]];
}

function simplifyToMaxPoints(points, maxPoints) {
    let lo = 0, hi = 0.01, result = points;
    for (let i = 0; i < 20; i++) {
        const mid = (lo + hi) / 2;
        result = simplifyPath(points, mid);
        if (result.length > maxPoints) lo = mid;
        else hi = mid;
    }
    return result.length > maxPoints ? simplifyPath(points, hi) : result;
}

// --- Amap static map URL builder ---
const AMAP_STATIC_KEY = 'cd897289dcade487dced03e670f32484';
const AMAP_MAX_PATH_POINTS = 120;

function buildAmapStaticUrl(points, width, height) {
    const gcjPoints = points.map(p => wgs84ToGcj02(p[0], p[1]));
    const simplified = gcjPoints.length > AMAP_MAX_PATH_POINTS
        ? simplifyToMaxPoints(gcjPoints, AMAP_MAX_PATH_POINTS)
        : gcjPoints;

    const pathCoords = simplified.map(p => `${p[1].toFixed(6)},${p[0].toFixed(6)}`).join(';');
    const pathStyle = '5,0x8b7355,0.9,,';

    const startPt = simplified[0];
    const endPt = simplified[simplified.length - 1];
    const startMarker = `small,0x5a8a5a,S:${startPt[1].toFixed(6)},${startPt[0].toFixed(6)}`;
    const endMarker = `small,0xc0392b,E:${endPt[1].toFixed(6)},${endPt[0].toFixed(6)}`;

    return `https://restapi.amap.com/v3/staticmap`
        + `?size=${width}*${height}`
        + `&scale=2`
        + `&paths=${pathStyle}:${pathCoords}`
        + `&markers=${startMarker}|${endMarker}`
        + `&key=${AMAP_STATIC_KEY}`;
}

function renderHighlightRoutes() {
    const data = getRunningData();
    const routes = data.highlightRoutes;
    if (!routes || routes.length === 0) return;

    const titleEl = document.querySelector('.running-routes-title');
    const grid = document.querySelector('.running-routes-grid');
    if (!grid) return;

    const isZh = getCurrentLang() === 'zh';
    if (titleEl) titleEl.textContent = isZh ? '高光路线' : 'Highlight Routes';

    grid.innerHTML = '';

    routes.forEach(route => {
        const points = route.points;
        if (!points || points.length < 2) return;

        const card = document.createElement('div');
        card.className = 'running-route-card';

        const mapUrl = buildAmapStaticUrl(points, 500, 400);

        const distLabel = isZh ? '距离' : 'Distance';
        const durationLabel = isZh ? '时长' : 'Duration';
        const paceLabel = isZh ? '配速' : 'Pace';

        card.innerHTML = `
            <div class="running-route-map">
                <img src="${mapUrl}" alt="${route.tag}" loading="lazy" />
            </div>
            <div class="running-route-info">
                <span class="running-route-tag">${route.tag}</span>
                <span class="running-route-date">${route.date}</span>
                <div class="running-route-stats">
                    <span><strong>${distLabel}:</strong> ${route.distance}</span>
                    <span><strong>${durationLabel}:</strong> ${route.duration}</span>
                    <span><strong>${paceLabel}:</strong> ${route.pace}</span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function parsePaceToSeconds(paceStr) {
    const m = paceStr.match(/(\d+)'(\d+)"/);
    if (!m) return Infinity;
    return parseInt(m[1]) * 60 + parseInt(m[2]);
}

function parseDistanceKm(distStr) {
    const m = distStr.match(/([\d.]+)/);
    return m ? parseFloat(m[1]) : 0;
}

function computePersonalBests(activities) {
    const isZh = getCurrentLang() === 'zh';
    const categories = [
        { key: '1K', label: isZh ? '1公里' : '1K', minKm: 0.9, maxKm: 1.15 },
        { key: '3K', label: isZh ? '3公里' : '3K', minKm: 2.8, maxKm: 3.2 },
        { key: '5K', label: isZh ? '5公里' : '5K', minKm: 4.8, maxKm: 5.5 },
        { key: '10K', label: isZh ? '10公里' : '10K', minKm: 9.5, maxKm: 10.5 },
        { key: 'HM', label: isZh ? '半程马拉松' : 'Half Marathon', minKm: 20.0, maxKm: 22.0 },
    ];

    const paceUnit = isZh ? '/公里' : '/km';
    const results = [];

    categories.forEach(cat => {
        let bestPace = Infinity;
        let bestActivity = null;
        activities.forEach(act => {
            const dist = parseDistanceKm(act.distance);
            if (dist >= cat.minKm && dist <= cat.maxKm) {
                const pace = parsePaceToSeconds(act.pace);
                if (pace < bestPace) {
                    bestPace = pace;
                    bestActivity = act;
                }
            }
        });
        if (bestActivity) {
            const paceMin = Math.floor(bestPace / 60);
            const paceSec = bestPace % 60;
            const paceFormatted = `${paceMin}'${String(paceSec).padStart(2, '0')}"${paceUnit}`;
            results.push({
                distance: cat.label,
                time: bestActivity.duration,
                pace: paceFormatted,
                date: bestActivity.date,
            });
        }
    });
    return results;
}

function renderRunningRecords() {
    const data = getRunningData();
    const db = data.dashboard;
    if (!db) return;

    const labels = db.labels;
    const pbs = computePersonalBests(data.activities);

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
    renderHighlightRoutes();
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
