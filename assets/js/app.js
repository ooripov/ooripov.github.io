/* =========================
   Lang + helpers
========================= */

function getSavedLang() {
  // 1) allow ?lang=en|ru (handy for testing / share links)
  const params = new URLSearchParams(location.search);
  const qLang = (params.get('lang') || '').toLowerCase();
  if (qLang === 'ru' || qLang === 'en') return qLang;

  // 2) localStorage
  const saved = (localStorage.getItem('lang') || '').toLowerCase();
  if (saved === 'ru' || saved === 'en') return saved;

  // 3) navigator.languages (more accurate than navigator.language)
  const langs = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || 'ru'];

  const first = String(langs[0] || 'ru').toLowerCase();
  return first.startsWith('en') ? 'en' : 'ru';
}

function i18nKey(lang, key, fallback) {
  return (window.I18N?.[lang]?.[key]) || fallback || '';
}

function applyLangInstant(lang) {
  const dict = window.I18N?.[lang];
  if (!dict) return;

  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // title
  const titleEl = document.querySelector('[data-i18n-title="doc_title"]');
  if (titleEl) titleEl.textContent = dict.doc_title || titleEl.textContent;

  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (typeof value === 'string') el.textContent = value;
  });

  // active buttons (both in header and splash if present)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });
}

let langTimer = null;
function setLangSmooth(lang) {
  if (!window.I18N?.[lang]) return;
  if (langTimer) clearTimeout(langTimer);

  // already selected
  if (getSavedLang() === lang) return;

  document.body.classList.add('lang-fade');

  langTimer = setTimeout(() => {
    applyLangInstant(lang);

    // rerender dynamic on current page
    renderDynamic();

    // smooth return
    requestAnimationFrame(() => {
      document.body.classList.remove('lang-fade');
    });
  }, 170);
}

function normalizePhone(p) {
  return String(p || '').replace(/\s|\(|\)|-/g, '');
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }
}

function buildMapUrl(q) {
  const query = encodeURIComponent(q || 'Khujand');
  return 'https://www.google.com/maps/search/?api=1&query=' + query;
}

function qrUrl(data) {
  return 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(data);
}

/* =========================
   Modal (shared)
========================= */

let modalState = { open: false, spotId: null, giftId: null };

function allSpots() {
  return (window.MODERN_SPOTS || []).concat(window.OLD_SPOTS || []);
}
function findSpotById(id) {
  return allSpots().find(s => s.id === id) || null;
}
function findGiftById(id) {
  return (window.GIFTS || []).find(g => g.id === id) || null;
}

function getSpotTitle(spot, lang) {
  return lang === 'en' ? (spot.title_en || spot.title_ru) : (spot.title_ru || spot.title_en);
}
function getSpotStory(spot, lang) {
  return lang === 'en' ? (spot.story_en || spot.story_ru) : (spot.story_ru || spot.story_en);
}
function getGiftTitle(g, lang) {
  return lang === 'en' ? (g.title_en || g.title_ru) : (g.title_ru || g.title_en);
}
function getGiftDesc(g, lang) {
  return lang === 'en' ? (g.desc_en || g.desc_ru) : (g.desc_ru || g.desc_en);
}
function getGiftPrice(g, lang) {
  return lang === 'en' ? (g.price_en || g.price_ru) : (g.price_ru || g.price_en);
}

function openModalCommon({ heroImg, titleText, bodyNodes, actionUrl, actionLabel }) {
  const modal = document.getElementById('placeModal');
  if (!modal) return;

  const hero = document.getElementById('modalHero');
  const title = document.getElementById('modalTitle');
  const text = document.getElementById('modalText');
  const qr = document.getElementById('modalQr');
  const btn = document.getElementById('modalMapBtn');

  if (hero) hero.style.backgroundImage = `url('${heroImg || '../assets/img/Khujand.png'}')`;
  if (title) title.textContent = titleText || '—';

  if (text) {
    text.innerHTML = '';
    (bodyNodes || []).forEach(n => text.appendChild(n));
  }

  if (btn) {
    btn.href = actionUrl || '#';
    btn.textContent = actionLabel || '';
  }
  if (qr) qr.src = qrUrl(actionUrl || '');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.focus();
}

