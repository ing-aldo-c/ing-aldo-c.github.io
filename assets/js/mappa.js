/* CV geospaziale — logica della mappa (Leaflet).
 * I dati sono in data/cv-data.js, la lingua in assets/js/lang.js. */

/* ── TESTI DELL'INTERFACCIA ─────────────────────────────────────────── */
var UI = {
  it: {
    subtitle: 'CV Geospaziale Interattivo',
    email: 'Email', home: 'Home', guide: 'Guida', guideTitle: 'Come usare la mappa',
    tabWork: 'Esperienze', tabEdu: 'Formazione', tabTalks: 'Convegni',
    filter: 'Filtra layer',
    toMap: 'Passa a Mappa', toSat: 'Passa a Satellite',
    present: 'In corso', online: 'Online', readMore: 'Approfondisci',
    tabTime: 'Timeline', more: 'Mostra di pi&ugrave;', less: 'Mostra meno',
    g6: '<strong>Timeline</strong> &mdash; Tutto il percorso in ordine cronologico: clicca una voce per vederla sulla mappa.',
    gTitle: 'Come usare la <span>mappa</span>',
    gSub: 'CV Geospaziale Interattivo &middot; Ing. Cataldo Carletta',
    g1: '<strong>Marker colorati</strong> &mdash; Verde per le <strong>esperienze</strong>, viola per la <strong>formazione</strong>, arancione per i <strong>convegni</strong> da relatore.',
    g2: '<strong>Click su marker o card</strong> &mdash; La mappa si centra sul luogo e si apre un popup con i dettagli.',
    g3: '<strong>Tab in alto</strong> &mdash; Passa da Esperienze a Formazione e Convegni.',
    g4: '<strong>Satellite / Mappa</strong> &mdash; Pulsante in basso a destra per cambiare vista.',
    g5: '<strong>Filtro layer</strong> &mdash; Mostra o nascondi le categorie dal pannello in alto a destra.',
    gHide: 'Non mostrare pi&ugrave;', gStart: 'Inizia a esplorare &#8594;'
  },
  en: {
    subtitle: 'Interactive Geospatial CV',
    email: 'Email', home: 'Home', guide: 'Guide', guideTitle: 'How to use the map',
    tabWork: 'Experience', tabEdu: 'Education', tabTalks: 'Talks',
    filter: 'Layers',
    toMap: 'Switch to Map', toSat: 'Switch to Satellite',
    present: 'Present', online: 'Online', readMore: 'Read more',
    tabTime: 'Timeline', more: 'Show more', less: 'Show less',
    g6: '<strong>Timeline</strong> &mdash; The whole path in chronological order: click an entry to see it on the map.',
    gTitle: 'How to use the <span>map</span>',
    gSub: 'Interactive Geospatial CV &middot; Cataldo Carletta, P.Eng.',
    g1: '<strong>Coloured markers</strong> &mdash; Green for <strong>experience</strong>, purple for <strong>education</strong>, orange for <strong>talks</strong> as a speaker.',
    g2: '<strong>Click a marker or card</strong> &mdash; The map zooms to the place and opens a popup with the details.',
    g3: '<strong>Top tabs</strong> &mdash; Switch between Experience, Education and Talks.',
    g4: '<strong>Satellite / Map</strong> &mdash; Button at the bottom right to change view.',
    g5: '<strong>Layer filter</strong> &mdash; Show or hide categories from the panel at the top right.',
    gHide: 'Don&rsquo;t show again', gStart: 'Start exploring &#8594;'
  }
};
var T = UI[LANG];

/* Restituisce il campo nella lingua attiva (campo_en se esiste, altrimenti campo). */
function tr(item, key) {
  if (LANG === 'en' && item[key + '_en']) return item[key + '_en'];
  return item[key] || '';
}
function fine(item) {
  if (!item.fine) return '';
  return item.fine === 'IN CORSO' ? T.present : item.fine;
}

/* ── CATEGORIE ──────────────────────────────────────────────────────── */
var CAT = {
  lavoro:     { color: '#0d9488', icon: 'fa-briefcase',       items: esperienze, markers: [] },
  formazione: { color: '#6366f1', icon: 'fa-graduation-cap',  items: formazione, markers: [] },
  convegni:   { color: '#f59e0b', icon: 'fa-microphone',      items: convegni,   markers: [] }
};

/* ── TILE LAYERS ────────────────────────────────────────────────────── */
var streetLayer = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom: 19 }
);
var satelliteLayer = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics', maxZoom: 19 }
);
var labelsLayer = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
  { attribution: '', maxZoom: 19, pane: 'shadowPane' }
);

var map = L.map('map', { zoomControl: true });
map.setView([43.0, 12.5], 6);
satelliteLayer.addTo(map);
labelsLayer.addTo(map);
var isSatellite = true;

