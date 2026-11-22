/* Lingua del sito (it / en), condivisa da home e mappa.
 * Ordine di scelta: parametro ?lang=, scelta salvata, lingua del browser. */
var LANG = (function () {
  var q = new URLSearchParams(location.search).get('lang');
  if (q === 'it' || q === 'en') return q;
  try {
    var saved = localStorage.getItem('cvLang');
    if (saved === 'it' || saved === 'en') return saved;
  } catch (e) {}
  return (navigator.language || 'it').toLowerCase().indexOf('it') === 0 ? 'it' : 'en';
})();
document.documentElement.lang = LANG;

function setLang(l) {
  try { localStorage.setItem('cvLang', l); } catch (e) {}
  var u = new URL(location.href);
  u.searchParams.set('lang', l);
  location.href = u.toString();
}

/* Applica i testi agli elementi con data-i18n (testo) e data-i18n-html (HTML). */
function applyI18n(dict) {
  var d = dict[LANG];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var k = el.getAttribute('data-i18n-html');
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    var k = el.getAttribute('data-i18n-title');
    if (d[k] !== undefined) el.title = d[k];
  });
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-lang') === LANG);
  });
}
