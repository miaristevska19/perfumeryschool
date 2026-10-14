// ---------- 1. Photos: try several file extensions so any picture format works ----------
// <img data-photo="images/portrait"> will try images/portrait.jpg, .jpeg, .png, .webp (and capitals).
// If nothing is found, the coloured placeholder stays visible.
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];

function loadPhoto(img, base, onFound, onMissing) {
  let i = 0;
  const tryNext = () => {
    if (i >= EXTENSIONS.length) { img.removeAttribute('src'); onMissing(); return; }
    img.src = `${base}.${EXTENSIONS[i++]}`;
  };
  img.onload = () => onFound();
  img.onerror = tryNext;
  tryNext();
}

document.querySelectorAll('img[data-photo]').forEach((img) => {
  const wrap = img.closest('[data-photo-wrap]');
  img.style.display = 'none';
  loadPhoto(
    img,
    img.dataset.photo,
    () => { img.style.display = ''; wrap && wrap.classList.add('has-photo'); },
    () => { wrap && wrap.classList.add('no-photo'); }
  );
});

// ---------- 2. Corner blooms ----------
// <div class="bloom bloom--tl" data-flower="orchid"> gets a drawn flower by default.
// If images/botanicals/orchid.(png|jpg|…) exists, your photo replaces the drawing.
const ICONS = { jasmine: 'b-jasmine', orchid: 'b-orchid', berries: 'b-berries', oud: 'b-oud', musk: 'b-musk' };

document.querySelectorAll('.bloom[data-flower]').forEach((bloom) => {
  const flower = bloom.dataset.flower;
  const inner = document.createElement('div');
  inner.className = 'bloom__inner';
  inner.innerHTML =
    `<svg class="bloom__art" viewBox="0 0 200 200" aria-hidden="true"><use href="#${ICONS[flower] || 'b-jasmine'}"/></svg>`;
  const img = document.createElement('img');
  img.alt = '';
  img.decoding = 'async';
  inner.appendChild(img);
  bloom.appendChild(inner);
  bloom.setAttribute('aria-hidden', 'true');
  loadPhoto(img, `images/botanicals/${flower}`, () => bloom.classList.add('has-photo'), () => {});
});

// ---------- 3. Scroll reveal (text, blooms, map) ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  if (el.closest('.hero')) el.style.transitionDelay = `${i * 0.15}s`;
  io.observe(el);
});

// Blooms open when their SECTION scrolls into view (they start off-edge, so they can't be watched directly)
const bloomIo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll(':scope > .bloom').forEach((b, i) => {
      b.style.transitionDelay = `${0.3 + i * 0.35}s`;
      b.classList.add('is-visible');
    });
    bloomIo.unobserve(entry.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.hero, .chapter').forEach((sec) => bloomIo.observe(sec));

// ---------- 4. Nav becomes solid after the hero ----------
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- 5. Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
