# Anima.ai - Complete Visual & Technical Analysis

## 1. TECHNOLOGY STACK

- **CMS**: WordPress with Sage (Roots) theme framework
- **Theme**: "Beaucoup" (custom theme, v1.0.1)
- **CSS Framework**: Tailwind CSS v4 (with `@import 'tailwindcss'`)
- **Templating**: Laravel Blade (`.blade.php`)
- **Build**: Webpack (via Sage/Bud)
- **Animation**: GSAP (GreenSock) with ScrollTrigger, CustomEase
- **Smooth Scroll**: Lenis
- **Text Splitting**: Splitting.js (custom 'linesChars' and 'wrappedLines' modes)
- **Page Transitions**: @unseenco/taxi (SPA-like transitions)
- **Lazy Loading**: vanilla-lazyload
- **Cookie Consent**: Tarteaucitron
- **Analytics**: Google Analytics (G-RG7P1V2YWQ)

---

## 2. FONTS

Three font families, all self-hosted (woff2/woff):

### Parabole (Headings)
- `font-family: Parabole, sans-serif`
- Weight: normal (400)
- Style: normal
- Files: `Parabole.woff2`, `Parabole.woff`
- Tailwind alias: `font-heading`

### Helvetica Neue (Body)
- `font-family: 'Helvetica Neue', sans-serif`
- Weights: 300 (Light), 700 (Bold)
- Styles: normal, italic (for both weights)
- Files: `HelveticaNeue-Light.woff2`, `HelveticaNeue-Bold.woff2`, etc.
- Tailwind alias: `font-body`

### Martian Mono (Monospace/Labels)
- `font-family: 'Martian Mono', monospace`
- Weight: normal (400)
- Style: normal
- Files: `MartianMono-Regular.woff2`, `MartianMono-Regular.woff`
- Tailwind alias: `font-monospace`

---

## 3. TYPOGRAPHY SCALE (Tailwind Component Classes)

All sizes use a base of `font-size: calc(10 * (100vw / var(--size)))` on `<html>`, making `1rem = 10px` at the design width. The `--size` variable changes per breakpoint.

### Heading Classes (font: Parabole)
| Class | Size | Letter-spacing | Line-height |
|---|---|---|---|
| `.heading-512` | 51.2rem | -10px | default (1.3) |
| `.heading-400` | 40rem | -10px | default |
| `.heading-150` | 15rem | -1px | 113% |
| `.heading-128` | 12.8rem | -10px | default |
| `.heading-64` | 6.4rem | -1px | none (1) |
| `.heading-60` | 6rem | -5px | 113% |
| `.heading-48` | 4.8rem | -2px | 113% |
| `.heading-40` | 4rem | -2px | none |
| `.heading-32` | 3.2rem | -1px | none |
| `.heading-24` | 2.4rem | -2px | none |

### Body Classes (font: Helvetica Neue Light 300)
| Class | Size | Letter-spacing | Line-height |
|---|---|---|---|
| `.body-28` | 2.8rem | -1px | 120% |
| `.body-20` | 2rem | default | default |
| `.body-18` | 1.8rem | -0.5px | default |
| `.body-16` | 1.6rem | default | 125% |
| `.body-14` | 1.4rem | default | default |

### Monospace Class (font: Martian Mono)
| Class | Size | Notes |
|---|---|---|
| `.monospace-10` | 1rem | uppercase |

---

## 4. COLOR PALETTE

CSS custom properties defined as RGB triplets in `:root`:

| Variable | RGB | Hex | Usage |
|---|---|---|---|
| `--color-beige` | 244 215 172 | #f4d7ac | Accent |
| `--color-black` | 2 2 2 | #020202 | Text, primary |
| `--color-blue` | 0 0 255 | #0000ff | Accent |
| `--color-grid` | 240 240 240 | #f0f0f0 | Grid lines |
| `--color-light-gray` | 189 201 202 | #bdc9ca | Subtle elements |
| `--color-light-green` | 218 228 175 | #dae4af | Scrollbar, cookie accept |
| `--color-light-yellow` | 245 248 184 | #f5f8b8 | Decorative blurs |
| `--color-lavender` | 200 192 222 | #c8c0de | Decorative blurs |
| `--color-pink` | 255 226 255 | #ffe2ff | Decorative blurs |
| `--color-orange` | 255 198 135 | #ffc687 | Cookie deny state |
| `--color-peach` | 248 212 199 | #f8d4c7 | Accent |
| `--color-sage` | 193 205 190 | #c1cdbe | Decorative blurs |
| `--color-very-light-gray` | 221 222 222 | #dddede | Borders |
| `--color-white` | 255 255 255 | #ffffff | Backgrounds |