function toggleLayer() {
  if (!isSatellite) {
    map.removeLayer(streetLayer);
    satelliteLayer.addTo(map);
    labelsLayer.addTo(map);
  } else {
    map.removeLayer(satelliteLayer);
    map.removeLayer(labelsLayer);
    streetLayer.addTo(map);
  }
  isSatellite = !isSatellite;
  document.getElementById('layerLabel').textContent = isSatellite ? T.toMap : T.toSat;
  document.querySelector('#layerBtn .icon').innerHTML = '<i class="fas ' + (isSatellite ? 'fa-map' : 'fa-satellite') + '"></i>';
}

function toggleCategory(tipo, visible) {
  CAT[tipo].markers.forEach(function (m) {
    if (!m) return;
    if (visible && !map.hasLayer(m)) m.addTo(map);
    if (!visible && map.hasLayer(m)) map.removeLayer(m);
  });
}

function zoomCtx(lat) { return lat > 44 ? 9 : 10; }

/* ── MARKER E POPUP ─────────────────────────────────────────────────── */
var allBounds = [];
var activeCard = null;

function mkIcon(tipo) {
  var c = CAT[tipo];
  var html =
    '<div class="mk-wrap">' +
      '<div class="mk-pin" style="background:' + c.color + '">' +
        '<span class="mk-icon"><i class="fas ' + c.icon + '"></i></span>' +
      '</div>' +
      '<div class="mk-tail"></div>' +
    '</div>';
  return L.divIcon({ className: '', html: html, iconSize: [36, 48], iconAnchor: [18, 48], popupAnchor: [0, -44] });
}

function contenuto(item, tipo) {
  var titolo, sotto, periodo;
  if (tipo === 'convegni') {
    titolo = tr(item, 'titolo');
    sotto = tr(item, 'evento');
    periodo = item.data;
  } else {
    titolo = item.azienda || tr(item, 'nome');
    sotto = tr(item, 'ruolo');
    periodo = (item.data || '') + (item.fine ? ' &rarr; ' + fine(item) : '');
  }
  return { titolo: titolo, sotto: sotto, periodo: periodo, luogo: tr(item, 'luogo'), desc: tr(item, 'desc') };
}

function linkHtml(item) {
  return item.link ? '<a class="ext-link" href="' + item.link + '" target="_blank" rel="noopener">' + (tr(item, 'link_testo') || T.readMore) + ' <i class="fas fa-arrow-up-right-from-square"></i></a>' : '';
}

function addMarker(item, tipo) {
  if (item.lat == null || item.lng == null) { CAT[tipo].markers.push(null); return; }
  var c = contenuto(item, tipo);
  var p = '<b>' + c.titolo + '</b><br>' +
          (c.sotto ? '<i>' + c.sotto + '</i><br>' : '') +
          c.periodo + '<br><i class="fas fa-location-dot"></i> ' + c.luogo +
          (c.desc ? '<br><small style="color:#555">' + c.desc + '</small>' : '') +
          (item.link ? '<br>' + linkHtml(item) : '');
  var m = L.marker([item.lat, item.lng], { icon: mkIcon(tipo) }).addTo(map).bindPopup(p, { maxWidth: 300, autoPanPaddingTopLeft: [20, window.innerWidth < 600 ? 140 : 20] });
  CAT[tipo].markers.push(m);
  allBounds.push([item.lat, item.lng]);
}

Object.keys(CAT).forEach(function (tipo) {
  CAT[tipo].items.forEach(function (it) { addMarker(it, tipo); });
});

function fitAll(pad) {
  map.invalidateSize();
  if (allBounds.length) map.fitBounds(allBounds, { padding: [pad || 60, pad || 60], maxZoom: 10 });
}
setTimeout(fitAll, 300);

/* ── FOCUS SU UN ELEMENTO ───────────────────────────────────────────── */
function focusItem(tipo, idx, el) {
  var item = CAT[tipo].items[idx];
  var marker = CAT[tipo].markers[idx];
  if (activeCard) activeCard.classList.remove('highlight');
  if (el) { el.classList.add('highlight'); activeCard = el; }
  if (!marker) { if (item.link) window.open(item.link, '_blank', 'noopener'); return; }
  if (!map.hasLayer(marker)) marker.addTo(map);
  map.setView([item.lat, item.lng], zoomCtx(item.lat), { animate: true, duration: 0.8 });
  setTimeout(function () { marker.openPopup(); }, 500);
}

