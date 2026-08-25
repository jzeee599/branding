// Lightweight reveal effect; no framework required.
const items = document.querySelectorAll('.gallery figure');
if ('IntersectionObserver' in window) {
  items.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(18px)'; el.style.transition = 'opacity .7s ease, transform .7s ease'; });
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  }), { threshold: .08 });
  items.forEach(el => io.observe(el));
}
