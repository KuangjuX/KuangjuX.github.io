# Academic Portfolio Website

A minimalist, text-focused academic portfolio website featuring a main portfolio page and a separate writings section.

## Features

### Main Portfolio Page (index.html)
- **Hero Section**: Introduction and social media links
- **Education**: Chronological education history
- **Experiences**: Work and research experiences
- **Projects**: Academic and personal projects with descriptions
- **Publications**: List of academic papers with links to PDFs, code, and citations
- **Selected Awards**: List of achievements and honors
- **Selected Talks**: Conference presentations and invited talks
- **Technical Blog**: Featured technical blog posts

### Writings Page (writings.html)
- Collection of non-academic writings including:
  - Essays
  - Fiction/Short Stories
  - Philosophical Essays
- Filter functionality to sort by category
- Clean, text-focused layout

## Design Philosophy

- 🖤 **Minimalist**: Focus on content over decoration
- 📝 **Text-focused**: Typography-driven design with clean hierarchy
- 🎨 **Muted colors**: Black, white, gray, and khaki color palette
- 📚 **Classic typography**: Georgia serif font for readability
- 🧘 **Calm aesthetic**: No flashy animations or effects
- 📱 **Fully responsive**: Works on mobile, tablet, and desktop

## Technologies Used

- HTML5
- CSS3 (Custom properties, minimal styling)
- Vanilla JavaScript (minimal interactions)
- Font Awesome 6.4.0 (for icons only)
- System fonts (Georgia, Times New Roman)

## Getting Started

1. Clone or download this repository
2. **Edit `data.js`** to fill in your content (this is the ONLY file you need to edit!)
3. Open `index.html` in your browser to view your portfolio
4. All content will be automatically loaded from `data.js`

**That's it!** No need to touch HTML or CSS files.

## Customization Guide

### Content Separation Architecture

This template uses a **data-driven approach** where all content is stored in `data.js` and automatically rendered to HTML.

**Files you need to edit:**
- ✅ `data.js` - All your content goes here

**Files you DON'T need to edit:**
- ❌ `index.html` - Template only
- ❌ `writings.html` - Template only
- ❌ `styles.css` - Styling only
- ❌ `render.js` - Auto-rendering logic
- ❌ `script.js` - Interactions

### How to Update Content

Open `data.js` and modify the following sections:

1. **Profile** - Name, title, description, social links
2. **Education** - Degrees and institutions
3. **Experiences** - Work history and internships
4. **Projects** - Research and personal projects
5. **Publications** - Papers and citations
6. **Awards** - Honors and achievements
7. **Talks** - Conference presentations
8. **Blogs** - Technical blog posts
9. **Writings** - Essays, fiction, and philosophy

See `USAGE.md` for detailed instructions with examples.

### Color Scheme

The site uses a minimalist color palette defined in `styles.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Black */
    --secondary-color: #4a4a4a;    /* Dark gray */
    --accent-color: #8b7355;       /* Khaki */
    --text-primary: #1a1a1a;       /* Black */
    --text-secondary: #4a4a4a;     /* Dark gray */
    --text-light: #6a6a6a;         /* Light gray */
    --bg-primary: #fafafa;         /* Off-white */
    /* ... more colors */
}
```

### Fonts

The site uses classic serif fonts (Georgia, Times New Roman) for a traditional academic look. No external fonts are loaded to keep the design simple and fast.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your own academic portfolio. No attribution required.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ for academics and researchers

