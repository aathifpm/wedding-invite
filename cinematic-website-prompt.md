# CINEMATIC WEBSITE — FULL CREATION PROMPT
## Creative Direction + Technical Implementation

---

## I. INTENT & EXPERIENCE PHILOSOPHY

Create a premium cinematic website experience that feels emotionally designed rather than conventionally built.

The website should not feel like a typical modern template, startup landing page, or overly polished corporate UI. Avoid generic section-based layouts, excessive clutter, bright gradients, trendy glassmorphism overload, or aggressive futuristic aesthetics.

The overall experience should feel:

- Atmospheric
- Cinematic
- Calm and immersive
- Luxurious through restraint
- Emotionally warm
- Spatial rather than flat
- Timeless instead of trendy

The design language should combine:

- Luxury editorial minimalism
- Calm ambient interfaces
- Architectural elegance
- Cinematic pacing
- Subtle heritage-inspired aesthetics
- Emotionally intelligent UI behavior

The website should feel less like "a webpage" and more like **entering a carefully directed digital environment.**

---

## II. VISUAL DIRECTION

**Use:**
- Warm neutral palettes — soft ivory, sandstone, charcoal, muted gold, deep earthy tones
- Subtle gradients, not harsh transitions
- Soft ambient lighting with realistic shadows
- Refined textures: paper grain, linen, stone
- Atmospheric depth and layering

**Avoid:**
- Oversaturated or neon colors
- Hard contrast edges
- Overly glossy or glassy UI
- Generic startup visuals
- Loud modern trends

The interface should feel handcrafted and cinematic.

---

## III. SPATIAL DESIGN & LAYERING

The website should feel layered and dimensional. Create:

- **Foreground:** Atmospheric particles, grain overlay, subtle vignette
- **Midground:** Primary content — typography, imagery, interactive elements
- **Background:** Architectural silhouettes, slow ambient gradients, depth blur

Use subtle parallax and environmental movement to create spatial immersion. The page should never feel visually flat.

Sections should not feel disconnected or boxed. The entire experience should feel like **one continuous environment** — a single flowing space the user moves through.

---

## IV. ATMOSPHERIC CONTINUITY

Maintain persistent environmental elements throughout:

- Soft moving ambient light
- Slowly drifting dust particles or floating grain
- Subtle shadow movement on surfaces
- Ambient gradients that shift as the user scrolls
- Gentle motion overlays that persist across sections

The website should always feel **quietly alive.**
Motion should feel natural and cinematic, never mechanical.

---

## V. LOADING EXPERIENCE

The loading experience should feel intentional and emotionally immersive.

**Avoid:**
- Progress bars
- Tech-style spinners
- Initializing system aesthetics

**Create instead:**
- Atmospheric reveals — light softly expanding
- Calm typography emerging from darkness or mist
- Cinematic pacing with intentional silence and breath
- A seamless spatial transition into the main environment as if the world itself is unfolding

The transition from loading to the site should be invisible — not a screen swap, but an environment awakening.

---

## VI. TYPOGRAPHY

Typography is one of the strongest design elements.

**Use:**
- Elegant editorial serif as the primary display font (e.g., Cormorant Garamond, Playfair Display, EB Garamond, or similar)
- Clean minimal sans-serif as secondary support (e.g., Jost, DM Sans, or a refined geometric)
- Strong typographic hierarchy with generous line-height and letter-spacing
- Cinematic alignment — avoid tight or crowded compositions
- Staggered text reveals on scroll — character, word, or line-level animation

**Text should feel:** intentional, breathable, emotionally weighted.

Avoid overcrowded centered layouts. Balance centered display text with asymmetric editorial body alignment.

---

## VII. ANIMATION STYLE

Animations should feel: **soft, patient, cinematic, physically believable.**

**Use:**
- Blur-to-focus reveals on scroll
- Slow fades with long easing curves (cubic-bezier 0.25, 0.1, 0.25, 1 or custom)
- Layered motion with staggered delays
- Ambient parallax — layers moving at different scroll speeds
- Environmental transitions — sections blending, not cutting

**Avoid:**
- Aggressive or flashy effects
- Mechanical bouncing or spring physics
- Overdone 3D perspective transforms
- Any motion that draws attention to itself

Motion enhances atmosphere. It should be felt, not watched.

---

## VIII. INTERACTION DESIGN

Interactions should feel **tactile and refined.**

Hover states should resemble:
- Touching embossed paper
- Moving through diffused light
- Interacting with layered, weighted materials

Use subtle:
- Depth shifts on hover
- Shadow softening and glow transitions
- Texture response — grain or surface feeling alive
- Atmospheric micro-reactions (light warming, edge glows)