function openPlaceModal(spotId) {
  const spot = findSpotById(spotId);
  if (!spot) return;
  const lang = getSavedLang();

  const p = document.createElement('p');
  p.className = 'modal-text';
  p.textContent = getSpotStory(spot, lang) || '';

  const mapUrl = spot.mapUrl || buildMapUrl(getSpotTitle(spot, 'en') || 'Khujand');

  modalState = { open: true, spotId, giftId: null };
  openModalCommon({
    heroImg: spot.img,
    titleText: getSpotTitle(spot, lang),
    bodyNodes: [p],
    actionUrl: mapUrl,
    actionLabel: i18nKey(lang, 'btn_open_map', 'Open in Maps')
  });
}

function openGiftModal(giftId) {
  const g = findGiftById(giftId);
  if (!g) return;
  const lang = getSavedLang();

  const priceEl = document.createElement('p');
  priceEl.className = 'modal-price';
  priceEl.textContent = getGiftPrice(g, lang) || '';

  const descEl = document.createElement('p');
  descEl.className = 'modal-text';
  descEl.textContent = getGiftDesc(g, lang) || '';

  const url = g.buyUrl || buildMapUrl('Khujand souvenirs');

  modalState = { open: true, spotId: null, giftId };
  openModalCommon({
    heroImg: g.img,
    titleText: getGiftTitle(g, lang),
    bodyNodes: [priceEl, descEl],
    actionUrl: url,
    actionLabel: i18nKey(lang, 'btn_buy', 'Buy / Contact')
  });
}

function closeModal() {
  const modal = document.getElementById('placeModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalState = { open: false, spotId: null, giftId: null };
}

/* =========================
   Dynamic renderers
========================= */

function createPlaceCard(item, lang) {
  const name = (lang === 'en' ? item.name_en : item.name_ru) || item.name_ru || item.name_en || '';
  const desc = (lang === 'en' ? item.desc_en : item.desc_ru) || item.desc_ru || item.desc_en || '';

  const card = document.createElement('div');
  card.className = 'place-card';

  const head = document.createElement('div');
  head.className = 'place-head';

  const left = document.createElement('div');
  const h = document.createElement('div');
  h.className = 'place-title';
  h.textContent = name || '—';

  const p = document.createElement('div');
  p.className = 'place-sub';
  p.textContent = desc || '';

  left.appendChild(h);
  if (desc) left.appendChild(p);
  head.appendChild(left);
  card.appendChild(head);

  const meta = document.createElement('div');
  meta.className = 'place-meta';

  const addRow = (k, v) => {
    if (!v) return;
    const row = document.createElement('div');
    row.className = 'meta-row';
    const kk = document.createElement('div');
    kk.className = 'meta-k';
    kk.textContent = k;
    const vv = document.createElement('div');
    vv.textContent = v;
    row.appendChild(kk);
    row.appendChild(vv);
    meta.appendChild(row);
  };

  addRow(i18nKey(lang, 'field_address', 'Address'), item.address);
  addRow(i18nKey(lang, 'field_hours', 'Hours'), item.hours);
  addRow(i18nKey(lang, 'field_phone', 'Phone'), item.phone);

  if (meta.childElementCount) card.appendChild(meta);

  const actions = document.createElement('div');
  actions.className = 'place-actions';

  const phone = normalizePhone(item.phone);
  const whatsapp = normalizePhone(item.whatsapp);

  if (item.mapQuery || item.address) {
    const a = document.createElement('a');
    a.className = 'pill';
    a.target = '_blank';
    a.rel = 'noopener';
    a.href = buildMapUrl(item.mapQuery || item.address);
    a.textContent = i18nKey(lang, 'btn_map', 'Map');
    actions.appendChild(a);
  }

  if (whatsapp) {
    const wa = whatsapp.startsWith('+') ? whatsapp.slice(1) : whatsapp;
    const a = document.createElement('a');
    a.className = 'pill';
    a.target = '_blank';
    a.rel = 'noopener';
    a.href = 'https://wa.me/' + wa;
    a.textContent = i18nKey(lang, 'btn_whatsapp', 'WhatsApp');
    actions.appendChild(a);
  }

  if (phone) {
    const a = document.createElement('a');
    a.className = 'pill';
    a.href = 'tel:' + phone;
    a.textContent = i18nKey(lang, 'btn_call', 'Call');
    actions.appendChild(a);

    const b = document.createElement('button');
    b.className = 'pill';
    b.type = 'button';
    b.textContent = i18nKey(lang, 'btn_copy', 'Copy');
    b.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation(); // FIX: чтобы не было “сквозных” кликов
      const ok = await copyText(item.phone || '');
      const old = b.textContent;
      if (ok) b.textContent = i18nKey(lang, 'copied', 'Copied');
      setTimeout(() => (b.textContent = old), 900);
    });
    actions.appendChild(b);
  }

  if (actions.childElementCount) card.appendChild(actions);
  return card;
}

