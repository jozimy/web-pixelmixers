# PixelMixers — Complete Website Build Prompt

## MISSION

Build a complete, production-ready multi-page website for **PixelMixers**, a web design and development studio. The site must be fully functional, visually sophisticated, and ready for deployment without any further design decisions required from the developer. Every page, section, component, interaction, and line of copy is specified below. Follow all instructions exactly.

---

## PART 1 — TECH STACK & PROJECT SETUP

### 1.1 Core Technologies

- **HTML5** — semantic markup throughout; use `<article>`, `<section>`, `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>` correctly
- **CSS** — custom CSS with CSS custom properties (variables); do NOT use Tailwind or any CSS framework; write everything from scratch
- **JavaScript** — vanilla ES6+; no jQuery; no frameworks; modular with one entry point per page
- **No build tools required** — the site must run from a static file server or direct file open; optionally note where a build step could be added later

### 1.2 File Structure

```
pixelmixers/
├── index.html
├── the-studio/
│   └── index.html
├── our-work/
│   ├── index.html
│   └── project/
│       ├── greenleaf-rebrand/index.html
│       ├── nova-ecommerce/index.html
│       ├── pulse-webapp/index.html
│       ├── bloom-portfolio/index.html
│       ├── terrain-experimental/index.html
│       └── dusk-artform/index.html
├── services/
│   └── index.html
├── the-team/
│   ├── index.html
│   └── team/
│       ├── marek-novak/index.html
│       ├── lucia-varga/index.html
│       ├── filip-kral/index.html
│       └── zoe-black/index.html
├── lab/
│   ├── index.html
│   └── posts/
│       ├── the-art-of-the-fold/index.html
│       ├── why-minimalism-wins/index.html
│       └── building-for-wonder/index.html
├── contact/
│   └── index.html
├── faq/
│   └── index.html
├── legals/
│   └── index.html
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── tokens.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── animations.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── studio.css
│   │       ├── work.css
│   │       ├── services.css
│   │       ├── team.css
│   │       ├── lab.css
│   │       ├── contact.css
│   │       └── faq.css
│   ├── js/
│   │   ├── core/
│   │   │   ├── nav.js
│   │   │   ├── scroll-reveal.js
│   │   │   ├── carousel.js
│   │   │   ├── accordion.js
│   │   │   └── cursor.js
│   │   └── pages/
│   │       ├── home.js
│   │       ├── work.js
│   │       ├── contact.js
│   │       └── lab.js
│   ├── images/
│   │   ├── placeholders/        (use generated SVG placeholders)
│   │   └── og/                  (OpenGraph images per page)
│   └── fonts/
│       └── (Google Fonts loaded via @import or <link>)
└── sitemap.xml
```

### 1.3 Fonts

Load from Google Fonts via `<link rel="preconnect">` and `<link rel="stylesheet">`:

- **Display / Headings**: `Syne` — weights 400, 700, 800
- **Body**: `Inter` — weights 300, 400, 500
- **Mono / Accents**: `JetBrains Mono` — weight 400 only

---

## PART 2 — DESIGN SYSTEM

### 2.1 Color Tokens

Define all colors as CSS custom properties in `assets/css/tokens.css`:

```css
:root {
  /* Brand primaries */
  --color-ink:        #0A0A0F;   /* near-black, main text */
  --color-chalk:      #F7F6F2;   /* warm off-white, page background */
  --color-paper:      #EFEDE6;   /* slightly deeper warm white, card backgrounds */

  /* Brand accent — the "mix" colors */
  --color-violet:     #6B3FE7;   /* primary accent */
  --color-tangerine:  #FF6B35;   /* warm secondary accent */
  --color-mint:       #2ECDA7;   /* cool tertiary accent */
  --color-rose:       #E84393;   /* experimental/artform accent */

  /* Gradient ellipse colors */
  --glow-violet:      rgba(107, 63, 231, 0.18);
  --glow-tangerine:   rgba(255, 107, 53, 0.14);
  --glow-mint:        rgba(46, 205, 167, 0.12);
  --glow-rose:        rgba(232, 67, 147, 0.10);

  /* Neutral scale */
  --color-smoke:      #E8E6E0;   /* borders, dividers */
  --color-dust:       #B8B5AD;   /* muted text, captions */
  --color-ash:        #6E6C66;   /* secondary text */
  --color-coal:       #2A2A30;   /* dark surface */

  /* Semantic */
  --color-success:    #1DB954;
  --color-warning:    #F5A623;
  --color-error:      #E53E3E;

  /* Typography scale colors */
  --text-primary:     var(--color-ink);
  --text-secondary:   var(--color-ash);
  --text-muted:       var(--color-dust);
  --text-inverse:     var(--color-chalk);

  /* Surface colors */
  --surface-base:     var(--color-chalk);
  --surface-raised:   var(--color-paper);
  --surface-dark:     var(--color-coal);
  --surface-ink:      var(--color-ink);
}
```

### 2.2 Typography Scale

Define in `assets/css/typography.css`:

```css
:root {
  /* Font families */
  --font-display:  'Syne', sans-serif;
  --font-body:     'Inter', sans-serif;
  --font-mono:     'JetBrains Mono', monospace;

  /* Type scale — fluid using clamp() */
  --text-xs:    clamp(0.70rem, 0.65rem + 0.25vw, 0.75rem);
  --text-sm:    clamp(0.80rem, 0.75rem + 0.25vw, 0.875rem);
  --text-base:  clamp(0.9rem,  0.85rem + 0.25vw, 1rem);
  --text-md:    clamp(1rem,    0.95rem + 0.30vw, 1.125rem);
  --text-lg:    clamp(1.1rem,  1rem    + 0.50vw, 1.25rem);
  --text-xl:    clamp(1.25rem, 1.1rem  + 0.75vw, 1.5rem);
  --text-2xl:   clamp(1.5rem,  1.2rem  + 1.25vw, 2rem);
  --text-3xl:   clamp(2rem,    1.5rem  + 2vw,    3rem);
  --text-4xl:   clamp(2.5rem,  1.8rem  + 3vw,    4.5rem);
  --text-5xl:   clamp(3rem,    2rem    + 4.5vw,  6.5rem);
  --text-6xl:   clamp(4rem,    2.5rem  + 7vw,    9rem);

  /* Line heights */
  --leading-tight:    1.1;
  --leading-snug:     1.25;
  --leading-normal:   1.5;
  --leading-relaxed:  1.7;
  --leading-loose:    2;

  /* Letter spacing */
  --tracking-tight:   -0.03em;
  --tracking-normal:   0em;
  --tracking-wide:     0.05em;
  --tracking-wider:    0.10em;
  --tracking-widest:   0.20em;
}
```

Typography usage rules:
- `--font-display` + weight 800 + `--tracking-tight` — hero headings, section numbers
- `--font-display` + weight 700 — h2, h3, card titles
- `--font-display` + weight 400 — navigation, labels
- `--font-body` + weight 400/300 — all body text, paragraphs
- `--font-mono` — section number labels (001/, 002/), code snippets, timestamps

### 2.3 Spacing Scale

```css
:root {
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
  --space-40: 10rem;      /* 160px */
  --space-48: 12rem;      /* 192px */

  /* Layout */
  --container-max:   1400px;
  --container-wide:  1200px;
  --container-text:   740px;
  --gutter:           clamp(1.25rem, 5vw, 3rem);
}
```

### 2.4 Border Radius & Shadow Scale

```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  40px;
  --radius-full: 9999px;

  --shadow-sm:  0 1px 3px rgba(10,10,15,0.08);
  --shadow-md:  0 4px 16px rgba(10,10,15,0.10);
  --shadow-lg:  0 12px 40px rgba(10,10,15,0.12);
  --shadow-xl:  0 24px 80px rgba(10,10,15,0.16);
  --shadow-glow-violet:    0 0 80px 20px var(--glow-violet);
  --shadow-glow-tangerine: 0 0 80px 20px var(--glow-tangerine);
}
```

### 2.5 Gradient Ellipse Component

This is a signature visual element — blurred colored blobs used as background decoration. Implement as a reusable CSS class + HTML pattern:

```html
<!-- Usage pattern — place inside a position:relative container -->
<div class="glow-ellipse glow-ellipse--violet glow-ellipse--top-right" aria-hidden="true"></div>
<div class="glow-ellipse glow-ellipse--tangerine glow-ellipse--bottom-left" aria-hidden="true"></div>
```

```css
/* In components.css */
.glow-ellipse {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 1.2s ease;
}
.glow-ellipse.is-visible { opacity: 1; }

.glow-ellipse--violet    { background: var(--glow-violet);    width: 600px; height: 400px; }
.glow-ellipse--tangerine { background: var(--glow-tangerine); width: 500px; height: 350px; }
.glow-ellipse--mint      { background: var(--glow-mint);      width: 450px; height: 300px; }
.glow-ellipse--rose      { background: var(--glow-rose);      width: 550px; height: 380px; }

.glow-ellipse--top-right    { top: -100px;   right: -150px; }
.glow-ellipse--top-left     { top: -100px;   left:  -150px; }
.glow-ellipse--bottom-right { bottom: -100px; right: -150px; }
.glow-ellipse--bottom-left  { bottom: -100px; left:  -150px; }
.glow-ellipse--center       { top: 50%; left: 50%; transform: translate(-50%, -50%); }
```

Trigger `.is-visible` on scroll-into-view via `IntersectionObserver`.

### 2.6 Section Number Labels

All major sections use numbered labels in the format `001/`, `002/`, etc.:

```html
<span class="section-label" aria-label="Section 001">001/</span>
```

```css
.section-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  color: var(--text-muted);
  text-transform: uppercase;
  display: block;
  margin-bottom: var(--space-4);
}
```

### 2.7 Button System

Three button variants:

```css
/* Primary — filled violet */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: var(--color-violet);
  color: var(--color-chalk);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border: 2px solid var(--color-violet);
  border-radius: var(--radius-full);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: transparent;
  color: var(--color-violet);
  transform: translateY(-2px);
}

/* Secondary — outlined */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: transparent;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border: 2px solid var(--color-ink);
  border-radius: var(--radius-full);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease;
}
.btn-secondary:hover {
  background: var(--color-ink);
  color: var(--color-chalk);
  transform: translateY(-2px);
}

/* Ghost — text only with arrow */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: none;
  border: none;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}
.btn-ghost::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background: var(--color-violet);
  transition: width 0.3s ease;
}
.btn-ghost:hover::after { width: 100%; }
.btn-ghost .arrow {
  display: inline-block;
  transition: transform 0.25s ease;
}
.btn-ghost:hover .arrow { transform: translateX(4px); }
```

