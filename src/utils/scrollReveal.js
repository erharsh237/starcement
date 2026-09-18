/**
 * Star Cement - High-Performance Smooth Scroll & Animation Engine
 * Combines Lenis smooth inertial momentum with GPU-accelerated IntersectionObserver
 * 60-120fps fluid scrolling, silky reveals, zero wheel freezing
 */

import Lenis from 'lenis';

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export function initScrollReveal() {
  if (typeof window === 'undefined') return () => {};

  const progressBar = document.querySelector('.scroll-progress-line');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let rafId = null;

  // 1. Initialize Lenis Smooth Inertial Scroll
  if (!prefersReducedMotion) {
    try {
      if (lenisInstance) {
        lenisInstance.destroy();
      }

      lenisInstance = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.4,
        infinite: false,
      });

      function raf(time) {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis init skipped:', err);
    }
  }

  // 2. Synchronous Reading Progress & Floating Back-to-Top Updates
  const updateScrollIndicators = (progress) => {
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }
    if (backToTopBtn) {
      if (progress > 0.035) {
        backToTopBtn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }
  };

  if (lenisInstance) {
    lenisInstance.on('scroll', ({ progress }) => {
      updateScrollIndicators(progress);
    });
  }

  // Fallback native scroll listener for window events
  const onNativeScroll = () => {
    if (!lenisInstance) {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      updateScrollIndicators(progress);
    }
  };
  window.addEventListener('scroll', onNativeScroll, { passive: true });

  // 3. Viewport Scroll Reveal Engine via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -45px 0px',
    threshold: 0.06
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const observeElements = () => {
    const targets = document.querySelectorAll(
      '.reveal-init:not(.is-revealed), .reveal-fade:not(.is-revealed), .reveal-scale:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-card:not(.is-revealed)'
    );
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.82 && rect.bottom > 0) {
        requestAnimationFrame(() => {
          el.classList.add('is-revealed');
        });
      } else {
        observer.observe(el);
      }
    });
  };

  observeElements();

  // Debounced MutationObserver to register newly mounted elements on tab / route changes
  let debounceTimeout = null;
  const mutationObserver = new MutationObserver(() => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      observeElements();
    }, 80);
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 4. Smooth Anchor Navigation Handler with Lenis Integration
  const handleAnchorClick = (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#admin') return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      const headerEl = document.querySelector('header');
      const offset = headerEl ? headerEl.offsetHeight + 14 : 95;

      if (lenisInstance) {
        lenisInstance.scrollTo(targetElement, { offset: -offset, duration: 1.2 });
      } else {
        const targetY = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  document.addEventListener('click', handleAnchorClick);

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
    }
    window.removeEventListener('scroll', onNativeScroll);
    observer.disconnect();
    mutationObserver.disconnect();
    document.removeEventListener('click', handleAnchorClick);
  };
}
