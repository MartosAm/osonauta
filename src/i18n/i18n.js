import translations from './translations';

const STORAGE_KEY = 'osn_lang';

function setHtmlLang(lang) {
  try {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
  } catch (err) {
    // ignore failures in non-browser environments
    console.warn('i18n: setHtmlLang failed', err);
  }
}

export function translatePage(lang) {
  const map = translations[lang] || translations.es;
  // Find all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = map[key];
    if (!text) return;
    const tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      el.value = text;
      if (el.placeholder !== undefined) el.placeholder = text;
    } else if (tag === 'IFRAME') {
      // set accessible title attribute for iframes
      el.title = text;
    } else {
      el.innerText = text;
    }
  });
  // handle data-i18n-attr mappings for attributes like aria-label or title
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const raw = el.getAttribute('data-i18n-attr');
    if (!raw) return;
    // allow multiple mappings separated by ';' e.g. "title:key;aria-label:key2"
    raw.split(';').forEach((pair) => {
      const [attr, mapKey] = pair.split(':').map((s) => s && s.trim());
      if (!attr || !mapKey) return;
      const val = map[mapKey];
      if (val !== undefined) el.setAttribute(attr, val);
    });
  });
  setHtmlLang(lang);
  localStorage.setItem(STORAGE_KEY, lang);
}

export function initI18n() {
  if (typeof window === 'undefined') return;
  const saved = localStorage.getItem(STORAGE_KEY) || 'es';
  translatePage(saved);
}

export function toggleLang() {
  const current = localStorage.getItem(STORAGE_KEY) || 'es';
  const next = current === 'es' ? 'en' : 'es';
  translatePage(next);
  return next;
}

export default { initI18n, translatePage, toggleLang };
