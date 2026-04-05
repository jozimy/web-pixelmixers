document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const rules = {
    name:    { required: true, message: 'Please enter your name.' },
    email:   { required: true, email: true, message: 'Please enter a valid email address.' },
    message: { required: true, message: 'Please enter a message.' }
  };

  function validateField(field) {
    const group = field.closest('.form-group');
    const error = group.querySelector('.form-error');
    const name = field.getAttribute('name');
    const rule = rules[name];
    if (!rule) return true;

    let valid = true;
    const value = field.value.trim();

    if (rule.required && !value) {
      valid = false;
    }
    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      valid = false;
    }

    group.classList.toggle('has-error', !valid);
    if (error) error.textContent = valid ? '' : rule.message;
    return valid;
  }

  // Live validation on blur
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group.classList.contains('has-error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;

    form.querySelectorAll('input[required], textarea[required]').forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (allValid) {
      // Replace form with success message
      form.innerHTML = `
        <div style="text-align:center;padding:var(--space-12) 0;">
          <h3 style="font-family:var(--font-display);font-size:var(--text-2xl);font-weight:800;margin-bottom:var(--space-4);">Message sent.</h3>
          <p style="color:var(--text-secondary);font-size:var(--text-md);line-height:var(--leading-relaxed);">We'll get back to you within 24 hours. Talk soon.</p>
        </div>
      `;
    }
  });
});
