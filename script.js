// Smooth scrolling for anchor links (使用事件委托以支持动态内容)
document.addEventListener('click', function(e) {
    // 检查点击的是否是链接
    const anchor = e.target.closest('a');
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    
    // 只处理真正的内部锚点链接
    // - 必须以 # 开头
    // - 长度大于 1（不是单独的 #）
    // - 不包含 ://（排除外部链接）
    // - 不是 mailto: 链接
    if (href && href.startsWith('#') && href.length > 1 && !href.includes('://') && !href.startsWith('mailto:')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Filter functionality for writings page
// 使用事件委托，在点击时动态获取卡片
document.addEventListener('click', function(e) {
    // 检查点击的是否是过滤按钮
    if (e.target.classList.contains('filter-btn') || e.target.closest('.filter-btn')) {
        const button = e.target.classList.contains('filter-btn') ? e.target : e.target.closest('.filter-btn');
        
        // 移除所有按钮的 active 类
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        
        // 添加 active 类到点击的按钮
        button.classList.add('active');
        
        // 获取过滤值
        const filter = button.getAttribute('data-filter');
        
        console.log(`Filtering by: ${filter}`);
        
        // 如果 renderWritings 函数存在（在 writings 页面），使用分页渲染
        if (typeof renderWritings === 'function') {
            // 获取当前搜索关键词（如果有的话）
            const searchInput = document.getElementById('search-input');
            const searchQuery = searchInput ? searchInput.value : '';
            renderWritings(1, filter, searchQuery); // 重置到第一页，保留搜索关键词
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // 降级方案：直接操作 DOM（用于没有分页的情况）
            const writingCards = document.querySelectorAll('.writing-card');
            
            writingCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }
    }
});

// Simplified - no scroll animations for minimalist design

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
});

// Simplified loading
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Keep navbar always visible - no auto-hide effect

