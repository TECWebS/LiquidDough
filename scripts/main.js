/* ============================================================
   LIQUID DOUGH — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings slightly
        const delay = (i % 4) * 80;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

});