### 2.8 Card System

```css
/* Base card */
.card {
  background: var(--surface-raised);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 0.35s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

/* Card image container */
.card__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-smoke);
}
.card__image img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card:hover .card__image img { transform: scale(1.04); }

/* Card body */
.card__body {
  padding: var(--space-6) var(--space-6) var(--space-8);
}
.card__tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  color: var(--color-violet);
  text-transform: uppercase;
  margin-bottom: var(--space-3);
  display: block;
}
.card__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}
.card__excerpt {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}
```

### 2.9 Persistent Banner / CTA Bar

Appears at the top of every page (below the nav, not fixed):

```html
<div class="cta-banner" role="complementary">
  <div class="cta-banner__inner">
    <span class="cta-banner__text">
      Mixing pixels since 2018 — let's make something remarkable together.
    </span>
    <a href="/contact/" class="cta-banner__link">
      Have a seat <span class="arrow" aria-hidden="true">→</span>
    </a>
  </div>
</div>
```

```css
.cta-banner {
  background: var(--color-ink);
  color: var(--color-chalk);
  padding: var(--space-3) var(--gutter);
  text-align: center;
}
.cta-banner__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);
  flex-wrap: wrap;
}
.cta-banner__text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-dust);
}
.cta-banner__link {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-chalk);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  border-bottom: 1px solid var(--color-violet);
  padding-bottom: 1px;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.cta-banner__link:hover {
  color: var(--color-violet);
}
```

---

## PART 3 — NAVIGATION

### 3.1 Navigation Structure

The navigation is shared across all pages. Create it as a reusable HTML snippet included in every page. On pages with a dark hero section, add class `nav--light` to invert colors.

```html
<header class="site-nav" id="site-nav">
  <div class="site-nav__inner">

    <!-- Logo -->
    <a href="/" class="site-nav__logo" aria-label="PixelMixers — Home">
      <svg class="logo-mark" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <!-- SVG: two overlapping rounded squares in violet and tangerine -->
        <rect x="2"  y="2"  width="18" height="18" rx="5" fill="#6B3FE7" opacity="0.9"/>
        <rect x="12" y="12" width="18" height="18" rx="5" fill="#FF6B35" opacity="0.9"/>
      </svg>
      <span class="logo-wordmark">PixelMixers</span>
    </a>

    <!-- Primary navigation -->
    <nav class="site-nav__links" aria-label="Primary navigation">
      <ul role="list">
        <li><a href="/the-studio/">The Studio</a></li>
        <li><a href="/our-work/">Our Work</a></li>
        <li><a href="/services/">Services</a></li>
        <li><a href="/the-team/">The Team</a></li>
        <li><a href="/lab/">Lab</a></li>
      </ul>
    </nav>

    <!-- CTA + mobile toggle -->
    <div class="site-nav__actions">
      <a href="/contact/" class="btn-primary btn-sm">Start a project</a>
      <button class="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-nav">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>

  <!-- Mobile navigation drawer -->
  <div class="mobile-nav" id="mobile-nav" aria-hidden="true">
    <ul role="list">
      <li><a href="/the-studio/">The Studio</a></li>
      <li><a href="/our-work/">Our Work</a></li>
      <li><a href="/services/">Services</a></li>
      <li><a href="/the-team/">The Team</a></li>
      <li><a href="/lab/">Lab</a></li>
      <li><a href="/contact/">Start a project</a></li>
    </ul>
  </div>
</header>
```

### 3.2 Navigation CSS

```css
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(247, 246, 242, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.site-nav.is-scrolled {
  border-bottom-color: var(--color-smoke);
}
.site-nav__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-4) var(--gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}
.site-nav__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
}
.logo-wordmark {
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: 800;
  color: var(--color-ink);
  letter-spacing: var(--tracking-tight);
}
.site-nav__links ul {
  display: flex;
  gap: var(--space-8);
  list-style: none;
  margin: 0; padding: 0;
}
.site-nav__links a {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}
.site-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 2px;
  background: var(--color-violet);
  transition: width 0.25s ease;
}
.site-nav__links a:hover,
.site-nav__links a[aria-current="page"] {
  color: var(--color-ink);
}
.site-nav__links a:hover::after,
.site-nav__links a[aria-current="page"]::after {
  width: 100%;
}
/* Mobile: hide links, show toggle below 768px */
@media (max-width: 768px) {
  .site-nav__links { display: none; }
  .nav-toggle { display: flex; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: var(--space-2); }
  .nav-toggle span { display: block; width: 22px; height: 2px; background: var(--color-ink); transition: transform 0.3s ease, opacity 0.3s ease; }
  .nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
  .nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
}
@media (min-width: 769px) { .nav-toggle { display: none; } }
```

### 3.3 Navigation JavaScript (assets/js/core/nav.js)

```javascript
// Scroll state
const nav = document.getElementById('site-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile toggle
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    mobileNav.setAttribute('aria-hidden', String(open));
    mobileNav.classList.toggle('is-open', !open);
    document.body.classList.toggle('nav-open', !open);
  });
}

// Active page highlighting
const currentPath = window.location.pathname;
document.querySelectorAll('.site-nav__links a, .mobile-nav a').forEach(link => {
  if (link.getAttribute('href') === currentPath ||
      (currentPath !== '/' && currentPath.startsWith(link.getAttribute('href')))) {
    link.setAttribute('aria-current', 'page');
  }
});
```

---

## PART 4 — FOOTER

All pages share the same footer. Build it as a reusable HTML block.

```html
<footer class="site-footer">
  <div class="site-footer__inner">

    <!-- Top: brand + nav columns -->
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" class="site-nav__logo" aria-label="PixelMixers">
          <svg class="logo-mark" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
            <rect x="2"  y="2"  width="18" height="18" rx="5" fill="#6B3FE7" opacity="0.9"/>
            <rect x="12" y="12" width="18" height="18" rx="5" fill="#FF6B35" opacity="0.9"/>
          </svg>
          <span class="logo-wordmark" style="color: var(--color-chalk)">PixelMixers</span>
        </a>
        <p class="footer-tagline">We mix pixels into magic.<br>From landing pages to digital artforms.</p>
        <div class="footer-social">
          <a href="https://twitter.com/pixelmixers" aria-label="PixelMixers on Twitter" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://instagram.com/pixelmixers" aria-label="PixelMixers on Instagram" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="https://dribbble.com/pixelmixers" aria-label="PixelMixers on Dribbble" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm7.92 5.292a10.073 10.073 0 0 1 2.264 5.76c-.33-.066-3.63-.736-6.954-.319-.074-.18-.145-.363-.22-.546-.202-.494-.422-1-.648-1.49 3.65-1.485 5.314-3.63 5.558-3.405zM12 1.93c2.554 0 4.89.94 6.665 2.487-.21.245-1.709 2.253-5.225 3.574-1.634-2.999-3.44-5.465-3.716-5.83A10.22 10.22 0 0 1 12 1.93z"/></svg>
          </a>
          <a href="https://linkedin.com/company/pixelmixers" aria-label="PixelMixers on LinkedIn" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-nav-columns">
        <div class="footer-nav-col">
          <h4>Studio</h4>
          <ul role="list">
            <li><a href="/the-studio/">About Us</a></li>
            <li><a href="/the-studio/#methodology">Methodology</a></li>
            <li><a href="/the-studio/#philosophy">Philosophy</a></li>
            <li><a href="/the-team/">The Team</a></li>
          </ul>
        </div>
        <div class="footer-nav-col">
          <h4>Work</h4>
          <ul role="list">
            <li><a href="/our-work/">All Projects</a></li>
            <li><a href="/our-work/?filter=starter">Starter</a></li>
            <li><a href="/our-work/?filter=business">Business</a></li>
            <li><a href="/our-work/?filter=artform">Artform</a></li>
          </ul>
        </div>
        <div class="footer-nav-col">
          <h4>Services</h4>
          <ul role="list">
            <li><a href="/services/#starter">Starter Sites</a></li>
            <li><a href="/services/#business">Business Builds</a></li>
            <li><a href="/services/#premium">Premium Web Apps</a></li>
            <li><a href="/services/#artform">Digital Artforms</a></li>
          </ul>
        </div>
        <div class="footer-nav-col">
          <h4>Connect</h4>
          <ul role="list">
            <li><a href="/contact/">Start a Project</a></li>
            <li><a href="/lab/">Lab & Articles</a></li>
            <li><a href="/faq/">FAQ</a></li>
            <li><a href="/legals/">Legal</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom: copyright + legal -->
    <div class="footer-bottom">
      <p class="footer-copy">
        &copy; <span id="footer-year"></span> PixelMixers s.r.o. All rights reserved.
      </p>
      <div class="footer-legal-links">
        <a href="/legals/#privacy">Privacy Policy</a>
        <a href="/legals/#terms">Terms of Service</a>
        <a href="/legals/#cookies">Cookie Policy</a>
      </div>
    </div>

  </div>
</footer>

<script>document.getElementById('footer-year').textContent = new Date().getFullYear();</script>
```

---

## PART 5 — ANIMATION SYSTEM

### 5.1 Scroll Reveal (assets/js/core/scroll-reveal.js)

All elements with `data-reveal` animate in on scroll. Variants: `fade-up` (default), `fade-in`, `slide-left`, `slide-right`, `scale-up`.

```javascript
const DEFAULTS = {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
};

function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.revealDelay || 0;
        setTimeout(() => {
          el.classList.add('is-revealed');
        }, Number(delay));
        observer.unobserve(el);
      }
    });
  }, DEFAULTS);

  elements.forEach(el => {
    el.classList.add('reveal-pending');
    const variant = el.dataset.reveal || 'fade-up';
    el.classList.add(`reveal--${variant}`);
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initScrollReveal);
```