**Background**: `#f5f6f6` (body)
**Text**: `#020202` (near-black)
**Form borders**: `#e6e6e6`

Usage in Tailwind: `rgb(var(--color-[name]) / <alpha-value>)` enabling opacity modifiers.

---

## 5. LAYOUT SYSTEM

### Grid
- **24-column grid** system
- Column width: `calc((100vw - padding-container * 2 - (1rem * 23)) / 24)`
- Grid gap: `1rem` (the `grid` spacing token)
- Container padding: `var(--padding-container)` = `2rem`

### Responsive Breakpoints
| Name | Width |
|---|---|
| sm | 375px |
| md | 768px |
| lg | 1024px |
| xl | 1200px |
| 2xl | 1440px |
| hd | 1920px |
| 2k | 2560px |

### Base Font Size Scaling
The `--size` variable controls fluid typography:
- Mobile (default): `--size: 375`
- md: `--size: 768`
- lg: `--size: 1024`
- xl: `--size: 1440`

Formula: `html { font-size: calc(10 * (100vw / var(--size))); }` 
This means at 1440px viewport, 1rem = 10px. At 375px viewport, 1rem = 10px. The scaling is fluid between breakpoints.

### Spacing Scale (Tailwind)
| Token | Value |
|---|---|
| 0 | 0 |
| 5 | 0.5rem |
| 10 | 1rem |
| 20 | 2rem |
| 30 | 3rem |
| 50 | 5rem |
| 60 | 6rem |
| 70 | 7rem |
| 75 | 7.5rem |
| 80 | 8rem |
| 100 | 10rem |
| 150 | 15rem |
| 200 | 20rem |
| px | 1px |
| grid | 1rem |
| container | var(--padding-container) |

### Border Radius Scale
| Token | Value |
|---|---|
| 5 | 0.5rem |
| 10 | 1rem |
| 15 | 1.5rem |
| full | 100% |

### Z-Index Scale
| Token | Value |
|---|---|
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| loader | 10 |
| header | 15 |
| popup | 20 |

---

## 6. NAVIGATION STRUCTURE

### Header Elements
- **Logo**: SVG logotype (`.header__logotype`), links to home
- **Menu toggler**: `.header__toggler` - pill-shaped button with text "MENU" / "CLOSE"
- **Navigation links**: `.header__link` elements with underscore prefix: `_The studio`, `_The team`, `_Our ventures`, `_Out of the Lab`, `_Job board`
- **Contact button**: Separate button linking to `/contact/`
- **Corner lines**: `.header__corner-lines` with `.corner-lines__top-right` decorative element
- **Language switcher**: `.language-switcher-desktop` and `.language-switcher-mobile`
- **Background layers**: `.header__background` (multiple, used for menu open animation)

### Header Behavior
- Fixed position with `z-index: 15` (header token)
- Sets `--header-height` CSS variable dynamically
- Mobile threshold: `1024px`
- Menu open animation: backgrounds scale from 0 to full with `expo.out` / `expo.inOut` easing
- Links animate in with staggered character shuffle effect
- On hover: character shuffle animation on each link
- Toggler hover: text shuffle animation
- Menu close on Escape key
- Body gets `no-scroll` class when menu open: `overflow: hidden; touch-action: none`

### Navigation Links
```
_The studio    -> /the-studio/
_The team      -> /the-team/
_Our ventures  -> /our-ventures/
_Out of the Lab -> /out-of-the-lab/
_Job board     -> [Notion URL]
Contact        -> /contact/
```

---

## 7. BUTTON STYLING