Custom cursor recommended — a soft dot or ring that reacts to context. Micro-interactions must feel emotionally intelligent and understated.

---

## IX. PACING & RHYTHM

The website should breathe.

- Content reveals gradually — never all at once
- Scroll should feel smooth, weighted, and cinematic (use smooth scroll with momentum)
- Prioritize atmosphere, rhythm, anticipation, and emotional pacing
- The user should feel **guided through an experience,** not scrolling through sections

Use IntersectionObserver for scroll-triggered reveals with appropriate threshold and rootMargin for cinematic timing.

---

## X. TECHNICAL IMPLEMENTATION — STACK & ARCHITECTURE

### Recommended Stack
- **HTML5 + CSS3 + Vanilla JS** for maximum performance with no framework overhead, OR
- **React + Vite** if component architecture or dynamic data is needed
- **GSAP (GreenSock)** for cinematic scroll and timeline animations
- **Lenis or Locomotive Scroll** for smooth, weighted, cinematic scroll feel
- **CSS Custom Properties** throughout — no hardcoded values

### File & Code Structure
```
/
├── index.html
├── /css
│   ├── reset.css         — normalize cross-browser
│   ├── tokens.css        — design tokens (colors, spacing, type scale)
│   ├── base.css          — global styles, body, typography
│   ├── layout.css        — grid system, containers
│   ├── components.css    — UI components
│   ├── animations.css    — keyframes, transitions
│   └── utils.css         — helper classes
├── /js
│   ├── main.js           — init, scroll, loader
│   ├── animations.js     — GSAP timelines, ScrollTrigger
│   ├── particles.js      — ambient dust/particle system
│   └── cursor.js         — custom cursor logic
└── /assets
    ├── /fonts
    ├── /images           — WebP format, lazy-loaded
    └── /textures         — grain overlays, noise maps
```

---

## XI. TECHNICAL IMPLEMENTATION — CSS ARCHITECTURE

### Design Tokens (tokens.css)
```css
:root {
  /* Palette */
  --color-ivory:     #F5F0E8;
  --color-sandstone: #C8B89A;
  --color-charcoal:  #2C2A27;
  --color-earth:     #3D3530;
  --color-gold:      #A08050;
  --color-shadow:    rgba(28, 24, 20, 0.6);
  --color-mist:      rgba(245, 240, 232, 0.08);

  /* Typography */
  --font-display:    'Cormorant Garamond', Georgia, serif;
  --font-body:       'Jost', system-ui, sans-serif;

  /* Scale */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.25rem;
  --text-xl:   1.5rem;
  --text-2xl:  2rem;
  --text-3xl:  3rem;
  --text-4xl:  4.5rem;
  --text-hero: clamp(3.5rem, 8vw, 7rem);

  /* Spacing */
  --space-xs:  0.5rem;
  --space-sm:  1rem;
  --space-md:  2rem;
  --space-lg:  4rem;
  --space-xl:  8rem;
  --space-2xl: 14rem;

  /* Motion */
  --ease-cinema:  cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-reveal:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-ambient: cubic-bezier(0.45, 0.05, 0.55, 0.95);

  --dur-fast:   0.3s;
  --dur-mid:    0.7s;
  --dur-slow:   1.4s;
  --dur-cinematic: 2.2s;

  /* Layout */
  --container-max: 1280px;
  --container-narrow: 780px;
  --gutter: clamp(1.5rem, 5vw, 4rem);
}
```

### Grain Overlay (persistent texture)
```css
.grain-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background-image: url('/assets/textures/grain.png');
  background-repeat: repeat;
  opacity: 0.035;
  animation: grain-shift 0.8s steps(1) infinite;
}

@keyframes grain-shift {
  0%  { transform: translate(0, 0); }
  20% { transform: translate(-3%, -5%); }
  40% { transform: translate(5%, 3%); }
  60% { transform: translate(-2%, 6%); }
  80% { transform: translate(4%, -4%); }
}
```

### Smooth Scroll Setup
```css
html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  background-color: var(--color-charcoal);
  color: var(--color-ivory);
  font-family: var(--font-body);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## XII. TECHNICAL IMPLEMENTATION — JAVASCRIPT

### Cinematic Scroll (Lenis)
```javascript
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.6,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 0.85,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