```css
/* In animations.css */
.reveal-pending {
  transition: opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1),
              transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}
.reveal--fade-up    { opacity: 0; transform: translateY(32px); }
.reveal--fade-in    { opacity: 0; transform: none; }
.reveal--slide-left { opacity: 0; transform: translateX(-40px); }
.reveal--slide-right{ opacity: 0; transform: translateX(40px); }
.reveal--scale-up   { opacity: 0; transform: scale(0.94); }
.is-revealed        { opacity: 1 !important; transform: none !important; }
```

Use `data-reveal-delay="200"` (milliseconds) on staggered items.

### 5.2 Custom Cursor (assets/js/core/cursor.js)

```javascript
// Only enable on pointer devices
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
const cursorDot = document.createElement('div');
cursorDot.className = 'custom-cursor__dot';
document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0, curX = 0, curY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}, { passive: true });

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.transform = `translate(${curX}px, ${curY}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover states
document.querySelectorAll('a, button, .card, [data-cursor="expand"]').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
});
```

```css
/* Custom cursor — desktop only */
@media (pointer: fine) {
  * { cursor: none; }

  .custom-cursor {
    position: fixed;
    top: -20px; left: -20px;
    width: 40px; height: 40px;
    border: 2px solid var(--color-violet);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease, opacity 0.25s ease;
    will-change: transform;
  }
  .custom-cursor.is-hovering {
    width: 64px; height: 64px;
    top: -32px; left: -32px;
    background: var(--glow-violet);
    border-color: var(--color-violet);
  }
  .custom-cursor__dot {
    position: fixed;
    top: -3px; left: -3px;
    width: 6px; height: 6px;
    background: var(--color-violet);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    will-change: transform;
  }
}
```

### 5.3 Carousel (assets/js/core/carousel.js)

```javascript
class PixelCarousel {
  constructor(el) {
    this.el = el;
    this.track = el.querySelector('.carousel__track');
    this.items = el.querySelectorAll('.carousel__item');
    this.prev = el.querySelector('.carousel__btn--prev');
    this.next = el.querySelector('.carousel__btn--next');
    this.current = 0;
    this.total = this.items.length;
    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;

    this.init();
  }

  init() {
    this.prev?.addEventListener('click', () => this.go(this.current - 1));
    this.next?.addEventListener('click', () => this.go(this.current + 1));

    // Touch/drag
    this.track.addEventListener('pointerdown', e => this.onDragStart(e));
    this.track.addEventListener('pointermove', e => this.onDragMove(e));
    this.track.addEventListener('pointerup', e => this.onDragEnd(e));

    this.update();
  }

  go(index) {
    this.current = Math.max(0, Math.min(index, this.total - 1));
    this.update();
  }

  update() {
    this.items.forEach((item, i) => {
      item.classList.toggle('is-active', i === this.current);
    });
    const offset = this.current * (100 / this.total);
    this.track.style.transform = `translateX(-${offset}%)`;
    if (this.prev) this.prev.disabled = this.current === 0;
    if (this.next) this.next.disabled = this.current === this.total - 1;
  }

  onDragStart(e) {
    this.isDragging = true;
    this.startX = e.clientX;
    this.track.setPointerCapture(e.pointerId);
  }
  onDragMove(e) {
    if (!this.isDragging) return;
    this.currentX = e.clientX - this.startX;
  }
  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    if (this.currentX < -60) this.go(this.current + 1);
    else if (this.currentX > 60) this.go(this.current - 1);
    this.currentX = 0;
  }
}

document.querySelectorAll('[data-carousel]').forEach(el => new PixelCarousel(el));
```

---

## PART 6 — PAGE SPECIFICATIONS

---

### PAGE 1 — HOMEPAGE (index.html)

The homepage is the centerpiece of the site. It must feel bold, editorial, and immediately communicate the creative range of PixelMixers.

#### Page `<head>`

```html
<title>PixelMixers — We Mix Pixels Into Magic</title>
<meta name="description" content="PixelMixers is a web design and development studio crafting websites from clean business sites to full digital artforms. Based in Central Europe, working globally.">
<meta property="og:title" content="PixelMixers — We Mix Pixels Into Magic">
<meta property="og:description" content="From clean landing pages to experimental digital experiences — we build websites that mean something.">
<meta property="og:image" content="/assets/images/og/home.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://pixelmixers.com/">
<link rel="canonical" href="https://pixelmixers.com/">
```

#### Section 001/ — Hero

Full-viewport section. Background is `--color-chalk`. A large blurred violet glow ellipse sits top-right. A tangerine glow ellipse sits bottom-left.

Layout: two columns at desktop (text left, visual right), stacked on mobile.

Left column content:
```
Section label: 001/

Main heading (h1, --text-5xl, --font-display, weight 800, --tracking-tight):
"We mix pixels  
into magic."

Subheading (p, --text-lg, --font-body, weight 300, --color-ash):
"From clean, conversion-focused business sites to experimental digital artforms —
we build websites that don't just exist, they resonate."

CTA row:
[btn-primary] "See our work →"   href="/our-work/"
[btn-secondary] "Meet the studio"  href="/the-studio/"

Small proof point below CTAs (--font-mono, --text-xs, --color-dust):
"50+ sites delivered · 8 years running · 4 continents served"
```

Right column content:
A 2×2 mosaic of project thumbnails, each a `<figure>` with a subtle rounded border. Images are `aspect-ratio: 4/3`. Use SVG placeholder images in a warm gray fill with a project title overlay. The four projects: "Greenleaf", "Nova", "Terrain", "Dusk". On hover each thumbnail lifts with `box-shadow`.

Below the mosaic, a horizontally scrolling ticker strip (marquee-style, CSS animation `@keyframes marquee`) in `--color-paper` background:

```
WEB DESIGN · WEB DEVELOPMENT · E-COMMERCE · BRANDING · WEB APPS · DIGITAL ARTFORMS · WEB DESIGN · WEB DEVELOPMENT · ...
```

#### Section 002/ — What We Do (Introduction)

Background: `--color-chalk`. Centered text layout. Max-width `--container-text`.

```
Section label: 002/

Eyebrow (--font-mono, --text-xs, --tracking-widest, --color-violet):
"Our Craft"

Heading (h2, --text-4xl, --font-display, weight 800):
"Not just websites.  
Experiences worth  
remembering."

Body copy (--font-body, --text-md, --leading-relaxed, --color-ash):
"Every project at PixelMixers starts with the same question: what should visiting this site
feel like? We obsess over typography, motion, interaction, and structure — so that when
your visitors land, they don't bounce. They stay, they explore, they convert.

We work across the full spectrum. Simple, fast, beautiful static sites for local businesses.
Complex, animated, immersive experiences for brands who think of their website as a
piece of art. Everything in between."

Below this text, three horizontal stat items in a row (--font-display, weight 800, --text-4xl for the number; --font-body, --text-sm, --color-ash for the label):
  "50+"  — "Projects delivered"
  "8"    — "Years in the game"
  "100%" — "Client satisfaction target"
```

#### Section 003/ — Services Overview

Background: `--color-paper`. Four cards in a 2×2 grid (desktop), single column (mobile). Each card uses the `.card` component. Cards have a small accent stripe at the top in the relevant tier color.

Card 1 — Starter (stripe: `--color-mint`):
```
Tag: "Starter"
Title: "Clean & Fast"
Body: "Single-page or small multi-page sites. Perfect for local businesses, freelancers, and anyone who needs a sharp web presence without the enterprise price tag."
Link: "Learn more →"  href="/services/#starter"
```

Card 2 — Business (stripe: `--color-violet`):
```
Tag: "Business"
Title: "Built to Convert"
Body: "Multi-page sites, e-commerce stores, and service platforms. Designed for growth with performance-first architecture and clear calls to action throughout."
Link: "Learn more →"  href="/services/#business"
```

Card 3 — Premium (stripe: `--color-tangerine`):
```
Tag: "Premium"
Title: "Web Apps & Systems"
Body: "Dashboards, portals, SaaS interfaces, and complex interactive builds. We bring design excellence to technical products that usually look like they were built by engineers alone."
Link: "Learn more →"  href="/services/#premium"
```

Card 4 — Artform (stripe: `--color-rose`):
```
Tag: "Artform"
Title: "Digital as Medium"
Body: "For those who want their website to be an artwork in its own right. Experimental typography, generative elements, custom WebGL, immersive scroll stories. The full mix."
Link: "Learn more →"  href="/services/#artform"
```

Below the grid, centered CTA:
```
"Not sure where you land? We'll figure it out together."
[btn-ghost] "Start with a conversation →"  href="/contact/"
```

#### Section 004/ — Featured Work (Carousel)

Background: `--color-ink` (dark section). Light text. Mint glow ellipse top-right.

```
Section label: 004/ (--color-dust)

Heading (h2, --text-4xl, --color-chalk):
"Work we're  
proud of."

Subheading (--color-dust):
"A handful of recent projects — from the straightforward to the boundary-pushing."
```

Below heading: a full-width carousel (`data-carousel`) with 4 slides. Each slide shows a project in a cinematic 16:9 ratio card with:
- Large SVG placeholder image filling most of the card
- Bottom overlay with project name, category tag, and a "View project →" link in light text
- Category tags: "Starter", "Business", "Artform", "Premium"
- Projects: Greenleaf Rebrand, Nova E-Commerce, Terrain Experimental, Dusk Artform

Carousel controls: `←` / `→` arrow buttons, circular, in `--color-chalk` with `--color-ink` background, positioned below the carousel.

Below the carousel:
```
[btn-secondary] "View all work →"  href="/our-work/"
(button text in chalk, border in chalk, on dark background)
```

#### Section 005/ — Process Teaser

Background: `--color-chalk`. Alternating left/right layout for three steps.

```
Section label: 005/
Heading (h2, --text-3xl):
"How we work"
```

Three steps, each in a row with a large step number on one side and content on the other:

Step 01:
```
Number: "01" (--text-6xl, --font-display, weight 800, color: --glow-violet rendered as text, i.e. very light purple)
Title: "Discover & Define"
Body: "We start by listening. We want to understand your business, your audience, your goals — and the feeling you want your site to create. No templates, no shortcuts."
```

Step 02:
```
Number: "02"
Title: "Design in Motion"
Body: "We design directly in the browser where possible, or in Figma with high-fidelity prototypes. You see it move before a single line of production code is written."
```

Step 03:
```
Number: "03"
Title: "Build & Refine"
Body: "We build with clean, semantic, fast code. You get two rounds of revisions. We QA across devices, optimize for performance, and hand off with documentation."
```

Below steps:
```
[btn-ghost] "Read about our methodology →"  href="/the-studio/#methodology"
```

#### Section 006/ — Testimonials

Background: `--color-paper`. Single centered testimonial with large opening quote mark (rendered as a decorative `"` in `--text-6xl`, `--color-violet`, `--font-display`).

