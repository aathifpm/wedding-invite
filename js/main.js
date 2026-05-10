/* =============================================================
   Cinematic invitation — main.js
   ============================================================= */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = !window.matchMedia('(hover: hover)').matches;
  const isMobile = window.innerWidth < 768;

  /* ---------- Custom cursor (desktop only) ---------- */
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');

  if (isTouchDevice) {
    cursor?.remove();
    cursorDot?.remove();
  } else if (cursor && cursorDot && window.gsap) {
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor,    { x: e.clientX, y: e.clientY, duration: 0.55, ease: 'power2.out' });
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.10, ease: 'power2.out' });
    });
    document.querySelectorAll('a, button, [data-hover], .event-card').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
    });
  }

  /* ---------- Lenis smooth scroll ---------- */
  let lenis = null;
  if (window.Lenis && !prefersReducedMotion) {
    lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* ---------- Dust particle system ---------- */
  class DustSystem {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.resize();
      this.populate(isMobile ? 35 : 80);
      window.addEventListener('resize', () => this.resize());
      this.loop();
    }
    resize() {
      this.canvas.width  = window.innerWidth  * this.dpr;
      this.canvas.height = window.innerHeight * this.dpr;
      this.canvas.style.width  = window.innerWidth + 'px';
      this.canvas.style.height = window.innerHeight + 'px';
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }
    populate(count) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.4 + 0.3,
          sx: (Math.random() - 0.5) * 0.10,
          sy: -Math.random() * 0.16 - 0.03,
          o: Math.random() * 0.28 + 0.06,
          tw: Math.random() * Math.PI * 2,
        });
      }
    }
    loop() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.ctx.clearRect(0, 0, w, h);
      const t = performance.now() * 0.001;
      this.particles.forEach((p) => {
        p.x += p.sx;
        p.y += p.sy;
        if (p.y < -2) { p.y = h + 2; p.x = Math.random() * w; }
        if (p.x < -2) p.x = w + 2;
        if (p.x > w + 2) p.x = -2;
        const flicker = 0.7 + 0.3 * Math.sin(t + p.tw);
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(216, 185, 122, ${p.o * flicker})`;
        this.ctx.fill();
      });
      requestAnimationFrame(() => this.loop());
    }
  }
  const dustCanvas = document.querySelector('.dust-canvas');
  if (dustCanvas && !prefersReducedMotion) new DustSystem(dustCanvas);

  /* ---------- Ambient parallax (desktop) ---------- */
  if (!isTouchDevice && !prefersReducedMotion && window.gsap) {
    const ambBg  = document.querySelector('.ambient-layer--bg');
    const ambMid = document.querySelector('.ambient-layer--mid');
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (ambBg)  gsap.to(ambBg,  { x: x * 14, y: y *  9, duration: 2.6, ease: 'power1.out' });
      if (ambMid) gsap.to(ambMid, { x: x *  7, y: y *  4, duration: 3.0, ease: 'power1.out' });
    });
  }

  /* ---------- Loader timeline ---------- */
  function runLoader() {
    const loader = document.querySelector('.loader');
    if (!loader || !window.gsap) {
      if (loader) loader.style.display = 'none';
      revealEnvironment();
      return;
    }

    if (prefersReducedMotion) {
      loader.style.display = 'none';
      revealEnvironment();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        loader.style.display = 'none';
        revealEnvironment();
      }
    });

    tl.to('.loader__ornament', {
      opacity: 0.9,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power2.out',
    })
      .to('.loader__wordmark', {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.6,
        ease: 'power2.out',
      }, '-=0.7')
      .to('.loader__sub', {
        opacity: 0.8,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power2.out',
      }, '-=0.9')
      .to({}, { duration: 0.6 }) // breath
      .to('.loader', {
        opacity: 0,
        duration: 1.4,
        ease: 'power3.inOut',
      });
  }

  /* ---------- Environment reveal & scroll triggers ---------- */
  function revealEnvironment() {
    if (!window.gsap) return;

    // Hero entrance
    const heroEls = document.querySelectorAll('.hero [data-reveal]');
    gsap.to(heroEls, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.8,
      ease: 'power3.out',
      stagger: 0.18,
    });

    // Ambient soft fade-in
    gsap.fromTo('.ambient-layer', { opacity: 0 }, {
      opacity: 1, duration: 3, ease: 'power2.out'
    });

    // Scroll triggered reveals for the rest
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      // Sync Lenis with ScrollTrigger
      if (lenis) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      }

      const others = Array.from(document.querySelectorAll('main [data-reveal]'))
        .filter((el) => !el.closest('.hero'));
      others.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Section-scoped stagger for grids / lineage
      document.querySelectorAll('.event-grid, .lineage, .couple__meta').forEach((group) => {
        const items = group.children;
        gsap.from(items, {
          opacity: 0,
          y: 20,
          filter: 'blur(4px)',
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });
    }
  }

  /* ---------- Boot ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runLoader);
  } else {
    runLoader();
  }
})();
