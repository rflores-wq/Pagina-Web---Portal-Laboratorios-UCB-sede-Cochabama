/* ═══════════════════════════════════════════════════════════════
   layout.js  →  UN SOLO menú y pie de página para TODO el sitio.

   Cada página solo necesita 3 cosas:
     <div id="site-nav"></div>       ← aquí se pone el menú
     <div id="site-footer"></div>    ← aquí se pone el pie
     <script src="layout.js"></script>

   ¿Quieres cambiar el menú? Edítalo SOLO aquí abajo y cambia en
   todas las páginas a la vez. 🎉
   ═══════════════════════════════════════════════════════════════ */

const NAV_HTML = `
<nav id="navbar">
  <div class="nav-brand">
    <div class="nav-logo">UCB</div>
    <div class="nav-title">
      Red de Laboratorios<br><span>Ciencias Exactas e Ingenierías</span>
    </div>
  </div>
  <ul class="nav-links">
    <li><a href="laboratorios.html">Laboratorios</a></li>
    <li><a href="index.html#investigacion">Investigación</a></li>
    <li><a href="noticias.html">Noticias</a></li>
    <li><a href="reservas.html">Reservas</a></li>
    <li><a href="index.html#contacto">Contacto</a></li>
    <li><a href="login.html" class="btn-login">🔒 Portal Investigadores</a></li>
  </ul>
  <div class="nav-hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="nav-logo">UCB</div>
      <p>Red de Laboratorios de Ciencias Exactas e Ingenierías de la
         Universidad Católica Boliviana "San Pablo", Sede Cochabamba.</p>
    </div>
    <div class="footer-col">
      <h5>Enlaces</h5>
      <ul>
        <li><a href="laboratorios.html">Laboratorios</a></li>
        <li><a href="noticias.html">Noticias</a></li>
        <li><a href="reservas.html">Reservas</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Institución</h5>
      <ul>
        <li><a href="index.html#investigacion">Sobre CICEI</a></li>
        <li><a href="login.html">Portal Docentes</a></li>
        <li><a href="index.html#contacto">Contacto</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div>© 2026 Universidad Católica Boliviana "San Pablo" · Cochabamba</div>
    <div>Desarrollado por <span>Red de Laboratorios CEI · UCB</span></div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', function () {
  // 1) Mete el menú
  var navSlot = document.getElementById('site-nav');
  if (navSlot) {
    navSlot.innerHTML = NAV_HTML;

    // Marca en dorado la página en la que estás
    var actual = location.pathname.split('/').pop() || 'index.html';
    navSlot.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href.indexOf('#') === -1 && href === actual) a.classList.add('activo');
    });

    // Menú hamburguesa (celular)
    var ham = navSlot.querySelector('#hamburger');
    if (ham) ham.addEventListener('click', function () {
      var nav = document.getElementById('navbar');
      if (nav) nav.classList.toggle('open');
    });
  }

  // 2) Mete el pie de página
  var footSlot = document.getElementById('site-footer');
  if (footSlot) footSlot.innerHTML = FOOTER_HTML;
});