Three testimonials shown in a simple fade carousel (auto-advance every 6s):

Testimonial 1:
```
Quote: "PixelMixers didn't just build us a website — they built us a brand presence.
The site has converted better than anything we had before, and it looks absolutely stunning."
— Martina Horáková, CEO, GreenLeaf Botanicals
```

Testimonial 2:
```
Quote: "Working with the PixelMixers team felt collaborative and creatively exciting from day one.
They pushed us to think bigger and delivered something we genuinely didn't think was possible at our budget."
— David Park, Founder, Nova Commerce
```

Testimonial 3:
```
Quote: "The Terrain project was a genuine experiment — we wanted something that had never been done before.
PixelMixers understood the brief immediately and executed it flawlessly."
— Ingrid Svensson, Art Director, Terrain Studio
```

Dot indicators below the quote for navigation.

#### Section 007/ — Lab Teaser

Background: `--color-chalk`. Two-column layout: left is the heading/intro, right is a vertical stack of 2 article preview cards.

Left:
```
Section label: 007/
Heading (h2, --text-3xl):
"From the Lab"
Body:
"We write about the craft: type, motion, performance, and the weird experiments that teach us the most."
[btn-ghost] "Read all articles →"  href="/lab/"
```

Right (two article cards, compact variant with horizontal layout — image left, text right):

Article 1:
```
Tag: "Typography"
Title: "The Art of the Fold: What Your Above-the-Fold Says About You"
Date: "March 2025"
```

Article 2:
```
Tag: "Philosophy"
Title: "Why Minimalism Isn't About Removing Things — It's About Removing the Wrong Things"
Date: "February 2025"
```

#### Section 008/ — Final CTA

Background: `--color-ink` with rose glow ellipse center. Full-width. Centered.

```
Large heading (h2, --text-5xl, --color-chalk, --font-display, weight 800):
"Ready to make  
something great?"

Body (--color-dust, --text-lg):
"We take on a limited number of projects each quarter to ensure every client
gets our full attention. Tell us about yours."

[btn-primary] "Have a seat →"  href="/contact/"

Small note below (--font-mono, --text-xs, --color-dust):
"Usually respond within 24 hours · No sales calls, just honest conversation"
```

---

### PAGE 2 — THE STUDIO (the-studio/index.html)

#### Page `<head>`
```html
<title>The Studio — PixelMixers</title>
<meta name="description" content="PixelMixers is a boutique web studio based in Central Europe. Learn about our story, methodology, and philosophy for building websites that matter.">
```

#### Section 001/ — Studio Hero

Background: `--color-ink`. Light text. Violet glow top-right, tangerine glow bottom-left.

```
Section label: 001/ (--color-dust)

Heading (h1, --text-5xl, --color-chalk, weight 800):
"A small studio  
with a serious  
obsession."

Body (--text-lg, --color-dust, max-width 600px):
"We are PixelMixers — a tight-knit team of designers, developers, and digital thinkers
based in Bratislava, building websites for clients across Europe and beyond.

Founded in 2018, we've stayed deliberately small because we believe the best creative
work happens when the people doing it care deeply. Every project gets our full attention.
Every line of code and every design decision is intentional."
```

Below, a horizontal row of three facts in pill-shaped boxes with `--color-coal` background:
```
"Est. 2018"  |  "Based in Bratislava, SK"  |  "Working globally"
```

#### Section 002/ — Our Story

Two-column alternating layout. Image placeholder left, text right.

```
Section label: 002/
Heading (h2, --text-3xl, --color-chalk): "How we got here"

Body (--color-dust, --leading-relaxed):
"PixelMixers started in a shared apartment in Bratislava's old town, with two laptops, one
client, and a lot of ambition. Marek was fresh out of graphic design school and Filip had
just quit his job at a software agency. Neither of them wanted to keep building things that
looked like software.

They wanted to build things that felt alive.

Eight years later, we've grown into a studio of four — still small by design, still obsessed
with craft, still refusing to ship anything we wouldn't be proud to put our names on.

We've worked with local coffee shops and international SaaS companies, with independent
artists and established retailers, with first-time founders and seasoned executives. The
brief changes. The standard doesn't."
```

#### Section 003/ — Methodology

Background: `--color-chalk`. id="methodology" on this section.

```
Section label: 003/
Heading (h2, --text-3xl): "The way we work"
```

Six methodology pillars displayed in a 3×2 grid (desktop) or single column (mobile). Each pillar has:
- A monospace number label ("01" through "06")
- A title
- A short paragraph

```
01 — "Start with feeling"
"Before wireframes or briefs, we ask: how should this site feel? Confident? Playful? Calm? Urgent?
The emotional target shapes every subsequent decision."

02 — "Design in context"
"We prototype in the browser early. Real fonts, real motion, real breakpoints. No abstract mockups
that fall apart when they meet code."

03 — "Words first"
"Copy is design. We work on content and copy in parallel with visual design — never treating it as
something to fill in later."

04 — "Performance is a feature"
"We build fast by default. Optimized images, minimal dependencies, lazy loading, and proper caching
aren't extras — they're the baseline."

05 — "Accessibility always"
"Every site we build meets WCAG 2.1 AA. Semantic HTML, keyboard navigation, screen-reader labels.
The web should work for everyone."

06 — "Honest handoffs"
"When we deliver, you get the code, the documentation, and a walkthrough. No vendor lock-in,
no mysterious black boxes. It's your site."
```

#### Section 004/ — Philosophy

Background: `--color-paper`. id="philosophy". Large pull-quote style section.

```
Section label: 004/
Large pull quote (--text-4xl, --font-display, weight 800, --leading-snug, centered):
"The internet is drowning in 
average. We'd rather build
one thing worth noticing
than ten things worth
forgetting."

Attribution (--font-mono, --text-sm, --color-dust, centered):
— Marek Novak, Co-Founder
```

Below, three philosophy pillars in a horizontal row:

```
"Craft over speed"
"We'd rather take an extra week and get it right than ship fast and apologize later."

"Relationships over transactions"
"Most of our work comes from referrals. That tells us something about how we treat our clients."

"Curiosity over comfort"
"We experiment constantly. The Lab exists because we need a place to try things that might fail."
```

#### Section 005/ — Studio CTA

Background: `--color-ink`. Centered.

```
Heading (h2, --text-3xl, --color-chalk):
"Sound like your kind of studio?"

[btn-primary] "Start a conversation →"  href="/contact/"
[btn-secondary] "See the team →"  href="/the-team/"
(secondary in chalk/outlined)
```

---

### PAGE 3 — OUR WORK (our-work/index.html)

#### Page `<head>`
```html
<title>Our Work — PixelMixers</title>
<meta name="description" content="Browse the PixelMixers portfolio — from clean business websites to experimental digital artforms. Every project is different. Every project is intentional.">
```

#### Section 001/ — Work Hero

Background: `--color-chalk`.

```
Section label: 001/
Heading (h1, --text-4xl, weight 800):
"Work we're  
proud to show."

Body (--text-md, --color-ash, max-width 560px):
"Every project in this portfolio was built to solve a real problem — or explore a real question.
Browse by category or scroll through the full mix."
```

Below heading: filter tabs — pill buttons, one active at a time, updating the grid below via JavaScript `data-filter` attributes:
```
[All]  [Starter]  [Business]  [Premium]  [Artform]
```

Active pill: `--color-violet` background, chalk text. Inactive: `--color-paper` background, ink text.

#### Section 002/ — Portfolio Grid

A CSS Grid: `grid-template-columns: repeat(auto-fill, minmax(360px, 1fr))` with `gap: var(--space-8)`.

Six projects:

Project 1 — GreenLeaf Rebrand:
```
Image: SVG placeholder, warm green tones
Tag: "Starter"
Title: "GreenLeaf Botanicals"
Excerpt: "Brand identity and a clean 5-page site for a premium plant shop in Vienna."
Link: "/our-work/project/greenleaf-rebrand/"
```

Project 2 — Nova E-Commerce:
```
Image: SVG placeholder, deep blue tones
Tag: "Business"
Title: "Nova Commerce Platform"
Excerpt: "Full e-commerce build for a Central European fashion brand. Custom CMS, 200+ SKUs, multilingual."
Link: "/our-work/project/nova-ecommerce/"
```

Project 3 — Pulse Web App:
```
Image: SVG placeholder, cool grey tones
Tag: "Premium"
Title: "Pulse Analytics Dashboard"
Excerpt: "SaaS dashboard interface for a real-time data analytics startup. Design system + front-end build."
Link: "/our-work/project/pulse-webapp/"
```

Project 4 — Bloom Portfolio:
```
Image: SVG placeholder, warm pink/peach tones
Tag: "Starter"
Title: "Bloom — Photographer Portfolio"
Excerpt: "Minimal, fast, beautiful portfolio site for a Budapest-based lifestyle photographer."
Link: "/our-work/project/bloom-portfolio/"
```

Project 5 — Terrain Experimental:
```
Image: SVG placeholder, earth tones/brown
Tag: "Artform"
Title: "Terrain — Experimental Navigation"
Excerpt: "An award-shortlisted site exploring topographic maps as a navigation metaphor. Custom WebGL."
Link: "/our-work/project/terrain-experimental/"
```

Project 6 — Dusk Artform:
```
Image: SVG placeholder, deep purple/night sky
Tag: "Artform"
Title: "Dusk — Interactive Generative Art"
Excerpt: "A music artist's website where the background responds to sound in real time. Canvas API + Web Audio."
Link: "/our-work/project/dusk-artform/"
```

#### Section 003/ — Work CTA

```
Centered, --color-paper background.
"Like what you see? Let's build something for you."
[btn-primary] "Start a project →"  href="/contact/"
```