function renderDirectoryIfAny() {
  const key = document.body.getAttribute('data-content-key');
  if (!key) return;

  const items = window.CONTENT?.[key];
  if (!items || !items.length) return;

  const wrap = document.getElementById('placesWrap');
  if (!wrap) return;

  const lang = getSavedLang();
  wrap.innerHTML = '';
  items.forEach(it => wrap.appendChild(createPlaceCard(it, lang)));
}

function renderModernGridIfAny() {
  const grid = document.getElementById('modern-grid');
  if (!grid) return;
  const lang = getSavedLang();
  grid.innerHTML = '';

  (window.MODERN_SPOTS || []).forEach(spot => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'card spot-card';
    btn.style.height = '190px';
    btn.style.backgroundImage = `url('${spot.img || '../assets/img/Khujand.png'}')`;

    const h2 = document.createElement('h2');
    h2.textContent = getSpotTitle(spot, lang);
    btn.appendChild(h2);

    btn.addEventListener('click', () => openPlaceModal(spot.id));
    grid.appendChild(btn);
  });
}

function renderOldGridIfAny() {
  const grid = document.getElementById('old-grid');
  if (!grid) return;
  const lang = getSavedLang();
  grid.innerHTML = '';

  (window.OLD_SPOTS || []).forEach(spot => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'card spot-card';
    btn.style.height = '190px';
    btn.style.backgroundImage = `url('${spot.img || '../assets/img/Khujand.png'}')`;

    const h2 = document.createElement('h2');
    h2.textContent = getSpotTitle(spot, lang);
    btn.appendChild(h2);

    btn.addEventListener('click', () => openPlaceModal(spot.id));
    grid.appendChild(btn);
  });
}

function renderGiftsGridIfAny() {
  const grid = document.getElementById('gift-grid');
  if (!grid) return;
  const lang = getSavedLang();
  grid.innerHTML = '';

  (window.GIFTS || []).forEach(g => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'card spot-card';
    btn.style.height = '190px';
    btn.style.backgroundImage = `url('${g.img || '../assets/img/Khujand.png'}')`;

    const h2 = document.createElement('h2');
    h2.textContent = getGiftTitle(g, lang);
    btn.appendChild(h2);

    btn.addEventListener('click', () => openGiftModal(g.id));
    grid.appendChild(btn);
  });
}

function renderDynamic() {
  renderDirectoryIfAny();
  renderModernGridIfAny();
  renderOldGridIfAny();
  renderGiftsGridIfAny();
  renderIntercityIfAny();

  // if modal open — refresh content to new lang
  if (modalState?.open) {
    if (modalState.spotId) openPlaceModal(modalState.spotId);
    if (modalState.giftId) openGiftModal(modalState.giftId);
    if (modalState?.open && modalState.routeId) openIntercityModal(modalState.routeId);
  }
}

/* =========================
   Splash (only index)
========================= */

const SPLASH_KEY = 'splashSeen';

function hasSeenSplash() {
  return localStorage.getItem(SPLASH_KEY) === '1';
}
function markSplashSeen() {
  localStorage.setItem(SPLASH_KEY, '1');
}

function hideSplashIfAny() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  document.body.classList.add('splash-closing');
  splash.classList.add('closing');

  const onEnd = (e) => {
    if (e.propertyName !== 'transform') return;
    splash.removeEventListener('transitionend', onEnd);

    splash.style.display = 'none';
    document.body.classList.remove('splash-closing');
  };

  splash.addEventListener('transitionend', onEnd);
}


/* =========================
   init
========================= */

