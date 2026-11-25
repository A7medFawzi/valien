/**
 * Hydrates appear & scroll-into-view animations, videos, hero 3D cubes,
 * stats count-up, Strategy Before/After swap, footer icons, and continuous effects.
 */
import icons from './icons.json';

export function initAnimations(root) {
  if (!root) return () => {};

  const timers = [];
  let cancelled = false;

  // 0. Ensure footer social icons render consistently on all pages (/, /contact, /404)
  root.querySelectorAll('footer a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const existing = a.querySelector('svg');
    const container = a.querySelector('[style*="display:contents"]') || a.querySelector('.vln-v0jy1-container') || a;
    let svgHtml = null;
    if (href.includes('x.com')) svgHtml = icons.footer_x;
    else if (href.includes('instagram.com')) svgHtml = icons.footer_ig;
    else if (href.includes('facebook.com')) svgHtml = icons.footer_fb;
    else if (href.includes('dribbble.com')) svgHtml = icons.footer_db;
    if (svgHtml) {
      if (existing) existing.outerHTML = svgHtml;
      else if (container && container.innerHTML.trim() === '') container.innerHTML = svgHtml;
    }
  });

  // 1. Auto-play background videos
  const videos = root.querySelectorAll('video');
  videos.forEach((v) => {
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.setAttribute('autoplay', 'autoplay');
    v.play().catch(() => {});
  });

  // 2. Continuous Pulser effect on radar dot
  const pulserElements = root.querySelectorAll('[data-vln-name="Pulser"]');
  pulserElements.forEach((p) => {
    if (!p.querySelector('.pulser-animation')) {
      const ring = document.createElement('div');
      ring.className = 'pulser-animation';
      p.style.position = 'relative';
      p.appendChild(ring);
    }
  });

  // 3. Galaxy Button shimmer (only on the button, NEVER on Hero cube Rim/Rim 2!)
  const galaxyButtons = root.querySelectorAll('[data-vln-name="Galaxy-Button"]');
  galaxyButtons.forEach((btn) => {
    btn.classList.add('galaxy-btn-glow');
  });

  // 3b. Hero floating cloud animation
  const clouds = root.querySelectorAll('.vln-1g8a9li');
  clouds.forEach((c) => {
    c.classList.add('hero-cloud-float');
  });

  // 3c. Hero 4 Isometric Cubes variant loop cycles
  const startVariantLoop = (selector, defaultClass, activeClass, delayOffMs, delayOnMs, onChange) => {
    const els = root.querySelectorAll(selector);
    els.forEach((el) => {
      let isActive = el.classList.contains(activeClass);
      const tick = () => {
        if (cancelled) return;
        isActive = !isActive;
        if (isActive) {
          el.classList.remove(defaultClass);
          el.classList.add(activeClass);
          if (onChange) onChange(el, true);
          timers.push(setTimeout(tick, delayOnMs));
        } else {
          el.classList.remove(activeClass);
          el.classList.add(defaultClass);
          if (onChange) onChange(el, false);
          timers.push(setTimeout(tick, delayOffMs));
        }
      };
      timers.push(setTimeout(tick, isActive ? delayOnMs : delayOffMs));
    });
  };

  startVariantLoop('.vln-OfN3f', 'vln-v-1kh5md0', 'vln-v-kl8osi', 700, 700);
  startVariantLoop('.vln-P9rnY', 'vln-v-1rr9x04', 'vln-v-bv2lu3', 800, 700);
  startVariantLoop('.vln-X2KWn', 'vln-v-1b5kr16', 'vln-v-weg8af', 1200, 700);
  startVariantLoop('.vln-Vm7DA', 'vln-v-3uzwz9', 'vln-v-190vvtr', 1000, 700);

  // Strategy & Content: AI Consulting & Strategies ("After" <-> "Before" bars + text swap every 2000ms)
  startVariantLoop('.vln-neIkC', 'vln-v-18uyfj8', 'vln-v-12upfc5', 2200, 2200, (el, isBefore) => {
    const bar1 = el.querySelector('.vln-f691c9 span');
    const bar2 = el.querySelector('.vln-1uzppfn span');
    const bar3 = el.querySelector('.vln-1jwduoa span');
    if (isBefore) {
      if (bar1) bar1.textContent = 'Growth +10%';
      if (bar2) bar2.textContent = 'Efficiency -50%';
      if (bar3) bar3.textContent = 'Cost +100%';
    } else {
      if (bar1) bar1.textContent = 'Growth +250%';
      if (bar2) bar2.textContent = 'Efficiency + 200%';
      if (bar3) bar3.textContent = 'Cost -100%';
    }
  });

  // 3d. Integrations 3-column vertical marquees, Under-Projects Logos Marquee, Code Editor scroll, Feature Pills & Reviews horizontal marquees
  const intIconsContainer = root.querySelector('[data-vln-name="icons container"]');
  if (intIconsContainer) {
    const uls = intIconsContainer.querySelectorAll('ul');
    uls.forEach((ul, idx) => {
      ul.classList.add(idx % 2 === 0 ? 'marquee-vertical-up' : 'marquee-vertical-down');
    });
  }
  root.querySelectorAll('.vln-e4500b ul').forEach((ul) => {
    if (!ul.dataset.marqueeCloned) {
      ul.dataset.marqueeCloned = 'true';
      const origItems = Array.from(ul.children);
      for (let i = 0; i < 3; i++) {
        origItems.forEach((li) => ul.appendChild(li.cloneNode(true)));
      }
    }
    ul.classList.add('marquee-track');
  });
  root.querySelectorAll('section ul').forEach((ul) => {
    const txt = ul.textContent || '';
    if (txt.includes('Data-Driven Decisions')) {
      ul.classList.add('marquee-track');
    } else if (txt.includes('Ryan harper') || txt.includes('Harper education')) {
      ul.classList.add('marquee-track-slow');
    } else if (txt.includes('AutomationAgent') || txt.includes('evaluate_task')) {
      ul.classList.add('marquee-vertical-up');
    }
  });

  // 3e. Stats Count-Up on scroll into view (10k+, 250k+, 4.8, and 15,725+ reviews)
  const animateNumber = (span, target, isDecimal, useComma, duration = 1400) => {
    if (span.dataset.counted) return;
    span.dataset.counted = 'true';
    const startVal = isDecimal ? 3.5 : Math.floor(target * 0.55);
    const startTime = performance.now();
    const step = (now) => {
      if (cancelled) return;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (target - startVal) * eased;
      if (isDecimal) {
        span.textContent = current.toFixed(1);
      } else {
        const rounded = Math.round(current);
        span.textContent = useComma ? rounded.toLocaleString('en-US') : String(rounded);
      }
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const span = entry.target;
        const raw = span.textContent.trim();
        if (raw === '10') animateNumber(span, 10, false, false);
        else if (raw === '250') animateNumber(span, 250, false, false);
        else if (raw === '4.8') animateNumber(span, 4.8, true, false);
        else if (raw === '15,725') animateNumber(span, 15725, false, true);
        countObserver.unobserve(span);
      });
    },
    { threshold: 0.2 }
  );

  root.querySelectorAll('#success-stories span, #reviews span').forEach((span) => {
    const t = span.textContent.trim();
    if (t === '10' || t === '250' || t === '4.8' || t === '15,725') {
      countObserver.observe(span);
    }
  });

  // 4. Reveal & animate elements that start hidden (opacity: 0.001, opacity: 0, or data-vln-appear-id)
  const hiddenElements = Array.from(root.querySelectorAll('*')).filter((el) => {
    const fname = el.getAttribute('data-vln-name') || '';
    if (fname === 'project 2' || fname === 'project 3') return false;

    const inlineOpacity = el.style?.opacity;
    return (
      inlineOpacity === '0.001' ||
      inlineOpacity === '0' ||
      el.hasAttribute('data-vln-appear-id')
    );
  });

  const revealElement = (el, delayMs = 0) => {
    if (el.dataset.vlnRevealed) return;
    el.dataset.vlnRevealed = 'true';

    const curTransform = el.style.transform || '';
    const isEntranceOffset =
      curTransform === 'none' ||
      curTransform.includes('translateY(10px)') ||
      curTransform.includes('translateY(12px)') ||
      curTransform.includes('translateY(20px)') ||
      curTransform.includes('translateY(5px)') ||
      curTransform.includes('translateX(-12px)') ||
      curTransform.includes('perspective(1200px)');

    el.style.transition = `opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 0.32s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, filter 0.32s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      if (isEntranceOffset) {
        el.style.transform = 'none';
      }
      if (el.style.filter && el.style.filter.includes('blur')) {
        el.style.filter = 'blur(0px)';
      }
    });
  };

  const viewportHeight = window.innerHeight || 900;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target, 0);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: '500px 0px' }
  );

  hiddenElements.forEach((el, idx) => {
    const rect = el.getBoundingClientRect();
    const inHero = el.closest('#hero') !== null;
    if (inHero || rect.top < viewportHeight + 100) {
      const delay = inHero ? Math.min(idx * 40, 350) : 0;
      revealElement(el, delay);
    } else {
      observer.observe(el);
    }
  });

  return () => {
    cancelled = true;
    timers.forEach((t) => clearTimeout(t));
    observer.disconnect();
    countObserver.disconnect();
  };
}
