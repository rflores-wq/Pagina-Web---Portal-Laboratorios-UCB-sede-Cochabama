/* ═══════════════════════════════════════════════════════════════
   style.css  →  El diseño de TODO el portal, en un solo lugar.
   Cada página HTML lo enlaza con:  <link rel="stylesheet" href="style.css">
   Cambias algo aquí y cambia en todas las páginas a la vez.
   (Esto antes estaba dentro de <style> en index.html.)
   ═══════════════════════════════════════════════════════════════ */

/* ── RESET & BASE ─────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --ucb-blue:    #0D1B3E;
  --ucb-blue2:   #1B3168;
  --ucb-gold:    #F0A500;
  --ucb-light:   #E6EBF5;
  --gray-dark:   #0D1B3E;
  --gray-mid:    #4A5568;
  --gray-soft:   #F0F3F8;
  --white:       #FFFFFF;
  --radius:      10px;
  --shadow:      0 4px 24px rgba(13,27,62,.15);
  --transition:  .3s ease;
}
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', sans-serif;
  color: var(--gray-dark);
  background: var(--white);
  overflow-x: hidden;
}
a { text-decoration: none; color: inherit; }
img { display: block; max-width: 100%; }

/* ── NAVBAR ───────────────────────────────────────── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(13, 27, 62, 0.98);
  backdrop-filter: blur(12px);
  padding: 0 5%;
  height: 70px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 2px solid var(--ucb-gold);
}
.nav-brand {
  display: flex; align-items: center; gap: 14px;
}
.nav-logo {
  width: 42px; height: 42px;
  background: var(--ucb-gold);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 1rem; color: var(--ucb-blue);
  flex-shrink: 0;
}
.nav-title {
  color: var(--white);
  font-size: .82rem;
  font-weight: 600;
  line-height: 1.3;
  max-width: 260px;
}
.nav-title span { color: var(--ucb-gold); }
.nav-links {
  display: flex; align-items: center; gap: 28px;
  list-style: none;
}
.nav-links a {
  color: rgba(255,255,255,.82);
  font-size: .85rem;
  font-weight: 500;
  transition: color var(--transition);
}
.nav-links a:hover { color: var(--ucb-gold); }
/* Marca la página actual con class="activo" en su propio enlace del menú */
.nav-links a.activo { color: var(--ucb-gold); }
.btn-login {
  background: var(--ucb-gold);
  color: var(--ucb-blue) !important;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 700 !important;
  font-size: .82rem !important;
  transition: transform var(--transition), box-shadow var(--transition) !important;
}
.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(242,169,0,.45);
  color: var(--ucb-blue) !important;
}
.nav-hamburger { display: none; cursor: pointer; }
.nav-hamburger span {
  display: block; width: 25px; height: 2px;
  background: white; margin: 5px 0;
  transition: var(--transition);
}

/* ── HERO ─────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  position: relative;
  display: flex; align-items: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background: url('hero.jpg.jpeg') center center / cover no-repeat;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    135deg,
    rgba(13,27,62,.92) 0%,
    rgba(27,49,104,.80) 50%,
    rgba(13,27,62,.65) 100%
  );
}
.hero-content {
  position: relative; z-index: 2;
  max-width: 760px;
  padding: 120px 5% 80px;
}
.hero-tag {
  display: inline-block;
  background: var(--ucb-gold);
  color: var(--ucb-blue);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 5px 16px;
  border-radius: 50px;
  margin-bottom: 24px;
}
.hero-content h1 {
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.15;
  margin-bottom: 24px;
}
.hero-content h1 em {
  color: var(--ucb-gold);
  font-style: normal;
}
.hero-content p {
  color: rgba(255,255,255,.85);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 580px;
}
.hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-primary {
  background: var(--ucb-gold);
  color: var(--ucb-blue);
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: .95rem;
  transition: transform var(--transition), box-shadow var(--transition);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(242,169,0,.5);
}
.btn-outline {
  background: transparent;
  color: var(--white);
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: .95rem;
  border: 2px solid rgba(255,255,255,.6);
  transition: border-color var(--transition), background var(--transition);
}
.btn-outline:hover {
  border-color: var(--ucb-gold);
  background: rgba(242,169,0,.12);
}
.hero-scroll {
  position: absolute; bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
  gap: 8px;
  color: rgba(255,255,255,.7);
  font-size: .75rem;
  animation: bounce 2s infinite;
}
.hero-scroll::after {
  content: '';
  width: 1px; height: 40px;
  background: rgba(255,255,255,.4);
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}

/* ── SECTION BASE ─────────────────────────────────── */
section { padding: 90px 5%; }
.section-label {
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ucb-blue2);
  margin-bottom: 10px;
}
.section-title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 800;
  line-height: 1.2;
  color: var(--gray-dark);
  margin-bottom: 14px;
}
.section-sub {
  color: var(--gray-mid);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: 56px;
}
.text-center { text-align: center; }
.text-center .section-sub { margin-left: auto; margin-right: auto; }

/* ── COUNTERS ─────────────────────────────────────── */
.counters-section {
  background: #0D1B3E;
  padding: 70px 5%;
}
.counters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto;
}
.counter-card {
  text-align: center;
  padding: 40px 24px;
  border-radius: var(--radius);
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.12);
  transition: transform var(--transition), background var(--transition);
}
.counter-card:hover {
  transform: translateY(-4px);
  background: rgba(255,255,255,.12);
}
.counter-icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
}
.counter-num {
  font-size: 3rem;
  font-weight: 900;
  color: var(--ucb-gold);
  line-height: 1;
  margin-bottom: 8px;
}
.counter-label {
  color: rgba(255,255,255,.85);
  font-size: .9rem;
  font-weight: 500;
  line-height: 1.4;
}

