// ===== 1. STICKY NAVBAR SHADOW =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ===== 2. REVEAL ON SCROLL (PDF Creativity marks) =====
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) el.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== 3. SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== 4. ACTIVE NAV LINK WHILE SCROLLING =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) cur = s.getAttribute('id');
  });
  navLinks.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === `#${cur}`) l.classList.add('active');
  });
});

// ===== 5. CONTACT FORM (Mandatory Section) =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const oldText = btn.innerText;
  btn.innerText = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    alert('Thanks! ☕ Message received. BrewHaven will contact you within 2 hours.');
    e.target.reset();
    btn.innerText = oldText;
    btn.disabled = false;
  }, 1000);
}

// ===== 6. STATS POP ANIMATION =====
const statsBox = document.querySelector('.stats');
if (statsBox) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.stats h3').forEach(h => {
        h.style.transform = 'scale(1.2)';
        setTimeout(() => h.style.transform = 'scale(1)', 200);
      });
    }
  });
  observer.observe(statsBox);
}