### Cinematic Loader
```javascript
const loader = {
  init() {
    const tl = gsap.timeline({
      onComplete: () => {
        document.querySelector('.loader').style.display = 'none';
        this.revealEnvironment();
      }
    });

    tl.to('.loader__wordmark', {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 2,
      ease: 'power2.out'
    })
    .to('.loader', {
      opacity: 0,
      duration: 1.4,
      ease: 'power3.inOut',
      delay: 0.8
    });
  },

  revealEnvironment() {
    gsap.to('body', { backgroundColor: 'var(--color-charcoal)', duration: 0 });
    gsap.from('.hero__content', {
      opacity: 0,
      y: 30,
      duration: 1.8,
      ease: 'power3.out',
      stagger: 0.15,
    });
    gsap.from('.ambient-layer', {
      opacity: 0,
      duration: 3,
      ease: 'power2.out',
    });
  }
};
```

### Scroll-Triggered Reveals (GSAP ScrollTrigger)
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('[data-reveal]').forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, y: 40, filter: 'blur(6px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        toggleActions: 'play none none none',
      }
    }
  );
});
```

### Ambient Parallax
```javascript
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  gsap.to('.ambient-bg', {
    x: x * 12,
    y: y * 8,
    duration: 2.5,
    ease: 'power1.out'
  });

  gsap.to('.ambient-mid', {
    x: x * 6,
    y: y * 4,
    duration: 3,
    ease: 'power1.out'
  });
});
```

### Particle Dust System (Canvas)
```javascript
class DustSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.resize();
    this.populate(80);
    this.loop();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  populate(count) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: -Math.random() * 0.18 - 0.04,
        opacity: Math.random() * 0.25 + 0.05,
      });
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.y < -2) { p.y = this.canvas.height + 2; p.x = Math.random() * this.canvas.width; }
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(200, 184, 154, ${p.opacity})`;
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.loop());
  }
}

const dustCanvas = document.querySelector('.dust-canvas');
if (dustCanvas) new DustSystem(dustCanvas);
```

### Custom Cursor
```javascript
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out' });
  gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
});

document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
  el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
});
```

---

## XIII. PERFORMANCE & OPTIMIZATION

### Image Strategy
- Use **WebP** for all photography and textures
- Use **AVIF** where supported via `<picture>` element
- Lazy-load all images below the fold with `loading="lazy"` and `decoding="async"`
- Serve responsive images using `srcset` and `sizes`
- Hero image must be preloaded: `<link rel="preload" as="image">`

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- Use font-display: swap in @font-face declarations -->
```
Self-host fonts when possible using `@font-face` with `font-display: swap`.

### Animation Performance
- Animate only **transform** and **opacity** — never width, height, top, left
- Use `will-change: transform` only on actively animating elements, remove after animation
- Use `translateZ(0)` or `translate3d(0,0,0)` to promote layers only when needed
- Kill ScrollTrigger instances on component unmount (React) or page teardown
- Use `requestAnimationFrame` for all canvas-based systems

### Resource Hints
```html
<link rel="preload" href="/fonts/CormorantGaramond.woff2" as="font" crossorigin>
<link rel="preload" href="/assets/hero.webp" as="image">
<link rel="prefetch" href="/assets/textures/grain.png">
```

### CSS Performance
- Use CSS `contain: layout style` on isolated sections
- Use CSS `content-visibility: auto` on off-screen sections to reduce paint cost
- Avoid expensive CSS properties in animation: `box-shadow`, `filter` (use sparingly and only on GPU-promoted layers)

### Bundle & Build
- Use **Vite** for fast build with tree-shaking and code splitting
- Import GSAP plugins individually — do not import the full bundle
- Split JavaScript into entry chunks: `main.js`, `animations.js`, `canvas.js`
- Minify CSS and JS in production
- Use HTTP/2 for parallel asset delivery

---

## XIV. RESPONSIVE DESIGN

Design is **content-first and fluid** — not breakpoint-dependent.

```css
/* Fluid typography */
--text-hero: clamp(3rem, 8vw, 7rem);
--text-section: clamp(2rem, 5vw, 4rem);
--gutter: clamp(1.5rem, 5vw, 4rem);

/* Fluid spacing */
--section-padding: clamp(4rem, 10vh, 10rem);
```

**Breakpoint philosophy:**
- Mobile-first baseline — the atmosphere must hold on small screens
- Reduce particle count on mobile (detect with `window.innerWidth < 768`)
- Disable parallax on touch devices (`!window.matchMedia('(hover: hover)').matches`)
- Reduce animation duration on mobile for perceived performance
- Ensure all custom cursor logic is desktop-only

```javascript
const isTouchDevice = !window.matchMedia('(hover: hover)').matches;
if (isTouchDevice) {
  document.querySelector('.cursor')?.remove();
  // Simplify or disable mouse-based parallax
}
```

---

## XV. ACCESSIBILITY

- All meaningful images must have descriptive `alt` text
- All animations must respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  initCinematicAnimations();
}
```

