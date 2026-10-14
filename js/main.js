// Scroll-reveal for every element with class "reveal"
const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach((el, i) => {
  // small stagger for the hero lines
  if (el.closest('.hero')) el.style.transitionDelay = `${i * 0.18}s`;
  io.observe(el);
});

// Nav becomes solid after the hero
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Hide broken vision-board images so the coloured tile shows instead
document.querySelectorAll('.tile img').forEach((img) => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});