---

### PAGE 4 — INDIVIDUAL PROJECT (our-work/project/greenleaf-rebrand/index.html)

Use this template for all 6 project pages, with adjusted content.

#### Page `<head>`
```html
<title>GreenLeaf Botanicals — PixelMixers</title>
<meta name="description" content="How we built a clean, conversion-focused website and brand identity for GreenLeaf Botanicals, a premium plant shop in Vienna.">
```

#### Section 001/ — Project Hero

Background: `--color-chalk`. Large hero image placeholder (16:9 ratio, `--color-paper` fill). Below image:

```
Category tag (--font-mono, --color-mint, --text-xs, --tracking-widest): "STARTER · BRAND + WEB"

Project title (h1, --text-5xl, weight 800, --leading-tight):
"GreenLeaf Botanicals"

Meta row (--font-mono, --text-xs, --color-dust, flex row with gaps):
"Year: 2024"  |  "Client: GreenLeaf Botanicals GmbH"  |  "Location: Vienna, AT"
```

#### Section 002/ — Project Brief

Two columns: left "The Brief", right "The Outcome".

```
The Brief:
"GreenLeaf approached us with a clear problem: their website looked like every other WordPress plant shop on the internet. They wanted something that felt as premium as their product range, without losing the warmth and approachability that made their in-store experience special."

The Outcome:
"We delivered a 5-page static site with a custom brand identity, hand-lettered logo variant, full Figma design system, and a performance score of 98/100 on Lighthouse. They reported a 40% increase in online enquiries within the first quarter."
```

#### Section 003/ — Project Details

Three columns of project metadata:

```
Services:      "Brand Identity, Web Design, Web Development"
Timeline:      "6 weeks"
Technologies:  "HTML, CSS, JavaScript, Netlify"
```

#### Section 004/ — Project Gallery

A 3-image grid (or 2+1 layout): three full-width SVG placeholder images showing the site at desktop and mobile.

#### Section 005/ — Next Project

```
Background: --color-ink. Centered.
Label: "NEXT PROJECT"
Title: "Nova Commerce Platform →"
Link: "/our-work/project/nova-ecommerce/"
```

---

### PAGE 5 — SERVICES (services/index.html)

#### Page `<head>`
```html
<title>Services — PixelMixers</title>
<meta name="description" content="PixelMixers offers four service tiers: Starter sites, Business builds, Premium web apps, and Artform digital experiences. Find your fit.">
```

#### Section 001/ — Services Hero

Background: `--color-chalk`. Violet glow top-right.

```
Section label: 001/
Heading (h1, --text-4xl, weight 800):
"From a clean  
landing page to a  
full digital artform."

Body (--text-md, --color-ash):
"We've structured our services into four tiers, each designed around a different kind of
ambition. Not sure where you fit? Read on — or just get in touch and we'll figure it out."
```

#### Section 002/ — Starter Tier

id="starter". Background: `--color-chalk`.

```
Section label: "002 / STARTER"
Left column:
  Accent color stripe: --color-mint
  Tier name (h2, --text-3xl, weight 800): "Starter Sites"
  Price indication (--font-mono, --text-sm, --color-ash): "From €1,200"
  Body:
  "For freelancers, local businesses, and anyone launching something new. A Starter site
  gives you a clean, fast, mobile-perfect web presence without unnecessary complexity.

  You get what you need. Nothing you don't."

  What's included list (checkmark icon + text, --font-body, --text-sm):
  ✓ Up to 5 pages
  ✓ Custom design (no templates)
  ✓ Mobile-first, responsive layout
  ✓ Contact form
  ✓ Basic SEO setup (meta tags, sitemap)
  ✓ Performance optimized (90+ Lighthouse score)
  ✓ 2 rounds of revisions
  ✓ Netlify or GitHub Pages deployment
  ✓ 30-day post-launch support

Right column:
  Example project card linking to GreenLeaf Rebrand.
  "Who it's for" callout box (--color-paper background, --radius-lg):
  "Freelancers, independent shops, service businesses, artists, local restaurants and cafes,
  anyone launching a side project."

[btn-primary] "Get a Starter quote →"  href="/contact/?tier=starter"
```

#### Section 003/ — Business Tier

id="business". Background: `--color-paper`.

```
Section label: "003 / BUSINESS"
Tier name (h2): "Business Builds"
Price: "From €4,500"
Body:
"For growing businesses that need more than a brochure. Business builds include proper
information architecture, e-commerce capability, CMS integration, and the kind of
performance and conversion optimization that actually moves numbers."

Included:
✓ Up to 20 pages or unlimited products (e-commerce)
✓ Custom design system
✓ CMS integration (Sanity, Contentful, or simple Markdown)
✓ E-commerce (Shopify, WooCommerce, or custom)
✓ Advanced SEO (schema markup, Open Graph, sitemaps)
✓ Analytics setup (Plausible or GA4)
✓ 3 rounds of revisions
✓ Custom domain + hosting setup
✓ 60-day post-launch support

Example project: Nova E-Commerce.
Who it's for: "Retail brands, service companies, growing startups, professional service firms, hospitality businesses."

[btn-primary] "Get a Business quote →"  href="/contact/?tier=business"
```

#### Section 004/ — Premium Tier

id="premium". Background: `--color-chalk`.

```
Tier name (h2): "Premium Web Apps"
Price: "From €12,000"
Body:
"For technical products that deserve great design. We build dashboards, SaaS interfaces,
portals, and complex interactive applications — bringing the same design rigor we apply
to marketing sites into the product itself."

Included:
✓ Full UX research and information architecture
✓ Custom design system and component library
✓ Front-end development (vanilla JS or React, depending on requirements)
✓ API integration and back-end coordination
✓ Accessibility audit (WCAG 2.1 AA)
✓ Performance budget and monitoring
✓ Handoff with full Storybook documentation
✓ 90-day post-launch support + SLA

Example project: Pulse Analytics.
Who it's for: "SaaS startups, data platforms, fintech products, enterprise teams, product companies."

[btn-primary] "Get a Premium quote →"  href="/contact/?tier=premium"
```

#### Section 005/ — Artform Tier

id="artform". Background: `--color-ink`. Light text. Rose glow center.

```
Tier name (h2, --color-chalk): "Digital Artforms"
Price (--color-dust): "Bespoke pricing — let's talk"
Body (--color-dust):
"For those who want their website to be a work of art. No templates, no frameworks
copied from someone else's codepen. These are one-of-a-kind digital experiences —
immersive, experimental, technically ambitious.

WebGL. Canvas API. Generative visuals. Custom audio reactive elements. Scroll
storytelling. Typography as architecture. We don't know what yours will look like
until we discover it together."

Included (adapted for this tier):
✓ Deep creative discovery sessions
✓ Concept development and experimentation period
✓ Custom technical architecture
✓ Bespoke animation and interaction design
✓ Performance-optimized despite complexity
✓ Press kit and technical writeup (for awards submissions)
✓ 6-month post-launch support

Example project: Terrain Experimental, Dusk Artform.

[btn-primary] "Discuss an Artform →"  href="/contact/?tier=artform"
```

#### Section 006/ — Comparison Table

Background: `--color-paper`. A responsive comparison table with four columns (one per tier) and rows for key features. On mobile, allow horizontal scroll with sticky first column.

Features to compare:
```
                    Starter    Business    Premium    Artform
Pages / scope       Up to 5    Up to 20    Unlimited  Bespoke
Custom design       ✓          ✓           ✓          ✓
CMS                 —          ✓           ✓          Optional
E-commerce          —          ✓           ✓          —
Web app / SaaS      —          —           ✓          —
Experimental tech   —          —           —          ✓
SEO setup           Basic      Advanced    Advanced   Basic
Revisions           2          3           Ongoing    Ongoing
Support             30 days    60 days     90 days    6 months
Starting from       €1,200     €4,500      €12,000    Bespoke
```

#### Section 007/ — Services FAQ Teaser

```
"Have questions about the process or pricing?"
[btn-ghost] "Read the FAQ →"  href="/faq/"
```

---

### PAGE 6 — THE TEAM (the-team/index.html)

#### Page `<head>`
```html
<title>The Team — PixelMixers</title>
<meta name="description" content="Meet the PixelMixers team — the designers, developers, and thinkers behind the work.">
```

#### Section 001/ — Team Hero

Background: `--color-chalk`.

```
Section label: 001/
Heading (h1, --text-4xl, weight 800):
"The people  
behind the pixels."

Body (--text-md, --color-ash):
"We're four. We keep it that way on purpose. When you work with PixelMixers, you work
with the people who actually build your site — not an account manager who relays messages
to a team you never meet."
```

#### Section 002/ — Team Grid

A 2×2 grid of team member cards. Each card:
- Square portrait image placeholder (1:1 ratio, warm neutral tones, `--radius-xl`)
- Name in `--font-display`, weight 700, `--text-xl`
- Role in `--font-mono`, `--text-xs`, `--tracking-widest`, `--color-violet`
- One-sentence bio in `--font-body`, `--text-sm`, `--color-ash`
- Link to individual profile: "View profile →"

Team members:

```
Marek Novak
Role: "Co-Founder, Design Director"
Bio: "Marek has been drawing the web into existence since 2015. He believes good design is invisible — and bad design is very, very visible."
Profile: /the-team/team/marek-novak/

Lucia Varga
Role: "Lead Developer"
Bio: "Lucia writes CSS that would make you cry (in the good way). She's obsessed with animation performance and accessibility in equal measure."
Profile: /the-team/team/lucia-varga/

Filip Kral
Role: "Co-Founder, Strategy"
Bio: "Filip asks the uncomfortable questions: What do your visitors actually want? What are they trying to do? What's stopping them?"
Profile: /the-team/team/filip-kral/

Zoe Black
Role: "Motion & Interaction Designer"
Bio: "Zoe makes things move. She joined PixelMixers to prove that motion design and web performance aren't mutually exclusive."
Profile: /the-team/team/zoe-black/
```

#### Section 003/ — Values

Background: `--color-paper`. Three value statements in a horizontal row.

```
"Work is better when you like the people you're doing it with."
"We take projects seriously, not ourselves."
"The best studio is one clients want to come back to."
```