- Semantic HTML throughout: `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- ARIA labels on icon-only buttons and interactive elements
- Focus states must be visible and styled to match the aesthetic (not removed)
- Color contrast must meet WCAG AA minimum (4.5:1 for body text)
- Tab order must be logical and keyboard navigation must be functional

---

## XVI. HTML STRUCTURE TEMPLATE

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[Site description]">
  <meta name="theme-color" content="#2C2A27">
  
  <!-- Preloads -->
  <link rel="preload" href="/fonts/CormorantGaramond-Light.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/hero.webp" as="image">
  
  <!-- Open Graph -->
  <meta property="og:title" content="[Title]">
  <meta property="og:image" content="/assets/og-image.jpg">
  
  <!-- Styles -->
  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="stylesheet" href="/css/base.css">
  <link rel="stylesheet" href="/css/layout.css">
  <link rel="stylesheet" href="/css/components.css">
  <link rel="stylesheet" href="/css/animations.css">
  
  <title>[Site Title]</title>
</head>
<body>

  <!-- Persistent atmosphere -->
  <div class="grain-overlay" aria-hidden="true"></div>
  <canvas class="dust-canvas" aria-hidden="true"></canvas>
  <div class="ambient-layer ambient-layer--bg" aria-hidden="true"></div>

  <!-- Custom cursor (desktop only) -->
  <div class="cursor" aria-hidden="true"></div>
  <div class="cursor-dot" aria-hidden="true"></div>

  <!-- Cinematic loader -->
  <div class="loader" role="status" aria-label="Loading">
    <div class="loader__wordmark">Studio Name</div>
  </div>

  <!-- Navigation -->
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <!-- ... -->
  </nav>

  <!-- Main content -->
  <main id="main-content">

    <section class="hero" aria-labelledby="hero-heading">
      <div class="ambient-layer ambient-layer--mid" aria-hidden="true"></div>
      <div class="hero__content">
        <h1 id="hero-heading" class="hero__title" data-reveal>
          The Title
        </h1>
        <p class="hero__subtitle" data-reveal>A supporting line of measured depth.</p>
      </div>
    </section>

    <section class="section" data-reveal>
      <!-- section content -->
    </section>

  </main>

  <footer class="footer">
    <!-- ... -->
  </footer>

  <!-- Scripts -->
  <script type="module" src="/js/main.js"></script>

</body>
</html>
```

---

## XVII. QUALITY CHECKLIST

Before considering the build complete, verify:

**Visual & Atmosphere**
- [ ] Grain overlay is present and subtly animated
- [ ] Particle system is running without causing jank (< 1ms per frame)
- [ ] Parallax layers are distinguishable and smooth
- [ ] Color palette never breaks outside the defined tokens
- [ ] Typography hierarchy is clear and editorial
- [ ] No section feels visually flat or disconnected

**Animation & Motion**
- [ ] Loader feels cinematic — no tech spinner, no progress bar
- [ ] Reveal animations use blur-to-focus with patient easing
- [ ] All animations are `transform` + `opacity` only (no layout thrashing)
- [ ] `prefers-reduced-motion` is handled globally
- [ ] GSAP ScrollTrigger timings feel guided, not mechanical

**Interaction**
- [ ] Custom cursor works on desktop, is absent on touch
- [ ] Hover states are tactile and refined
- [ ] Scroll feels weighted and smooth (Lenis or equivalent)
- [ ] No interaction feels gimmicky or overdone

**Performance**
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] FID / INP < 100ms
- [ ] All images are WebP with lazy loading
- [ ] Fonts are preloaded and use `font-display: swap`
- [ ] Canvas particle loop stays under 2% CPU at rest

**Accessibility**
- [ ] WCAG AA contrast on all body text
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Keyboard navigation is fully functional
- [ ] Screen reader order matches visual order
- [ ] Focus states are visible and styled to match the aesthetic

**Responsive**
- [ ] Atmosphere holds from 375px to 2560px
- [ ] Fluid typography uses `clamp()` throughout
- [ ] Touch devices have simplified but still atmospheric experience

---

## XVIII. FINAL INTENTION

The final website should feel:

- **Immersive** — the user enters a world, not a page
- **Cinematic** — every transition, reveal, and moment is directed
- **Emotionally calm** — it slows the user down; they breathe with it
- **Spatially rich** — layers, depth, atmosphere
- **Luxurious through simplicity** — nothing is excess; everything is intentional
- **Deeply human** — it does not feel built by a machine

The experience should resemble:
> a blend of architectural atmosphere, editorial minimalism, cinematic motion design, and emotionally aware interfaces.

It should feel **directed like a film sequence** rather than assembled like a webpage.

**Every line of code should serve the atmosphere. Every animation should feel like breath.**