### Button Component Structure
Buttons use this DOM structure:
```
.button
  .corner-lines (4 corner decorations)
  .button__text-background
  .button__text (text content, split into .char spans)
  .button__icon-background
  .button__icon (the "+" icon)
```

### Button Animations
- **Entrance**: Text background scales from `scaleX: 0, scaleY: 0.5` (origin left) to full
- **Text**: Characters appear via shuffle effect (random chars cycling)
- **Icon**: Fades in with `back.out(4)` easing, icon background animates with -1rem horizontal offset
- **Hover**: Elements translate horizontally based on `data-translateOrigin` (center/left/default)
- **Corner lines**: Animate with directional displacement on hover
- **Easing**: `expo.out`, `back.out(4)`, custom `beaucoup.alpha` (.25, .46, .45, .9)
- **ScrollTrigger**: Plays at `top 75%` viewport position

---

## 8. SECTION LABELS

Format: `001/ About`, `002/ Mission`, `003/ Services`

- Number uses monospace font (Martian Mono, `.monospace-10` = 1rem, uppercase)
- Slash separator
- Title text
- Animated with "surtitle" effect: color transition + character shuffle

---

## 9. DECORATIVE ELEMENTS (Blurred Ellipses)

### Image Assets (all `.webp` format)
Located at `/wp-content/themes/beaucoup/resources/images/`:

1. **`lavender-blurred-ellipse-background.webp`**
   - Color: Soft lavender/purple (#c8c0de area)
   - Position: Bottom of frame, fading to white at top
   - Large soft gradient blob

2. **`light-yellow-blurred-ellipse-background-corner-vertical.webp`**
   - Color: Pale warm yellow (#f5f8b8 area)
   - Position: Bottom-left corner orientation, vertical format
   - Fades to white

3. **`light-yellow-blurred-ellipse-background-corner-horizontal.webp`**
   - Same yellow, horizontal orientation

4. **`light-yellow-blurred-ellipse-background-left.webp`**
   - Yellow glow positioned at left

5. **`light-yellow-blurred-ellipse-background-right.webp`**
   - Yellow glow positioned at right

6. **`pink-blurred-ellipse-background-bottom.webp`**
   - Color: Very soft pink (#ffe2ff area)
   - Position: Bottom center, fading to white at top
   - Translucent pastel glow

7. **`sage-blurred-ellipse-background-right.webp`**
   - Color: Muted sage green (#c1cdbe area)
   - Position: Top-right corner
   - Soft diffused blob

These are pre-rendered image files (not CSS-generated), approximately 100-115KB each. They are positioned absolutely within their section containers and create the soft, atmospheric background effect characteristic of the site.

### Gooey Filter Effect
The site also uses SVG filters for a "gooey" blob effect:
- `#tiny-gooey` (mobile)
- `#high-gooey` (desktop, xl+)
- Applied via `.filter-high-gooey` and `.filter-low-gooey` classes
- Safari excluded from this effect

---

## 10. ANIMATIONS & TRANSITIONS

### GSAP Configuration
- **Default ease**: Custom `beaucoup.alpha` = `cubic-bezier(.25, .46, .45, .9)`
- **CustomEase registered**: `'beaucoup.alpha'`

### CSS Easing Variables
```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in: cubic-bezier(0.12, 0, 0.39, 0);
--ease-in-out: cubic-bezier(0.86, 0, 0.07, 1);
--ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Effect: Paragraph
- Slide-up entrance
- `yPercent: 100` to `0`
- Duration: 1.2s, stagger: 0.075s
- Easing: `expo.out`, timeScale: 1.25

### Effect: Shuffle (Character Scramble)
- Randomly replaces characters from a set of 41 chars (a-z + symbols)
- Duration: 0.04s per character
- Repeat: 3 times, repeatDelay: 0.04s
- Stagger: 0.05s between characters

### Effect: Surtitle
- Color transition + shuffle combined
- Staggered color restoration with `beaucoup.alpha` easing

### Effect: Title (3D Entrance)
- Initial: `alpha: 0, rotateX: -50, rotateY: -40`
- Offset: 1.5rem (mobile) / 2.5rem (desktop)
- Two phases: alpha fade then 3D transform
- timeScale: 1.25

### Parallax Media
- Vertical parallax on scroll (scrub)
- Offset: `elementHeight / 7 * min(viewportWidth, 1440) / 1440`
- Disabled on mobile
- Linear easing (no ease)

### Manifesto Parallax
- Title moves from `yPercent: -30` to `+30` on scroll
- Scrub linked to scroll position

### Marquee
- Infinite horizontal scroll animation
- Speed: 120px per unit
- CSS: `animation: marquee var(--marquee-duration) linear infinite`
- `@keyframes marquee { 0% { translate3d(0,0,0) } 100% { translate3d(var(--marquee-distance),0,0) } }`

### Testimonies Carousel
- Quote entrance: `rotateX: -20, rotateY: -15`, offset 3.5rem
- Word stagger: 0.05s
- Duration: 1.6s, easing: `expo.out`
- Fade out: 0.4s, `beaucoup.alpha`

### Loader (Page Load)
- Grid of cells (3 columns x 4 rows) with staggered reveal
- Counter with character flicker: 0.04s per char, 3 repeats
- Loading bar: `scaleX 0->1`, 1.2s, `expo.out`
- Text scramble effect on "loading" text
- Exit: 1.2s fade, header alpha 0->1

### Page Transitions (@unseenco/taxi)
- SPA-style transitions between pages
- Loader grid cells show/hide sequence
- Timeline timeScale: 1.5x
- Preserves parallax state between pages

### Smooth Scroll (Lenis)
- Custom scrollbar: 0.5rem width
- Thumb: light-green color
- Track: white
- `scroll-behavior: auto !important` (overrides native smooth scroll)

### Noise Texture
- Background image: `/images/noise.webp`
- Animation: `grain 10s steps(10) infinite`
- Translates noise texture in 10 keyframe positions

---

## 11. COVER / HERO SECTIONS

### Canvas-Based Interactive Cover
- Loads a sequence of frames (`.webp` format)
- Frame displayed based on mouse distance from center
- Parallax tags move with cursor at different rates: [0.015, 0.025, 0.05]
- Mobile: loads single final frame
- Movement intensity: 0.05
- Entrance: staggered tag reveals with `expo.out`

### Full-Screen Cover
- `h-screen` class for viewport height
- Mobile: uses JS-calculated height (`store.w.h`)

---

## 12. VENTURE CARDS

### Interactive Carousel (Desktop)
- Stacked card layout with depth (z-index layering)
- Active card: full scale
- Inactive cards: `scale: max(0.6)`, `y: max(8rem)` offset
- Mouse drag interaction
- Force multiplier: 3
- On venture change: title shuffle animation, excerpt slide up (`yPercent: 100->0`)
- Button appears with background scale + text shuffle + icon fade

### Card Structure
```
.our-ventures__card
  .image (with img)
  .our-ventures__overlay
.our-ventures__content
  .our-ventures__title
  .our-ventures__excerpt
  .our-ventures__button
  .our-ventures__counter
```

### Mobile (< 1024px)
- Horizontal scroll with `translateX`
- Snap to closest card on scroll stop

---

## 13. TEAM CARDS

### Structure
Similar to venture cards:
```
team-card container
  .button
    .button__text-background
    .button__text (name)
    .button__icon-background
    .button__icon (+)
  image (photo)
```

### Interaction
- Custom cursor follows mouse over card (FollowMouse utility)
- Button show/hide on hover with same animation as venture cards
- Image dimensions: 480px wide, various heights (562-719px)

---

## 14. SERVICES SECTION

### Structure
```
.our-services__services (container)
  .our-services__service (individual service items)
  .our-services__card (detail cards, one per service)
```

### Interaction
- Desktop hover: all services fade to `opacity: 5%` except hovered one
- Corresponding card shown/hidden via `opacity-0` class toggle
- Transition: `opacity 600ms var(--ease-out)`
- Listed services: Corporate strategy, Marketing & communication, Finance and fundraising, Business Development, Product Design, Legal Structuration, Human Resources, Impact, AI & Tech

---

## 15. FOOTER

### Structure
```
footer
  canvas (interactive frame sequence)
  .footer__button (main CTA - "Contact us" or similar)
  .footer__cursor (custom cursor element)
  .footer__credits (studio credits)
  .corner-lines__bottom-left (decorative)
```

### Behavior
- Canvas renders frame sequence based on mouse distance from button center
- Custom cursor follows mouse within footer
- Cursor position updated via `lerp` smoothing
- Button hover: shuffle text animation
- Credits hover: corner line animates, text shuffles in
- Frame count loaded from `data-framesCount` attribute
- Frame directory from `data-framesDirectoryUri`

### Footer Links
- Contact us
- FAQ
- Job board
- Beaucoup Credits
- Legals
- LinkedIn

---

## 16. FORM STYLING

### Input Fields
- Full width
- Padding: `1rem` horizontal, `2rem` vertical
- Font: Martian Mono (monospace-10), uppercase
- Border: top and bottom `1px solid #e6e6e6`
- Side borders via pseudo-elements (`::before`/`::after`): `1px solid #e6e6e6`, height `1rem`
- No outline, no resize, no appearance
- Placeholder: black, uppercase
- Focus placeholder: `black/25` (25% opacity)
- Invalid placeholder: red, uppercase

### Textarea
- Height: 15rem

### Checkboxes/Radios
- Size: 1rem x 1rem
- Border: 1px solid #e6e6e6
- Checked: background #e6e6e6
- Radio: `border-radius: 100%`

### Submit
- Margin-top: 3rem

---

## 17. COOKIE CONSENT (Tarteaucitron)

### Alert Banner
- Position: bottom-left, offset by `--padding-container`
- Width: `100vw - padding*2` (mobile), `35rem` (md), `6 columns + 5 gaps` (xl)
- Background: `rgba(0 0 0 / 25%)` with `backdrop-filter: blur(50px)`
- Border-radius: 1.5rem
- Padding: 2rem
- Text: Helvetica Neue, 1.4rem, white
- Buttons: Martian Mono, 1rem, uppercase, white, transparent bg
- Hover: opacity 0.3

### Settings Panel
- Border-radius: 1.5rem
- Mobile: full viewport minus padding
- Desktop (xl): 50vw wide, 80vh tall, centered
- Title font: Parabole, 4rem, letter-spacing -2px
- Active allow state: #dae4af background
- Active deny state: #ffc687 background
- Button border-radius: 1rem
- Button padding: 1rem 2rem

---

## 18. BODY & GLOBAL STYLES

```css
body:not(.wp-admin) {
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  background-color: #f5f6f6;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: calc(10 * (100vw / var(--size)));
  line-height: 1.3;
}
```

### Content Container
```css
.container {
  padding-left: var(--px-container);
  padding-right: var(--px-container);
}
```

### Content Width
- `.content { width: 100vw; }`
- At xl+: `padding-right: 0.5rem` (for scrollbar)

### WYSIWYG Content
- Links: bold, underlined with gradient background
- Paragraph spacing: 20px between consecutive p/ul/table
- Lists: dash style (`'-'`)
- List items: left padding `var(--pl-grid)`, bottom margin `var(--mb-grid)`
- Tables: 1px solid black borders, 5px/10px padding

---

## 19. PAGE STRUCTURE BY PAGE

### Homepage (/)
1. Loader overlay (grid animation)
2. Header/Nav (fixed)
3. Hero cover with canvas + tags ("Growing nature-inspired companies")
4. Sub-tags: "Technology's boundless potential", "Nature's timeless experience", "Humanity's drive for innovation"
5. 001/ About - "We are your partner"
6. 002/ Mission - "How we work" (Spot / Build / Scale)
7. 003/ The Studio - "Who we work with" (Startups / Researchers / Corporates)
8. 004/ Ventures carousel (8 ventures)
9. Out of the Lab Award banner (50k€)
10. 006/ Team (Sandra Rey, Florence Durillon, Alexandre Cadain)
11. 007/ Testimonies (Kalina Raskin, Eliot Graeff, Marie Perrin)
12. Footer with canvas

### The Studio (/the-studio/)
1. Banner: Out of the Lab Award CTA
2. Hero: "The studio"
3. Intro paragraph about co-founding ventures
4. 001/ About - "Scaling bioinspired ideas for a better future"
5. 002/ Mission - "We are the team mates you have been missing" (Operating / Strategic / Funding partner)
6. 003/ Services (9 services listed)
7. Footer

### The Team (/the-team/)
1. Hero: "The team"
2. "What if we could solve our planet's problems with nature-inspired strategies?"
3. 001/ Manifesto (parallax scroll text)
4. Meet our team section
5. 9 team members: Sandra Rey (CEO), Florence Durillon (COO), Alexandre Cadain (Chairman), Cassandra Delage (CRO/Venture Partner), Tom Bonin (Investment Partner), Nicolas Sironneau (Business Strategy), Alex De Las Heras (Brand Strategist), Clara Hevia Aranguren (Art Director), Jules Zimmermann (Methodology)
6. Footer

### Our Ventures (/our-ventures/)
1. Hero: "Our ventures" + "Growing nature-inspired ventures"
2. 001/ Our Scope - "A cross-industry approach"
3. Venture cards:
   - Asteria (IA)
   - MIS (STEALTH)
   - MYC (unlabeled)
   - REEcover (OUT OF THE LAB WINNER)
   - Xatoms (OUT OF THE LAB LAUREATE)
   - Nanoscale Labs (OUT OF THE LAB LAUREATE)
   - Melwear (OUT OF THE LAB LAUREATE)
   - ArtSilk (OUT OF THE LAB LAUREATE)
4. Footer

### Out of the Lab (/out-of-the-lab/)
1. Hero: "Ready to win 50k€ to get your research into the world?"
2. 001/ The Award
3. 002/ The Prize (€15k + €35k breakdown)
4. Timeline: March 10 - April 30, 2026 (applications), June 2026 (top 5), July 2026 (winner)
5. Eligibility: TRL 3-5, bioinspired, international
6. 2025 Laureates: REEcover, Nanoscale Labs, ArtSilk, Melwear, Xatoms
7. "APPLY HERE" CTAs
8. Footer

---

## 20. IMAGE SPECIFICATIONS

### Team Photos
- Width: 480px (thumbnail)
- Heights vary: 562px, 637px, 660px, 679px, 719px
- Format: JPEG

### Venture Images
- Width: 480px (thumbnail)
- Heights vary: 262-481px
- Format: JPEG

### Hero/Cover Images
- Full resolution: 2160x2160px
- Format: JPEG

### OG Image
- 1200x628px

### Decorative Blurs
- Format: WebP
- Size: ~75-115KB each

---

## 21. VISUAL RHYTHM SUMMARY

- **Section spacing**: Large (using spacing tokens 50-100 = 5-10rem)
- **Container padding**: 2rem on all sides
- **Grid gap**: 1rem between columns
- **Typography density**: Sparse - large headings (Parabole) with generous negative letter-spacing create airy feel
- **Body text weight**: Light (300) Helvetica Neue creates minimal visual weight
- **Background**: Near-white (#f5f6f6) with soft pastel blob decorations
- **Color approach**: Minimal - almost entirely black text on light background, with pastel decorative elements only
- **Interactive density**: Rich hover states (shuffle text, cursor following, parallax) but minimal visual clutter
- **Image treatment**: Full-bleed within containers, parallax scroll effect (7:1 ratio), lazy loaded with 300ms opacity transition
- **Aspect ratios**: Images use CSS custom property `--ratio` for responsive aspect ratios via padding-top hack

---

## 22. KEY CSS UTILITY CLASSES

```css
.grid-w       /* 24-column grid with gaps and container padding */
.absolute-full /* position: absolute; inset: 0 */
.absolute-center /* absolute + translate(-50%, -50%) centering */
.nsb          /* hide scrollbars cross-browser */
.translate-cursor /* transform using --cursor-x/--cursor-y variables */
.no-scroll    /* overflow: hidden; touch-action: none */
.h-screen     /* viewport height */
.parallax-media /* overflow: hidden */
.animated-title /* perspective: 55rem */
```