#### Section 004/ — Join the Team

Background: `--color-ink`.

```
Heading (--color-chalk): "We're not always hiring — but we're always interested in good people."
Body (--color-dust): "If you're a designer or developer who cares deeply about craft and wants to work somewhere small but serious, send us a note."
[btn-secondary] "Say hello →"  href="/contact/?subject=careers"
```

---

### PAGE 7 — INDIVIDUAL TEAM MEMBER (the-team/team/marek-novak/index.html)

Use this template for all 4 team members.

#### Layout

Two-column: left is portrait (large, `--radius-2xl`, occupying full column height), right is all content.

```
Name (h1, --text-4xl, weight 800): "Marek Novak"
Role (--font-mono, --text-sm, --color-violet, --tracking-widest): "CO-FOUNDER, DESIGN DIRECTOR"

Bio paragraphs:
"Marek grew up taking apart radios and putting them back together wrong — which is, he argues,
the best possible training for web design. He studied graphic design at VŠVU in Bratislava,
spent three years at a branding agency, and co-founded PixelMixers in 2018 with Filip.

He leads all design work at PixelMixers, from initial concepts through to final handoff.
His obsessions include type systems, negative space, and the precise moment a design stops
being decoration and becomes communication.

When he's not designing, he's hiking in the Tatras or arguing about coffee."

Skills / interests horizontal tags (pill chips, --color-paper bg, --font-mono, --text-xs):
"Typography"  "Motion Design"  "Brand Systems"  "Figma"  "CSS Architecture"  "Photography"

Projects worked on: show 3 project cards (compact version)
```

---

### PAGE 8 — LAB (lab/index.html)

#### Page `<head>`
```html
<title>The Lab — PixelMixers</title>
<meta name="description" content="PixelMixers Lab — articles, experiments, and ideas about web design, development, motion, and craft.">
```

#### Section 001/ — Lab Hero

Background: `--color-chalk`.

```
Section label: 001/
Heading (h1, --text-4xl, weight 800):
"The Lab."

Body (--text-md, --color-ash):
"Where we write about what we're learning, building, and thinking about.
No SEO-bait, no listicles — just honest craft writing."
```

#### Section 002/ — Articles Grid

Three article cards in a row (desktop), single column (mobile). Each article card:
- Wide image placeholder (16:9, `--radius-lg`)
- Category tag (`--font-mono`, `--color-violet`)
- Title (`--font-display`, weight 700, `--text-xl`)
- Excerpt (2 sentences, `--font-body`, `--text-sm`, `--color-ash`)
- Date + estimated read time (`--font-mono`, `--text-xs`, `--color-dust`)

Articles:

Article 1:
```
Tag: "Typography"
Title: "The Art of the Fold: What Your Above-the-Fold Says About You"
Excerpt: "The first thing a visitor sees tells them everything about the kind of site they've landed on. Here's what most designers get wrong about it."
Date: "March 2025 · 6 min read"
Link: /lab/posts/the-art-of-the-fold/
```

Article 2:
```
Tag: "Philosophy"
Title: "Why Minimalism Isn't About Removing Things — It's About Removing the Wrong Things"
Excerpt: "The worst minimalist websites I've seen weren't minimal at all — they were just empty. Here's the difference that matters."
Date: "February 2025 · 8 min read"
Link: /lab/posts/why-minimalism-wins/
```

Article 3:
```
Tag: "Experiments"
Title: "Building for Wonder: What We Learned From the Terrain Project"
Excerpt: "When a client asks you to build something that's never been built before, where do you start? We started by drawing topographic maps on a whiteboard."
Date: "January 2025 · 10 min read"
Link: /lab/posts/building-for-wonder/
```

---

### PAGE 9 — INDIVIDUAL LAB POST (lab/posts/the-art-of-the-fold/index.html)

#### Layout

Single-column article layout, max-width `--container-text`, centered.

```
Header:
  Category tag (--color-violet, --font-mono, --text-xs, --tracking-widest)
  Title (h1, --text-4xl, weight 800, --leading-tight)
  Meta row: Author + Date + Read time (--font-mono, --text-xs, --color-dust)
  Author avatar (32px circle) + "By Marek Novak"
  Hero image placeholder (16:9 ratio, full content-width, --radius-xl)

Article body (--font-body, --text-md, --leading-relaxed, --color-ink):
  h2 headings: --font-display, weight 700, --text-2xl
  Blockquotes: left border 4px --color-violet, padding-left --space-6, --text-lg, --color-ash, italic
  Code blocks: --font-mono, --color-paper bg, padding --space-4, --radius-md

Full article copy:

"Most designers treat 'the fold' as a constraint. Something to design around. I want to make
the case that it's actually the single most powerful communicative opportunity on any webpage.

## What the fold actually communicates

When a visitor lands on your site, they make a decision in less than two seconds: is this worth
my time? They're not reading. They're feeling. They're absorbing the weight, the space, the
colour, the first words that catch their eye.

The fold is the pitch. Not the headline — the entire visual and emotional experience of that
first screenful.

> 'Design is not just what it looks like. Design is how it works.'
> — Steve Jobs (we know, we know — but it's still true)

## The three signals every fold sends

1. **Quality signal** — Does this look like it was made with care, or does it look templated?
2. **Relevance signal** — Am I in the right place? Does this site do what I came here for?
3. **Tone signal** — Is this my kind of people? Do I feel comfortable or alienated?

Most folds fail on one of these. Usually tone. It's the hardest to get right because it requires
knowing your audience well enough to design for how they feel, not just what they need.

## What we do differently at PixelMixers

We design folds last. We write the copy first, establish the tone, decide on the emotional target —
and then we figure out what the page should look like. This sounds backwards. It works every time.

The fold is a consequence of decisions made earlier. If you design it first, you're guessing."

Back link: "← Back to the Lab"  href="/lab/"
```

---

### PAGE 10 — CONTACT (contact/index.html)

#### Page `<head>`
```html
<title>Start a Project — PixelMixers</title>
<meta name="description" content="Tell us about your project. We respond within 24 hours and keep things simple — no sales calls, just an honest conversation about what you need.">
```

#### Section 001/ — Contact Hero

Background: `--color-chalk`. Violet glow top-right.

```
Section label: 001/
Heading (h1, --text-4xl, weight 800):
"Have a seat.  
Tell us everything."

Body (--text-md, --color-ash):
"We take on a limited number of projects each quarter to make sure every client
gets our full focus. If the timing works, great. If not, we'll tell you honestly
and point you in the right direction."
```

#### Section 002/ — Contact Form

Two-column layout: form left, info right.

**Form fields** (all with floating labels or clearly spaced stacked labels):

```
Name (required)           — text input
Email (required)          — email input
Company / Project name    — text input
Service tier              — select: [Not sure yet / Starter / Business / Premium / Artform]
Budget range              — select: [Under €2,000 / €2,000–5,000 / €5,000–15,000 / €15,000+ / Let's discuss]
Project description       — textarea (minimum 120px height)
                            placeholder: "Tell us what you're trying to build, why it matters, and
                            anything else you think is relevant. The more context you give us,
                            the better our initial response will be."
How did you hear about us — text input (optional)

[btn-primary, full width] "Send it →"
```

**Form CSS** — clean, minimal:
```css
.form-group { margin-bottom: var(--space-6); }
.form-label {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--surface-raised);
  border: 2px solid var(--color-smoke);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: none;
}
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-violet);
  box-shadow: 0 0 0 3px rgba(107, 63, 231, 0.12);
}
```

**Right column info:**

```
Office info box (--color-paper bg, --radius-xl, padding --space-8):
"Studio Hours"
"Mon–Fri, 9:00–17:00 CET"

"Response time"
"Within 24 business hours"

"Language"
"English, Slovak, Czech"

Direct email link:
hello@pixelmixers.com

A short note in --font-body, --text-sm, --color-ash:
"We don't do sales calls. Our first touchpoint is always via email — we'll read your
brief, ask any clarifying questions, and give you an honest assessment of whether
we're the right fit. If we're not, we'll say so."
```

#### Section 003/ — Alternative CTA

```
Background: --color-paper. Centered.
"Just want to say hello first?"
"Follow us on Instagram for an unfiltered look at what we're working on."
[btn-secondary] "@pixelmixers on Instagram →"
```

---

### PAGE 11 — FAQ (faq/index.html)

#### Page `<head>`
```html
<title>FAQ — PixelMixers</title>
<meta name="description" content="Answers to the most common questions about working with PixelMixers — pricing, process, timelines, revisions, and more.">
```

#### Section 001/ — FAQ Hero

```
Section label: 001/
Heading (h1, --text-4xl, weight 800): "Common questions."
Body: "We've tried to answer everything here. If yours isn't covered, just ask."
```

#### Section 002/ — Accordion FAQ

Implement a JavaScript accordion where clicking a question toggles the answer. Only one answer open at a time. ARIA attributes: `aria-expanded`, `aria-controls`, `id` on the answer panel.

Grouped into four categories with `<h2>` category headings:

**Category: About the Studio**

```
Q: "How big is the PixelMixers team?"
A: "We're four people. Marek handles design direction, Lucia leads development, Filip manages strategy and client relationships, and Zoe specialises in motion and interaction. On larger projects we work with a trusted network of specialist freelancers, always disclosed to the client."

Q: "Where are you based? Do you work with international clients?"
A: "We're based in Bratislava, Slovakia. About 60% of our clients are outside Slovakia — we've worked with clients in the UK, Germany, Austria, the Netherlands, Canada, and Australia. We work fully remotely with no issues."

Q: "Do you take on small projects?"
A: "Yes. Our Starter tier starts at €1,200 and is designed for exactly this. Small doesn't mean less care — it means a focused scope."
```

**Category: Process & Timelines**

```
Q: "How long does a project take?"
A: "Starter sites: 3–4 weeks. Business builds: 6–10 weeks. Premium web apps: 10–20 weeks. Artform projects: varies — we discuss timeline at the brief stage. These assume timely client feedback at each stage."

Q: "What does your process look like from first contact to launch?"
A: "Brief call or email → We send a proposal → Deposit invoice → Discovery session → Design phase → Build phase → Two (or more) rounds of revision → QA and testing → Launch → Post-launch support. You're involved throughout, never surprised."

Q: "Can you work with an existing design?"
A: "Yes. We're happy to take a Figma file or set of designs and build from them. This is billed as a development-only engagement. We'll do a design review and flag anything that might cause issues in the build."

Q: "What do you need from us to start?"
A: "A brief. It doesn't have to be polished — a clear description of what you need and why, your rough budget, and your timeline expectations. We handle the rest."
```