/* ── CARD NELLA BARRA LATERALE ──────────────────────────────────────── */
function creaCard(item, idx, tipo) {
  var c = contenuto(item, tipo);
  var card = document.createElement('div');
  card.className = 'card' + (tipo !== 'lavoro' ? ' ' + tipo : '');
  var badge = '';
  if (item.fine === 'IN CORSO') badge = '<span class="badge attuale"><i class="fas fa-circle"></i> ' + T.present + '</span>';
  else if (item.lat == null) badge = '<span class="badge online"><i class="fas fa-laptop"></i> ' + T.online + '</span>';
  var lunga = c.desc && c.desc.length > 150;
  card.innerHTML =
    badge +
    '<h3>' + c.titolo + '</h3>' +
    (c.sotto ? '<div class="ruolo">' + c.sotto + '</div>' : '') +
    '<div class="meta"><span class="periodo"><i class="far fa-calendar"></i> ' + c.periodo + '</span>' +
    '<span class="luogo"><i class="fas fa-location-dot"></i> ' + c.luogo + '</span></div>' +
    (c.desc ? '<div class="desc' + (lunga ? ' clamp' : '') + '">' + c.desc + '</div>' : '') +
    (lunga ? '<button class="more" type="button">' + T.more + ' <i class="fas fa-chevron-down"></i></button>' : '') +
    linkHtml(item);

  var btn = card.querySelector('.more');
  if (btn) btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var aperta = !card.querySelector('.desc').classList.toggle('clamp');
    btn.innerHTML = (aperta ? T.less : T.more) + ' <i class="fas fa-chevron-' + (aperta ? 'up' : 'down') + '"></i>';
  });
  card.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function (e) { e.stopPropagation(); }); });
  card.addEventListener('click', function () { focusItem(tipo, idx, card); });
  return card;
}

var SEZ = { lavoro: 'sec-lavoro', formazione: 'sec-formazione', convegni: 'sec-convegni', timeline: 'sec-timeline' };
['lavoro', 'formazione', 'convegni'].forEach(function (tipo) {
  var box = document.getElementById(SEZ[tipo]);
  CAT[tipo].items.forEach(function (it, i) { box.appendChild(creaCard(it, i, tipo)); });
});
document.getElementById('nEsp').textContent = esperienze.length;
document.getElementById('nForm').textContent = formazione.length;
document.getElementById('nConv').textContent = convegni.length;

/* ── TIMELINE ───────────────────────────────────────────────────────── */
/* Converte "AAAA", "MM/AAAA" o "GG/MM/AAAA" in un numero ordinabile AAAAMMGG. */
function chiave(d) {
  var p = String(d || '').split('/');
  if (p.length === 1) return +p[0] * 10000;
  if (p.length === 2) return +p[1] * 10000 + +p[0] * 100;
  return +p[2] * 10000 + +p[1] * 100 + +p[0];
}
(function () {
  var voci = [];
  ['lavoro', 'formazione', 'convegni'].forEach(function (tipo) {
    CAT[tipo].items.forEach(function (it, i) { voci.push({ tipo: tipo, idx: i, k: chiave(it.data), item: it }); });
  });
  voci.sort(function (a, b) { return b.k - a.k; });
  var tl = document.createElement('div');
  tl.className = 'tl';
  var anno = null;
  voci.forEach(function (v) {
    var y = Math.floor(v.k / 10000);
    if (y !== anno) {
      anno = y;
      var h = document.createElement('div');
      h.className = 'tl-year';
      h.textContent = y;
      tl.appendChild(h);
    }
    var c = contenuto(v.item, v.tipo);
    var el = document.createElement('div');
    el.className = 'tl-item ' + v.tipo;
    el.innerHTML =
      '<span class="tl-dot" style="background:' + CAT[v.tipo].color + '"><i class="fas ' + CAT[v.tipo].icon + '"></i></span>' +
      '<div class="tl-body"><div class="tl-date">' + c.periodo + '</div>' +
      '<div class="tl-title">' + c.titolo + '</div>' +
      (c.sotto ? '<div class="tl-sub">' + c.sotto + '</div>' : '') + '</div>';
    el.addEventListener('click', function () { focusItem(v.tipo, v.idx, el); });
    tl.appendChild(el);
  });
  document.getElementById('sec-timeline').appendChild(tl);
})();

function mostraSezione(tipo) {
  Object.keys(SEZ).forEach(function (k) {
    document.getElementById(SEZ[k]).classList.toggle('active', k === tipo);
  });
  document.querySelectorAll('.tab').forEach(function (t) {
    t.classList.toggle('active', t.getAttribute('data-tab') === tipo);
  });
  document.getElementById('sidebar').scrollTop = 0;
  if (activeCard) { activeCard.classList.remove('highlight'); activeCard = null; }
  map.closePopup();
  fitAll(30);
}

/* ── TESTI E GUIDA ──────────────────────────────────────────────────── */
applyI18n(UI);

document.getElementById('layerLabel').textContent = T.toMap;

function chiudiGuida() {
  try {
    if (document.getElementById('chk-non-mostrare').checked) localStorage.setItem('guidaCV_nascosta', '1');
  } catch (e) {}
  document.getElementById('guida-overlay').classList.add('hidden');
}
function apriGuida() {
  document.getElementById('chk-non-mostrare').checked = false;
  document.getElementById('guida-overlay').classList.remove('hidden');
}
try {
  if (localStorage.getItem('guidaCV_nascosta') === '1') document.getElementById('guida-overlay').classList.add('hidden');
} catch (e) {}
document.getElementById('guida-overlay').addEventListener('click', function (e) {
  if (e.target === this) chiudiGuida();
});
setTimeout(function () { map.invalidateSize(); }, 400);

/* I link alla home mantengono la lingua scelta */
['btnHome', 'brandHome'].forEach(function (id) {
  var a = document.getElementById(id);
  if (a) a.href = 'index.html?lang=' + LANG;
});
