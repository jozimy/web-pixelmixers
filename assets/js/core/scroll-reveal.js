function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.revealDelay || 0;
        setTimeout(() => el.classList.add('is-revealed'), Number(delay));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(el => {
    el.classList.add('reveal-pending');
    el.classList.add(`reveal--${el.dataset.reveal || 'fade-up'}`);
    observer.observe(el);
  });

  // Also trigger glow ellipses
  document.querySelectorAll('.glow-ellipse').forEach(el => {
    const go = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); go.unobserve(e.target); } });
    }, { threshold: 0 });
    go.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initScrollReveal);
