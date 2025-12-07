
// Year in footer
const yEl = document.getElementById('y'); if (yEl) yEl.textContent = new Date().getFullYear();

// Simple gallery lightbox (Activities page)
const thumbs = document.querySelectorAll('.gallery-thumb');
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImg');
if (thumbs.length && lb && lbImg) {
  thumbs.forEach(el => {
    el.addEventListener('click', () => {
      lbImg.src = el.src;
      const modal = new bootstrap.Modal(lb);
      modal.show();
    });
  });
}

// Contact form (demo only)
const form = document.querySelector('form');
const status = document.getElementById('formStatus');
if (form && status) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Thanks! Your message has been recorded locally.';
    form.reset();
  });
}