document.addEventListener('DOMContentLoaded', () => {
  // init lang
  applyLangInstant(getSavedLang());

  // lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLangSmooth(btn.dataset.lang));
  });

  // modal events (if exists)
  const modalEl = document.getElementById('placeModal');
  if (modalEl) {
    modalEl.addEventListener('click', (e) => {
      if (e.target && e.target.getAttribute && e.target.getAttribute('data-modal-close') === '1') {
        closeModal();
      }
    });
  }
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // splash close (only on index where splash exists)
    const splash = document.getElementById('splash');
  if (splash) {
    // определяем, что это именно F5 / Reload
    const navEntry = performance.getEntriesByType?.('navigation')?.[0];
    const isReload = navEntry && navEntry.type === 'reload';

    const hash = (location.hash && location.hash.length > 1) ? location.hash : '#home';

    /**
     * Логика:
     * - "Домой" ведёт на index.html#home → splash НЕ показываем (если это не reload)
     * - F5 (reload) → splash показываем всегда
     */
    if (hash === '#home' && !isReload) {
      markSplashSeen();
      hideSplashIfAny();
    }

    splash.addEventListener('click', (e) => {
      if (e.target.closest('.lang-switch')) return;
      markSplashSeen();
      hideSplashIfAny();

      // если был #splash / пусто — переводим на #home
      const h = (location.hash && location.hash.length > 1) ? location.hash : '#home';
      if (h === '#splash' || h === '#') {
        history.replaceState(null, '', '#home');
      }
    });

    splash.addEventListener('keydown', (e) => {
      if (e.target.closest && e.target.closest('.lang-switch')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        markSplashSeen();
        hideSplashIfAny();
        if (location.hash === '#splash' || location.hash === '#') {
          history.replaceState(null, '', '#home');
        }
      }
    });
  }

/* ===== Smooth page navigation ===== */

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href');

  // пропускаем внешние ссылки, якоря и javascript:
  if (!href || href.startsWith('#') || href.startsWith('javascript:') || link.target === '_blank') return;

  // только для внутренних html-страниц
  if (!href.endsWith('.html') && !href.includes('.html#')) return;

  e.preventDefault();

  document.body.classList.add('page-leaving');

  setTimeout(() => {
    window.location.href = href;
  }, 350); // чуть меньше чем CSS transition
});

  // render dynamic parts
  renderDynamic();

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('authorModal');
  if (!modal) return;

  const openBtn =
    document.getElementById('openAuthorBtn') ||
    document.getElementById('authorBtn'); // на случай старого id

  const closeBtn = document.getElementById('closeAuthorModal');
  const backdrop = document.getElementById('authorBackdrop');

  const open = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  };

  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
});
});



function getIntercityTitle(r, lang){
  return lang === 'en' ? (r.title_en || r.title_ru) : (r.title_ru || r.title_en);
}

function openIntercityModal(routeId){
  const r = (window.INTERCITY || []).find(x => x.id === routeId);
  if (!r) return;

  const lang = getSavedLang();

  const block = document.createElement('div');

  const add = (label, value) => {
    if (!value) return;
    const p = document.createElement('p');
    p.className = 'modal-text';
    p.style.margin = '0 0 10px';
    p.innerHTML = `<strong>${label}:</strong> ${value}`;
    block.appendChild(p);
  };

  add(i18nKey(lang,'intercity_price','Price'), lang === 'en' ? r.price_en : r.price_ru);
  add(i18nKey(lang,'intercity_time','Travel time'), lang === 'en' ? r.time_en : r.time_ru);
  add(i18nKey(lang,'intercity_where','Where to depart'), lang === 'en' ? r.where_en : r.where_ru);
  add(i18nKey(lang,'intercity_tips','Tips'), lang === 'en' ? r.tips_en : r.tips_ru);

  const mapUrl = buildMapUrl(r.mapQuery || getIntercityTitle(r, 'en') || 'Khujand');

  modalState = { ...(modalState||{}), open:true, routeId, spotId:null, giftId:null };

  openModalCommon({
    heroImg: r.img || '../assets/img/Khujand.png',
    titleText: getIntercityTitle(r, lang),
    bodyNodes: Array.from(block.childNodes),
    actionUrl: mapUrl,
    actionLabel: i18nKey(lang, 'btn_open_map', 'Open in Maps')
  });
}

function renderIntercityIfAny(){
  if (!document.body.hasAttribute('data-intercity')) return;

  const grid = document.getElementById('intercity-grid');
  if (!grid) return;

  const lang = getSavedLang();
  grid.innerHTML = '';

  (window.INTERCITY || []).forEach(r => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'card spot-card';
    btn.style.height = '190px';
    btn.style.backgroundImage = `url('${r.img || '../assets/img/Khujand.png'}')`;

    const h2 = document.createElement('h2');
    h2.textContent = getIntercityTitle(r, lang);
    btn.appendChild(h2);

    btn.addEventListener('click', () => openIntercityModal(r.id));
    grid.appendChild(btn);
  });
}
