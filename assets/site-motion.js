(() => {
  'use strict';
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...document.querySelectorAll(
    '.section-headline-large, .problem-card-item, .pipeline-col, .pillar-box, .method-step-box, .work-card'
  )];
  if (!('IntersectionObserver' in window) || preference.matches) return;
  const animations = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (preference.matches || document.hidden) return;
      // Content is visible by default, including without JavaScript.
      const animation = entry.target.animate([
        { opacity: .45, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' });
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation)).catch(() => animations.delete(animation));
    });
  }, { threshold: .12 });
  targets.forEach(target => observer.observe(target));
  preference.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    animations.forEach(animation => animation.cancel());
    animations.clear();
  });
})();
