// Mark JS as available so CSS can use progressive-enhancement hooks
document.documentElement.classList.add('js');

/* =========================================================
   MOBILE NAV TOGGLE
   ========================================================= */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

function setNavOpen(isOpen) {
  mainNav.classList.toggle('is-open', isOpen);
  navToggle.classList.toggle('is-active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('nav-open', isOpen);
}

navToggle.addEventListener('click', () => {
  const isOpen = !mainNav.classList.contains('is-open');
  setNavOpen(isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setNavOpen(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
    setNavOpen(false);
    navToggle.focus();
  }
});

/* =========================================================
   HEADER SHADOW ON SCROLL
   ========================================================= */
const header = document.getElementById('siteHeader');
window.addEventListener(
  'scroll',
  () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  },
  { passive: true }
);

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const revealEls = document.querySelectorAll(
  '.about-grid, .skills-grid, .projects-grid, .contact-inner'
);
revealEls.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* =========================================================
   COPY EMAIL TO CLIPBOARD
   ========================================================= */
const copyBtn = document.getElementById('copyEmail');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

copyBtn.addEventListener('click', async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied to clipboard');
  } catch (err) {
    showToast(`Copy this email: ${email}`);
  }
});

/* =========================================================
   FOOTER YEAR
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
