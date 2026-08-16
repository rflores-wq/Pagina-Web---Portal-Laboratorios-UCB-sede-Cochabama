/* ═══════════════════════════════════════════════════════════════
   laboratorios.js  →  Abre/cierra el modal de un equipo.
   Cada tarjeta de equipo guarda sus datos en atributos data-*.
   ═══════════════════════════════════════════════════════════════ */

function abrirEquipo(card){
  const modal = document.getElementById('modal-equipo');
  if (!modal) return;
  modal.querySelector('.modal-box h3').textContent      = card.dataset.nombre || '';
  modal.querySelector('.modal-box .marca').textContent  = card.dataset.marca || '';
  modal.querySelector('.modal-box p').textContent       = card.dataset.desc || '';
  const img = modal.querySelector('.modal-img');
  img.style.background = card.dataset.img
    ? "center/cover no-repeat url('" + card.dataset.img.replace(/'/g,"%27") + "')"
    : "var(--ucb-light)";
  modal.classList.add('abierto');
}

function cerrarEquipo(){
  const modal = document.getElementById('modal-equipo');
  if (modal) modal.classList.remove('abierto');
}

document.addEventListener('DOMContentLoaded', function(){
  // Cerrar al tocar el fondo oscuro o la tecla Esc
  const modal = document.getElementById('modal-equipo');
  if (modal){
    modal.addEventListener('click', function(e){ if (e.target === modal) cerrarEquipo(); });
  }
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') cerrarEquipo(); });
});
