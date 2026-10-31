// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? 'CLOSE' : 'MENU';
  });
}

// Inquiry forms open the visitor's email app with the message filled in.
// Change the address on each form's data-to attribute.
document.querySelectorAll('form[data-to]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = `${form.dataset.subject || 'Website inquiry'}${data.get('topic') ? ' — ' + data.get('topic') : ''}`;
    const lines = [];
    for (const [k, v] of data.entries()) if (v) lines.push(`${k[0].toUpperCase() + k.slice(1)}: ${v}`);
    window.location.href = `mailto:${form.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
});

// Fade sections in as they scroll into view
const io = 'IntersectionObserver' in window && new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));

document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
