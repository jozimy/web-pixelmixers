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
