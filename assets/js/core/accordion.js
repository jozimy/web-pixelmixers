document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('is-open');

      // Close siblings
      item.parentElement.querySelectorAll('.accordion-item.is-open').forEach(open => {
        if (open !== item) {
          open.classList.remove('is-open');
          open.querySelector('.accordion-content').style.maxHeight = '0';
          open.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
    });
  });
});
