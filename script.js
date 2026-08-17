/* ═══════════════════════════════════════════════════════════════
   script.js  →  El JavaScript de todo el portal, en un solo lugar.
   Cada página lo carga con:  <script src="script.js"></script>
   (Esto antes estaba dentro de <script> al final de index.html.)

   OJO: cada bloque revisa primero si el elemento existe, así el mismo
   archivo funciona aunque una página no tenga contadores o hero.
   ═══════════════════════════════════════════════════════════════ */

// ── Activa las animaciones (si este archivo no carga, el contenido igual se ve) ──
document.documentElement.classList.add('js');

// ── Menú móvil ────────────────────────────────────
function toggleMenu() {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('open');
}

// ── Aparición al hacer scroll ─────────────────────
var fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () { entry.target.classList.add('visible'); }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(function (el) { observer.observe(el); });
}

// ── Contadores animados ───────────────────────────
var counters = document.querySelectorAll('.counter-num');
if (counters.length) {
  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.dataset.target, 10);
      var suffix = el.dataset.suffix || '';
      var current = 0;
      var step = Math.max(1, Math.floor(target / 40));
      var interval = setInterval(function () {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(interval);
      }, 40);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(function (c) { countObserver.observe(c); });
}

// ── Sombra de la navbar al hacer scroll ───────────
window.addEventListener('scroll', function () {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 50
    ? '0 4px 30px rgba(0,0,0,.3)'
    : 'none';
});