**Category: Pricing & Contracts**

```
Q: "How does payment work?"
A: "We take a 40% deposit to start, 30% at design sign-off, and 30% at launch. For larger projects we can split differently — we're flexible."

Q: "What's not included in your prices?"
A: "Third-party costs: domain registration, hosting, paid CMS plans, stock photography, font licences, third-party plugins or services. We'll flag all of these in advance."

Q: "Do you offer ongoing maintenance?"
A: "Yes — we offer a monthly retainer for updates, backups, performance monitoring, and small changes. Pricing is project-dependent, starting at €150/month."

Q: "What if I need changes after launch?"
A: "Every tier includes a post-launch support period (30 days for Starter, up to 6 months for Artform). After that, changes are billed at our standard hourly rate of €95/hour, or covered by a maintenance retainer."
```

**Category: Technical**

```
Q: "What technologies do you use?"
A: "It depends on the project. For simple sites: semantic HTML, custom CSS, vanilla JavaScript, deployed to Netlify or Vercel. For CMS-driven sites: Sanity or Contentful. For e-commerce: Shopify or WooCommerce. For web apps: React with a REST or GraphQL API. We always discuss the tech stack with the client and choose based on requirements, not preference."

Q: "Will I be able to edit the site myself?"
A: "For Business tier and above, yes — we integrate a CMS so you can edit content without touching code. For Starter sites, we build with clear, well-commented code and provide a simple guide."

Q: "Do you provide hosting?"
A: "We set up and configure hosting. We recommend Netlify for static sites and Vercel for more complex builds. You own the account and the infrastructure — we're just the ones who set it up."

Q: "What about SEO?"
A: "Every site we build includes baseline SEO: semantic HTML, meta tags, Open Graph, structured data, and a sitemap. Advanced SEO strategy (keyword research, content planning, link building) is outside our scope, but we can refer you to specialists."
```

---

### PAGE 12 — LEGALS (legals/index.html)

#### Page `<head>`
```html
<title>Legal Information — PixelMixers</title>
```

Simple, clean single-column page with anchor-linked sections: Privacy Policy, Terms of Service, Cookie Policy.

Background: `--color-chalk`. Max-width `--container-text`. Standard legal prose formatting:
- `h1`: "Legal Information"
- `h2`: section titles (Privacy Policy / Terms of Service / Cookie Policy), each with `id` matching the footer links
- `h3`: subsection headings
- Body text: `--font-body`, `--text-base`, `--leading-relaxed`

**Privacy Policy** (id="privacy") — include the following standard content sections:
1. Who we are (PixelMixers s.r.o., Bratislava, Slovakia)
2. What data we collect (contact form submissions, analytics, cookies)
3. How we use it (responding to enquiries, improving the site, no third-party sale)
4. How long we keep it (contact data: 2 years / analytics: anonymised)
5. Your rights (GDPR: access, correction, deletion, portability)
6. Contact for data queries: privacy@pixelmixers.com

**Terms of Service** (id="terms") — include:
1. Scope of services
2. Intellectual property (client owns final deliverables; PixelMixers retains right to display in portfolio unless otherwise agreed)
3. Payment terms (40/30/30 split, net 14 days per invoice)
4. Revisions and scope creep policy
5. Warranties and limitations of liability
6. Governing law: Slovak Republic

**Cookie Policy** (id="cookies") — include:
1. What cookies we use (strictly necessary, analytics — Plausible, no advertising cookies)
2. How to control cookies
3. Third-party services (Netlify forms, Plausible Analytics)

---

## PART 7 — RESPONSIVE DESIGN

### 7.1 Breakpoints

```css
/* Define in tokens.css */
/* 
  Mobile first — base styles for mobile (<= 480px)
  @media (min-width: 481px)  -- large mobile / phablet
  @media (min-width: 768px)  -- tablet
  @media (min-width: 1024px) -- desktop
  @media (min-width: 1280px) -- wide desktop
  @media (min-width: 1440px) -- ultra-wide
*/
```

### 7.2 Layout Grid

Use CSS Grid for all multi-column layouts. Never use Flexbox for page-level layout:

```css
.container {
  max-width: var(--container-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
}

.grid-2 { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
.grid-3 { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
.grid-4 { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
}
```

### 7.3 Mobile Rules

- Minimum tap target: 44×44px
- Minimum body text size on mobile: 16px (no smaller)
- No horizontal scroll on any page (except intentional carousels)
- Navigation collapses to hamburger below 768px
- All hero headings readable at 320px viewport width (test with `clamp()`)
- Carousel becomes full-width swipeable on mobile
- Cards stack to single column below 768px
- Footer nav columns collapse to a single accordion on mobile

---

## PART 8 — PERFORMANCE

### 8.1 Image Optimization

For placeholder images, generate SVG inline placeholders with:
- Correct `width` and `height` attributes on all `<img>` tags
- `loading="lazy"` on all images below the fold
- `loading="eager"` and `fetchpriority="high"` on hero images
- `alt` text on every image — descriptive for content images, empty `alt=""` for purely decorative ones
- `decoding="async"` on all images

SVG placeholder pattern:
```html
<img
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23EFEDE6'/%3E%3Ctext x='400' y='260' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23B8B5AD'%3EGreenLeaf Botanicals%3C/text%3E%3C/svg%3E"
  alt="GreenLeaf Botanicals website preview"
  width="800"
  height="500"
  loading="lazy"
  decoding="async"
>
```

### 8.2 CSS Loading Strategy

```html
<!-- In <head> of every page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap">

<!-- Critical CSS: tokens, reset, typography, layout — inline or early load -->
<link rel="stylesheet" href="/assets/css/reset.css">
<link rel="stylesheet" href="/assets/css/tokens.css">
<link rel="stylesheet" href="/assets/css/typography.css">
<link rel="stylesheet" href="/assets/css/layout.css">
<link rel="stylesheet" href="/assets/css/components.css">
<link rel="stylesheet" href="/assets/css/animations.css">
<!-- Page-specific last -->
<link rel="stylesheet" href="/assets/css/pages/home.css">
```

### 8.3 JavaScript Loading

```html
<!-- All JS at end of <body>, type="module" for core scripts -->
<script src="/assets/js/core/nav.js" defer></script>
<script src="/assets/js/core/scroll-reveal.js" defer></script>
<script src="/assets/js/core/cursor.js" defer></script>
<script src="/assets/js/core/carousel.js" defer></script>
<script src="/assets/js/core/accordion.js" defer></script>
<!-- Page-specific last -->
<script src="/assets/js/pages/home.js" defer></script>
```

### 8.4 reset.css

```css
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; padding: 0; }
html {
  font-size: 100%;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}
body {
  min-height: 100dvh;
  line-height: var(--leading-normal);
  font-family: var(--font-body);
  background-color: var(--surface-base);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
ul, ol { list-style: none; }
a { color: inherit; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## PART 9 — SEO & META

### 9.1 Base HTML Template

Every page must start with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#6B3FE7">

  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">

  <!-- Page-specific title, description, OG, canonical — see per-page specs above -->

  <!-- Structured data — see 9.2 -->

  <!-- CSS -->
  <!-- JS preloads if needed -->
</head>
<body>
  <!-- CTA Banner -->
  <!-- Navigation -->
  <main id="main-content">
    <!-- Page content -->
  </main>
  <!-- Footer -->
  <!-- JS scripts -->
</body>
</html>
```

Include a `<a href="#main-content" class="skip-link">Skip to main content</a>` as the very first element inside `<body>`.

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  background: var(--color-violet);
  color: var(--color-chalk);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  z-index: 9999;
  text-decoration: none;
}
.skip-link:focus { top: var(--space-4); }
```

### 9.2 Structured Data

On the homepage, include:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PixelMixers",
  "description": "Web design and development studio crafting websites from clean business sites to full digital artforms.",
  "url": "https://pixelmixers.com",
  "logo": "https://pixelmixers.com/assets/images/og/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bratislava",
    "addressCountry": "SK"
  },
  "email": "hello@pixelmixers.com",
  "foundingDate": "2018",
  "serviceType": ["Web Design", "Web Development", "E-Commerce", "Brand Identity", "Web Applications"],
  "areaServed": "Worldwide",
  "sameAs": [
    "https://twitter.com/pixelmixers",
    "https://instagram.com/pixelmixers",
    "https://dribbble.com/pixelmixers",
    "https://linkedin.com/company/pixelmixers"
  ]
}
</script>
```

On project pages, use `@type: "CreativeWork"` with `creator`, `name`, `description`, `url`.

On team member pages, use `@type: "Person"` with `name`, `jobTitle`, `worksFor`.

On Lab articles, use `@type: "Article"` with `headline`, `author`, `datePublished`, `publisher`.

### 9.3 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://pixelmixers.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://pixelmixers.com/the-studio/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://pixelmixers.com/our-work/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://pixelmixers.com/our-work/project/greenleaf-rebrand/</loc><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://pixelmixers.com/our-work/project/nova-ecommerce/</loc><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://pixelmixers.com/our-work/project/pulse-webapp/</loc><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://pixelmixers.com/our-work/project/bloom-portfolio/</loc><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://pixelmixers.com/our-work/project/terrain-experimental/</loc><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://pixelmixers.com/our-work/project/dusk-artform/</loc><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://pixelmixers.com/services/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://pixelmixers.com/the-team/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://pixelmixers.com/the-team/team/marek-novak/</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://pixelmixers.com/the-team/team/lucia-varga/</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://pixelmixers.com/the-team/team/filip-kral/</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://pixelmixers.com/the-team/team/zoe-black/</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://pixelmixers.com/lab/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://pixelmixers.com/lab/posts/the-art-of-the-fold/</loc><changefreq>yearly</changefreq><priority>0.6</priority></url>
  <url><loc>https://pixelmixers.com/lab/posts/why-minimalism-wins/</loc><changefreq>yearly</changefreq><priority>0.6</priority></url>
  <url><loc>https://pixelmixers.com/lab/posts/building-for-wonder/</loc><changefreq>yearly</changefreq><priority>0.6</priority></url>
  <url><loc>https://pixelmixers.com/contact/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://pixelmixers.com/faq/</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://pixelmixers.com/legals/</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>