/* ── PILARS ───────────────────────────────────────── */
.pilars-section { background: var(--gray-soft); }
.pilars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
}
.pilar-card {
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--white);
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
}
.pilar-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,48,135,.18);
}
.pilar-img {
  height: 220px;
  background: center/cover no-repeat var(--ucb-light);
  position: relative;
}
.pilar-badge {
  position: absolute; top: 16px; left: 16px;
  background: #0D1B3E;
  color: white;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 50px;
}
.pilar-body { padding: 28px; }
.pilar-body h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--gray-dark);
}
.pilar-body p {
  color: var(--gray-mid);
  font-size: .9rem;
  line-height: 1.65;
  margin-bottom: 20px;
}
.pilar-link {
  color: var(--ucb-blue2);
  font-weight: 600;
  font-size: .88rem;
  display: inline-flex; align-items: center; gap: 6px;
  transition: gap var(--transition);
}
.pilar-link:hover { gap: 10px; }

/* ── LABS GRID ────────────────────────────────────── */
.labs-section { background: var(--white); }
.labs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}
.lab-card {
  background: var(--gray-soft);
  border-radius: var(--radius);
  padding: 28px 20px;
  text-align: center;
  border: 2px solid transparent;
  transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
  cursor: pointer;
}
.lab-card:hover {
  border-color: var(--ucb-blue2);
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  background: var(--white);
}
.lab-icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}
.lab-name {
  font-size: .88rem;
  font-weight: 600;
  color: var(--gray-dark);
  line-height: 1.35;
}
.lab-tag {
  display: inline-block;
  margin-top: 10px;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  color: var(--ucb-blue2);
  background: var(--ucb-light);
  padding: 3px 10px;
  border-radius: 50px;
}

/* ── NEWS ─────────────────────────────────────────── */
.news-section { background: var(--gray-soft); }
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}
.news-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform var(--transition);
}
.news-card:hover { transform: translateY(-4px); }
.news-thumb {
  height: 200px;
  background: center/cover no-repeat var(--ucb-light);
}
.news-body { padding: 22px; }
.news-cat {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ucb-gold);
  margin-bottom: 8px;
}
.news-body h4 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--gray-dark);
  margin-bottom: 8px;
}
.news-body p {
  font-size: .85rem;
  color: var(--gray-mid);
  line-height: 1.6;
}
.news-date {
  font-size: .75rem;
  color: var(--gray-mid);
  margin-top: 14px;
}

/* ── CTA STRIP ────────────────────────────────────── */
.cta-strip {
  background: linear-gradient(135deg, #0D1B3E 0%, #1B3168 100%);
  padding: 80px 5%;
  text-align: center;
}
.cta-strip h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: white;
  margin-bottom: 14px;
}
.cta-strip p {
  color: rgba(255,255,255,.8);
  margin-bottom: 36px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.cta-strip .btn-primary { font-size: 1rem; padding: 16px 40px; }

/* ── FOOTER ───────────────────────────────────────── */
footer {
  background: var(--gray-dark);
  color: rgba(255,255,255,.7);
  padding: 60px 5% 30px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto 48px;
}
.footer-brand .nav-logo {
  margin-bottom: 16px;
  width: 50px; height: 50px;
  font-size: 1.1rem;
}
.footer-brand p {
  font-size: .88rem;
  line-height: 1.7;
  max-width: 280px;
}
.footer-col h5 {
  color: white;
  font-size: .85rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: .05em;
  text-transform: uppercase;
}
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 10px; }
.footer-col a {
  font-size: .85rem;
  color: rgba(255,255,255,.65);
  transition: color var(--transition);
}
.footer-col a:hover { color: var(--ucb-gold); }
.footer-bottom {
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: .78rem;
}
.footer-bottom span { color: var(--ucb-gold); }

/* ── PÁGINA INTERNA (para páginas como laboratorios.html) ──
   Empuja el contenido hacia abajo para que no lo tape la
   barra fija de 70px, y le da un encabezado propio. */
.page {
  padding-top: 70px;   /* alto de la navbar fija */
}
.page-header {
  background: linear-gradient(135deg, #0D1B3E 0%, #1B3168 100%);
  color: var(--white);
  padding: 70px 5% 60px;
  text-align: center;
}
.page-header .section-label { color: var(--ucb-gold); }
.page-header h1 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  margin-bottom: 12px;
}
.page-header p {
  color: rgba(255,255,255,.8);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── ANIMATIONS ───────────────────────────────────── */
.fade-in {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .7s ease, transform .7s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: none;
}

/* ── RESPONSIVE ───────────────────────────────────── */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-hamburger { display: block; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .hero-content h1 { font-size: 2rem; }
  .pilars-grid { grid-template-columns: 1fr; }
}

/* Mobile nav open */
nav.open .nav-links {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 70px; left: 0; right: 0;
  background: #0D1B3E;
  padding: 24px 5%;
  gap: 20px;
}

/* La tarjeta de laboratorio ahora es un enlace a su página */
a.lab-card { text-decoration: none; color: inherit; display: block; }
