// The homepages are pre-rendered. JavaScript only remembers the selected language
// for the interactive running page; all homepage links work without JavaScript.
try {
    localStorage.setItem('lang', document.documentElement.lang === 'zh' ? 'zh' : 'en');
} catch {
    // Storage may be disabled; the current page remains fully usable.
}
