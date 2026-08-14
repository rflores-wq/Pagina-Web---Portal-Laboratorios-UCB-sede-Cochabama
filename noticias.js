/* ═══════════════════════════════════════════════════════════════
   noticias.js  →  Carga las noticias desde una hoja de Google.
   Se usa en 3 páginas y él solo detecta en cuál está:
     • index.html      → muestra las 3 últimas   (#ultimas-noticias)
     • noticias.html   → muestra todas           (#todas-noticias)
     • noticia.html    → muestra una sola (?id=)  (#articulo)
   ═══════════════════════════════════════════════════════════════ */

/* 👇👇 LO ÚNICO QUE DEBES CAMBIAR 👇👇
   Pega aquí el enlace CSV publicado de tu hoja "Noticias"
   (Archivo → Compartir → Publicar en la web → hoja "Noticias" → CSV).  */
const NOTICIAS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSB6bnX1rZ_WSCjDf2IV054aHOV0Yj254erxgakKEOD_4sCAsEYDOlstKyaiNoUpmXxKvMgpt3EVdKF/pub?gid=468044609&single=true&output=csv";


/* ---------- utilidades ---------- */
function esc(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* Lector de CSV que respeta comas y saltos de línea dentro de comillas
   (importante: el cuerpo de una noticia tiene comas y párrafos). */
function parseCSV(text){
  const rows = []; let row = []; let field = ''; let inQ = false; let i = 0;
  while (i < text.length){
    const c = text[i];
    if (inQ){
      if (c === '"'){
        if (text[i+1] === '"'){ field += '"'; i += 2; continue; }
        inQ = false; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === '"'){ inQ = true; i++; continue; }
    if (c === ','){ row.push(field); field = ''; i++; continue; }
    if (c === '\r'){ i++; continue; }
    if (c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; i++; continue; }
    field += c; i++;
  }
  if (field.length > 0 || row.length > 0){ row.push(field); rows.push(row); }
  return rows;
}

/* Noticias de ejemplo: se usan SOLO mientras no pegues tu enlace,
   para que puedas ver la página funcionando de una vez. */
const NOTICIAS_DEMO = [
  { id:'3', fecha:'Mayo 2026', categoria:'Premiación', imagen:'noticia3.jpg.jpeg',
    titulo:'Estudiantes UCB ganan concurso nacional de prototipado',
    resumen:'El equipo del laboratorio de Diseño 3D representó a Bolivia en la feria internacional de inventores.',
    cuerpo:'El equipo del laboratorio de Diseño 3D representó a Bolivia en la feria internacional de inventores.\n\nReemplaza este texto por el cuerpo real de la noticia. Cada línea en blanco de la hoja se convierte en un párrafo nuevo aquí.' },
  { id:'2', fecha:'Junio 2026', categoria:'Investigación', imagen:'noticia2.jpg.jpeg',
    titulo:'Cromatografía HPLC: nuevos análisis para la industria alimentaria',
    resumen:'Resultados del análisis de pigmentos naturales en productos locales, publicados en revista indexada.',
    cuerpo:'Resultados del análisis de pigmentos naturales en productos locales, publicados en revista indexada.\n\nAquí irá el texto completo de la noticia.' },
  { id:'1', fecha:'Julio 2026', categoria:'Nuevo Equipamiento', imagen:'noticia1.jpg.jpeg',
    titulo:'Liofilizador BIOBASE potencia la investigación en biotecnología',
    resumen:'El laboratorio de Biotecnología incorpora tecnología de liofilización para conservación de bioproductos.',
    cuerpo:'El laboratorio de Biotecnología incorpora tecnología de liofilización para proyectos de conservación de bioproductos.\n\nAquí irá el texto completo de la noticia.' }
];

/* Descarga la hoja y la convierte en una lista de noticias ordenada
   de la más nueva a la más vieja (por el número de id). */
async function obtenerNoticias(){
  // Mientras no pegues tu enlace, mostramos las noticias de ejemplo.
  if (!NOTICIAS_CSV_URL || NOTICIAS_CSV_URL === "PEGA_AQUI_TU_ENLACE_CSV"){
    return NOTICIAS_DEMO.slice().sort((a,b)=>(parseInt(b.id,10)||0)-(parseInt(a.id,10)||0));
  }
  const resp = await fetch(NOTICIAS_CSV_URL);
  const text = await resp.text();
  const rows = parseCSV(text).filter(r => r.length > 1 && r.some(c => c.trim() !== ''));
  if (rows.length < 2) return [];

  const headers = rows[0].map(h => h.trim().toLowerCase());
  const col = name => headers.indexOf(name);
  const iId = col('id'), iFecha = col('fecha'), iCat = col('categoria'),
        iTit = col('titulo'), iRes = col('resumen'), iImg = col('imagen'), iCue = col('cuerpo');

  const lista = rows.slice(1).map(r => ({
    id:        (r[iId]  || '').trim(),
    fecha:     (r[iFecha]|| '').trim(),
    categoria: (r[iCat] || '').trim(),
    titulo:    (r[iTit] || '').trim(),
    resumen:   (r[iRes] || '').trim(),
    imagen:    (r[iImg] || '').trim(),
    cuerpo:    (r[iCue] || '')
  })).filter(n => n.titulo !== '');

  lista.sort((a, b) => (parseInt(b.id,10) || 0) - (parseInt(a.id,10) || 0));
  return lista;
}

/* Fondo de la imagen: acepta un enlace (https://…) o un archivo del repo. */
function fondoImagen(img){
  if (!img) return "var(--ucb-light)";
  return "center/cover no-repeat url('" + img.replace(/'/g,"%27") + "')";
}

/* Tarjeta de noticia (mismo diseño .news-card de tu sitio, pero clickeable). */
function tarjetaNoticia(n){
  return `
    <a class="news-card" href="noticia.html?id=${encodeURIComponent(n.id)}">
      <div class="news-thumb" style="background:${fondoImagen(n.imagen)};"></div>
      <div class="news-body">
        <div class="news-cat">${esc(n.categoria)}</div>
        <h4>${esc(n.titulo)}</h4>
        <p>${esc(n.resumen)}</p>
        <div class="news-date">${esc(n.fecha)}</div>
      </div>
    </a>`;
}

/* Pinta una lista de tarjetas. limite = 3 en el inicio, 0 = todas. */
async function pintarLista(contenedor, limite){
  contenedor.innerHTML = '<p style="grid-column:1/-1;color:var(--gray-mid);">Cargando noticias…</p>';
  try{
    let noticias = await obtenerNoticias();
    if (limite) noticias = noticias.slice(0, limite);
    contenedor.innerHTML = noticias.length
      ? noticias.map(tarjetaNoticia).join('')
      : '<p style="grid-column:1/-1;color:var(--gray-mid);">Aún no hay noticias publicadas.</p>';
  }catch(e){
    contenedor.innerHTML = '<p style="grid-column:1/-1;color:#c0392b;">No se pudieron cargar las noticias. Revisa el enlace de la hoja.</p>';
  }
}

/* Convierte el cuerpo (con saltos de línea) en párrafos. */
function parrafos(texto){
  return String(texto || '').split(/\n+/).map(p => p.trim()).filter(Boolean)
    .map(p => `<p>${esc(p)}</p>`).join('');
}

/* Pinta UNA noticia leyendo el ?id= de la dirección. */
async function pintarArticulo(contenedor){
  const id = new URLSearchParams(location.search).get('id');
  contenedor.innerHTML = '<p style="color:var(--gray-mid);">Cargando…</p>';
  try{
    const noticias = await obtenerNoticias();
    const n = noticias.find(x => String(x.id) === String(id));
    if (!n){
      contenedor.innerHTML = '<div class="article"><p>No encontramos esa noticia. <a href="noticias.html">Ver todas →</a></p></div>';
      return;
    }
    document.title = n.titulo + ' · Red de Laboratorios UCB';
    contenedor.innerHTML = `
      <article class="article">
        <a class="volver" href="noticias.html">← Todas las noticias</a>
        <div class="news-cat">${esc(n.categoria)}</div>
        <h1>${esc(n.titulo)}</h1>
        <div class="article-meta">${esc(n.fecha)}</div>
        ${n.imagen ? `<div class="article-img" style="background:${fondoImagen(n.imagen)};"></div>` : ''}
        <div class="article-body">${parrafos(n.cuerpo)}</div>
        <a class="volver" href="noticias.html">← Todas las noticias</a>
      </article>`;
  }catch(e){
    contenedor.innerHTML = '<div class="article"><p style="color:#c0392b;">No se pudo cargar la noticia.</p></div>';
  }
}

/* ---------- arranque: detecta en qué página estamos ---------- */
document.addEventListener('DOMContentLoaded', function(){
  const ultimas = document.getElementById('ultimas-noticias');
  if (ultimas) pintarLista(ultimas, 3);          // inicio: 3 últimas

  const todas = document.getElementById('todas-noticias');
  if (todas) pintarLista(todas, 0);              // página de noticias: todas

  const articulo = document.getElementById('articulo');
  if (articulo) pintarArticulo(articulo);        // noticia individual
});