```

---

## PART 10 — ACCORDION COMPONENT

### JavaScript (assets/js/core/accordion.js)

```javascript
function initAccordion() {
  const accordions = document.querySelectorAll('[data-accordion]');

  accordions.forEach(accordion => {
    const items = accordion.querySelectorAll('[data-accordion-item]');

    items.forEach(item => {
      const trigger = item.querySelector('[data-accordion-trigger]');
      const panel = item.querySelector('[data-accordion-panel]');

      if (!trigger || !panel) return;

      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Close all
        items.forEach(i => {
          const t = i.querySelector('[data-accordion-trigger]');
          const p = i.querySelector('[data-accordion-panel]');
          if (t && p) {
            t.setAttribute('aria-expanded', 'false');
            p.setAttribute('hidden', '');
            p.style.maxHeight = '0';
            i.classList.remove('is-open');
          }
        });

        // Open this one if it was closed
        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          panel.removeAttribute('hidden');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          item.classList.add('is-open');
        }
      });

      // Init state
      panel.setAttribute('hidden', '');
      panel.style.maxHeight = '0';
      panel.style.overflow = 'hidden';
      panel.style.transition = 'max-height 0.35s cubic-bezier(0.23, 1, 0.32, 1)';
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccordion);
```

### HTML Pattern

```html
<div data-accordion>
  <div data-accordion-item>
    <button
      data-accordion-trigger
      aria-expanded="false"
      aria-controls="faq-1-panel"
      id="faq-1-trigger"
      class="accordion__trigger"
    >
      <span class="accordion__question">How big is the PixelMixers team?</span>
      <span class="accordion__icon" aria-hidden="true">+</span>
    </button>
    <div
      data-accordion-panel
      id="faq-1-panel"
      role="region"
      aria-labelledby="faq-1-trigger"
      class="accordion__panel"
    >
      <div class="accordion__body">
        <p>We're four people. ...</p>
      </div>
    </div>
  </div>
</div>
```

### Accordion CSS

```css
.accordion__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-5) 0;
  background: none;
  border: none;
  border-bottom: 1px solid var(--color-smoke);
  cursor: pointer;
  text-align: left;
}
.accordion__question {
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--text-primary);
}
.accordion__icon {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 300;
  color: var(--color-violet);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}
[data-accordion-item].is-open .accordion__icon {
  transform: rotate(45deg);
}
.accordion__body {
  padding: var(--space-4) 0 var(--space-6);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}
```

---

## PART 11 — CONTENT TONE & COPY GUIDELINES

### 11.1 Voice

PixelMixers copy is:
- **Direct** — short sentences, active voice, no fluff
- **Confident without arrogance** — state opinions clearly, but never condescend
- **Playful in the right moments** — a well-placed wry observation, never forced humor
- **Specific over vague** — "40% more enquiries" beats "significantly improved performance"
- **Human** — we write like a smart friend talking to another smart friend

### 11.2 What to avoid

- Never say "cutting-edge", "world-class", "next-level", "game-changing", "leverage", "synergy"
- Never use passive voice where active is possible
- Never write more than three sentences without a break or a heading
- Never open a paragraph with "We are..." — show, don't announce
- No exclamation marks in body copy (CTAs only, sparingly)

### 11.3 Headlines

Headlines should do one of three things:
1. Make a strong claim: "We mix pixels into magic."
2. Name the tension: "Not just websites. Experiences worth remembering."
3. Issue an invitation: "Have a seat. Tell us everything."

### 11.4 CTAs

CTA copy should feel like a natural next step, not a sales push. Examples:
- "Have a seat →" (homepage, final CTA)
- "Start a conversation →" (studio page)
- "See our work →" (hero)
- "Send it →" (contact form submit)
- "Read all articles →" (lab teaser)
- "View project →" (portfolio cards)

Never: "Click here", "Submit", "Learn more" (as a primary CTA), "Buy now"

---

## PART 12 — IMPLEMENTATION NOTES

### 12.1 Favicon

Create `/assets/images/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect x="2"  y="2"  width="18" height="18" rx="5" fill="#6B3FE7"/>
  <rect x="12" y="12" width="18" height="18" rx="5" fill="#FF6B35" opacity="0.9"/>
</svg>
```

### 12.2 404 Page

Create `404.html` at root level:
```
Heading: "404 — Nothing here."
Body: "This page doesn't exist, or you took a wrong turn. Either way, let's get you somewhere useful."
Links: [Home] [Our Work] [Contact]
```
Style consistent with the main site, same nav and footer.

### 12.3 Marquee / Ticker Implementation

```css
.ticker-strip {
  overflow: hidden;
  background: var(--color-paper);
  padding: var(--space-3) 0;
  border-top: 1px solid var(--color-smoke);
  border-bottom: 1px solid var(--color-smoke);
}
.ticker-track {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}
.ticker-track:hover { animation-play-state: paused; }
.ticker-item {
  white-space: nowrap;
  padding: 0 var(--space-8);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dust);
}
.ticker-separator {
  color: var(--color-violet);
  padding: 0 var(--space-2);
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

```html
<!-- Duplicate the items so the loop is seamless -->
<div class="ticker-strip" aria-hidden="true">
  <div class="ticker-track">
    <span class="ticker-item">Web Design</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">Web Development</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">E-Commerce</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">Branding</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">Web Apps</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">Digital Artforms</span>
    <span class="ticker-separator">·</span>
    <!-- Duplicate for seamless loop -->
    <span class="ticker-item">Web Design</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">Web Development</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">E-Commerce</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">Branding</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">Web Apps</span>
    <span class="ticker-separator">·</span>
    <span class="ticker-item">Digital Artforms</span>
    <span class="ticker-separator">·</span>
  </div>
</div>
```

### 12.4 Portfolio Filter JavaScript

```javascript
// In assets/js/pages/work.js
function initPortfolioFilter() {
  const filters = document.querySelectorAll('[data-filter-btn]');
  const cards = document.querySelectorAll('[data-filter-item]');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.filterBtn;

      // Update active state
      filters.forEach(f => f.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Filter cards
      cards.forEach(card => {
        const tier = card.dataset.filterItem;
        const show = target === 'all' || tier === target;
        card.style.opacity = show ? '1' : '0.25';
        card.style.pointerEvents = show ? 'auto' : 'none';
        card.style.transform = show ? 'none' : 'scale(0.97)';
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initPortfolioFilter);
```

Add `data-filter-item="starter"` (or business/premium/artform) to each portfolio card.
Add `data-filter-btn="all"` etc. to filter buttons.

### 12.5 Testimonial Auto-Advance

```javascript
// In assets/js/pages/home.js
function initTestimonialCarousel() {
  const items = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.testimonial-dot');
  let current = 0;
  let timer;

  function show(index) {
    items.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
      item.setAttribute('aria-hidden', String(i !== index));
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    current = index;
  }

  function advance() {
    show((current + 1) % items.length);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      show(i);
      timer = setInterval(advance, 6000);
    });
  });

  timer = setInterval(advance, 6000);
  show(0);
}

document.addEventListener('DOMContentLoaded', initTestimonialCarousel);
```

---

## PART 13 — ACCESSIBILITY CHECKLIST

Before considering the build complete, verify:

- [ ] All images have meaningful `alt` text or empty `alt=""` for decorative images
- [ ] All interactive elements are keyboard-focusable with visible focus rings
- [ ] Focus rings use `outline: 3px solid var(--color-violet); outline-offset: 3px;`
- [ ] Color contrast: all text/background combinations meet WCAG AA (4.5:1 normal text, 3:1 large text)
- [ ] `aria-label` on all icon-only buttons and links
- [ ] `aria-current="page"` on active navigation links
- [ ] `aria-expanded` and `aria-controls` on accordion and mobile nav toggles
- [ ] `aria-hidden="true"` on all decorative SVGs, icons, and glow ellipses
- [ ] `role="list"` on `<ul>` elements where CSS resets `list-style`
- [ ] Skip-to-content link present and functional
- [ ] Form inputs have associated `<label>` elements (not placeholder-only)
- [ ] Form error states are announced to screen readers (`aria-describedby` + `role="alert"`)
- [ ] Carousel has pause controls and is keyboard navigable
- [ ] All motion respects `prefers-reduced-motion` media query
- [ ] Page language set via `<html lang="en">`
- [ ] Heading hierarchy is logical (one `<h1>` per page, no skipped levels)
- [ ] Tab order is logical and follows visual order

---

## PART 14 — DELIVERY CHECKLIST

When the build is complete, verify:

- [ ] All 12 pages (+ 404) exist and render correctly
- [ ] All internal links resolve (no 404s within the site)
- [ ] Navigation works on all pages with correct active state
- [ ] Mobile navigation opens/closes correctly
- [ ] CTA banner appears on all pages
- [ ] Footer appears on all pages with correct year
- [ ] Carousel functional on homepage and work page
- [ ] FAQ accordion functional
- [ ] Portfolio filter functional
- [ ] Testimonial auto-advance functional
- [ ] Custom cursor visible on desktop (pointer devices)
- [ ] Scroll-reveal animations trigger correctly
- [ ] Glow ellipses visible and animating
- [ ] Ticker/marquee running
- [ ] All forms have labels; submit button present
- [ ] `<html lang>`, `<title>`, and `<meta name="description">` unique per page
- [ ] Structured data present on homepage, project pages, team pages, and lab posts
- [ ] sitemap.xml present at root
- [ ] favicon.svg present and linked
- [ ] CSS custom properties defined in tokens.css
- [ ] Fonts loading from Google Fonts
- [ ] `prefers-reduced-motion` rule in reset.css
- [ ] Lighthouse score: Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 95
- [ ] No JavaScript errors in console on any page
- [ ] Site renders at 320px viewport width without horizontal scroll

---

*End of PixelMixers Website Build Prompt.*
*This document is self-contained. Build from it without requiring additional context.*
*Version: 1.0 · For: PixelMixers website development*
