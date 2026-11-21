(() => {

  const $ = selector => document.querySelector(selector);

  const els = {

    grid: $('#game-grid'),

    search: $('#search'),

    filters: $('#filters'),

    sort: $('#sort'),

    layout: $('#layout'),

    count: $('#game-count'),

    empty: $('#empty-state'),

    emptyMessage: $('#empty-message'),

    clear: $('#clear-filters'),

    recent: $('#recent'),

    recentRow: $('#recent-row'),

    theme: $('#theme-toggle'),

    toast: $('#toast'),

    clock: $('#clock'),

    launcher: $('#launcher-view'),

    credits: $('#credits-view')

  };



  const KEYS = { theme: 'rpi-theme', favorites: 'rpi-favorites', recent: 'rpi-recent', sort: 'rpi-sort', layout: 'rpi-layout' };

  const FAVORITES = 'Favorites';

  const RECENT_LIMIT = 4;



  try { localStorage.removeItem('gpt-luna-openai-api-key'); }

  catch (error) { console.error('Unable to clear the legacy GPT Luna API key from shared storage:', error); }



  const read = (key, fallback) => {

    try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); } catch (_) { return fallback; }

  };

  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {} };



  const icons = {

    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/></svg>',

    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>',

    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/></svg>',

    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>'

  };



  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

  const slug = title => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const band = rating => (rating <= 3 ? 'low' : rating <= 6 ? 'mid' : 'high');



  const programs = GAMES.map((program, index) => ({ ...program, id: slug(program.title), order: index }));

  const byId = new Map(programs.map(program => [program.id, program]));

  const categories = ['All', ...new Set(programs.map(program => program.category)), FAVORITES];



  const state = {

    filter: 'All',

    query: '',

    sort: read(KEYS.sort, 'featured'),

    layout: read(KEYS.layout, 'grid'),

    favorites: new Set(read(KEYS.favorites, []).filter(id => byId.has(id))),

    recent: read(KEYS.recent, []).filter(id => byId.has(id)),

    light: false

  };

  if (!['featured', 'performance', 'title'].includes(state.sort)) state.sort = 'featured';

  if (!['grid', 'list'].includes(state.layout)) state.layout = 'grid';

  try { state.light = localStorage.getItem(KEYS.theme) === 'light'; } catch (_) {}



  /* ---------- rendering ---------- */



  function cardTemplate(program, index) {

    const favorite = state.favorites.has(program.id);

    const level = band(program.rating);

    const creditLink = program.creditUrl

      ? `<a class="credit" href="${escapeHtml(program.creditUrl)}" target="_blank" rel="noopener noreferrer">by ${escapeHtml(program.credit)}</a>`

      : `<a class="credit" href="#credits">by ${escapeHtml(program.credit)}</a>`;

    const fallback = program.imageFallback ? ` data-fallback="${escapeHtml(program.imageFallback)}"` : '';

    return `<article class="card" data-id="${program.id}" style="--i:${Math.min(index, 12)}">

      <button class="card-main" type="button" data-action="launch" aria-label="Play ${escapeHtml(program.title)}">

        <span class="cover-wrap"><img class="cover" src="${escapeHtml(program.image)}"${fallback} alt="" loading="lazy" decoding="async"><span class="play" aria-hidden="true">${icons.play}</span></span>

        <span class="card-body">

          <span class="card-top"><span class="tag">${escapeHtml(program.category)}</span><span class="score ${level}" title="Performance on low-power devices">${program.rating}<small>/10</small></span></span>

          <span class="title">${escapeHtml(program.title)}</span>

          <span class="desc">${escapeHtml(program.description)}</span>

          <span class="meter ${level}" aria-hidden="true"><i style="width:${Math.max(0, Math.min(10, program.rating)) * 10}%"></i></span>

          <span class="verdict ${level}">${escapeHtml(program.verdict)}</span>

        </span>

      </button>

      <button class="fav" type="button" data-action="favorite" aria-pressed="${favorite}" aria-label="${favorite ? 'Remove' : 'Add'} ${escapeHtml(program.title)} ${favorite ? 'from' : 'to'} favorites" title="${favorite ? 'Remove from favorites' : 'Add to favorites'}">${icons.star}</button>

      ${creditLink}

    </article>`;

  }



  function recentTemplate(program) {

    return `<button class="recent-item" type="button" data-id="${program.id}" data-action="launch" aria-label="Play ${escapeHtml(program.title)}">

      <img src="${escapeHtml(program.image)}" alt="" loading="lazy" decoding="async">

      <span class="recent-text"><span class="title">${escapeHtml(program.title)}</span><span class="verdict ${band(program.rating)}">${escapeHtml(program.verdict)}</span></span>

      <span class="recent-play" aria-hidden="true">${icons.play}</span>

    </button>`;

  }



  function visiblePrograms() {

    const terms = state.query.toLowerCase().split(/\s+/).filter(Boolean);

    const list = programs.filter(program => {

      if (state.filter === FAVORITES ? !state.favorites.has(program.id) : state.filter !== 'All' && program.category !== state.filter) return false;

      const haystack = `${program.title} ${program.description} ${program.category} ${program.credit}`.toLowerCase();

      return terms.every(term => haystack.includes(term));

    });

    if (state.sort === 'performance') list.sort((a, b) => b.rating - a.rating || a.order - b.order);

    else if (state.sort === 'title') list.sort((a, b) => a.title.localeCompare(b.title));

    return list;

  }



  function renderTabs() {

    els.filters.innerHTML = categories.map(category => {

      const total = category === 'All' ? programs.length : category === FAVORITES ? state.favorites.size : programs.filter(program => program.category === category).length;

      const active = category === state.filter;

      return `<button class="tab${active ? ' active' : ''}" type="button" role="tab" aria-selected="${active}" data-filter="${category}">${category}<span>${total}</span></button>`;

    }).join('');

  }



  function renderRecent() {

    const show = state.filter === 'All' && !state.query && state.recent.length > 0;

    els.recent.hidden = !show;

    if (show) els.recentRow.innerHTML = state.recent.slice(0, RECENT_LIMIT).map(id => recentTemplate(byId.get(id))).join('');

  }



  function render() {

    const list = visiblePrograms();

    els.grid.className = `game-grid ${state.layout}`;

    els.grid.innerHTML = list.map(cardTemplate).join('');

    els.grid.querySelectorAll('img[data-fallback]').forEach(image => image.addEventListener('error', () => {

      const fb = image.dataset.fallback;

      if (fb && image.src !== fb) image.src = fb;

    }));

    els.count.textContent = `${list.length} ${list.length === 1 ? 'program' : 'programs'}`;

    els.empty.hidden = list.length > 0;

    if (!list.length) {

      els.emptyMessage.textContent = state.filter === FAVORITES && !state.query

        ? 'No favorites yet. Tap the star on any program to pin it here.'

        : 'No programs match your search.';

      els.clear.hidden = state.filter === FAVORITES && !state.query;

    }

    renderTabs();

    renderRecent();

    els.layout.querySelectorAll('[data-layout]').forEach(button => button.setAttribute('aria-pressed', button.dataset.layout === state.layout));

  }



  /* ---------- actions ---------- */



  let toastTimer;

  function toast(message) {

    els.toast.textContent = message;

    els.toast.hidden = false;

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => { els.toast.hidden = true; }, 3200);

  }



  function addProgramBase(html, program) {

    const head = /<head\b[^>]*>/i.exec(html);

    if (!head) throw new Error('Program HTML has no <head> element.');

    const insertAt = head.index + head[0].length;

    const base = `<base href="${escapeHtml(new URL('.', program.file).href)}">`;

    const romPickerStyle = program.revealRomPicker

      ? '<style>html body #rom-picker.visible { display: flex !important; }</style>'

      : '';

    return `${html.slice(0, insertAt)}${base}${romPickerStyle}${html.slice(insertAt)}`;

  }



  function revealAnimalCrossingRomPicker(html) {
    // Keep the game's original startup behavior: hide the picker while its
    // bundled disc image downloads, then show it only if the download fails.
    const startup = /window\.showRomPicker\s*=\s*showRomPicker\s*,\s*hideRomPicker\s*\(\)/;
    if (!startup.test(html)) {
      throw new Error('Animal Crossing startup changed; refusing to alter its ROM-picker behavior.');
    }

    // Verify that the upstream automatic downloader is still present. Do not
    // replace this promise with Promise.resolve(null): that disables the fetch.
    const autoIso = /var\s+_autoIsoPromise\s*=\s*_fetchIsoParts\s*\(\s*\)\s*\.catch\s*\(\s*function\s*\(\s*\)\s*\{\s*return\s+null\s*;\s*\}\s*\)\s*;/;
    if (!autoIso.test(html)) {
      throw new Error('Animal Crossing automatic disc-image download was not found.');
    }

    const missingIso = /if\s*\(\s*!blob\s*\)\s*\{\s*console\.error\s*\(\s*"\[rom\] game\.iso parts not found"\s*\)\s*;\s*_autoLoaded\s*=\s*false\s*;\s*return\s*;\s*\}/;
    if (!missingIso.test(html)) {
      throw new Error('Animal Crossing download-failure fallback changed.');
    }

    let patched = html.replace(
      missingIso,
      'if (!blob) { var loadingText = document.getElementById("loading-text"); if (loadingText) loadingText.remove(); showRomPicker(); _autoLoaded = false; return; }'
    );

    // The game's ROM import persists asynchronously. Trigger auto-start from
    // the persistence callback (setStartEnabled), not immediately after the
    // async import function returns.
    const startEnabled = /function\s+setStartEnabled\s*\(\s*e\s*\)\s*\{\s*_romImported\s*=\s*!!e\s*,\s*startBtn\s*&&\s*\(\s*startBtn\.disabled\s*=\s*!_romImported\s*\)\s*\}/;
    if (!startEnabled.test(patched)) {
      throw new Error('Animal Crossing ROM-ready callback changed; automatic startup could not be connected.');
    }
    patched = patched.replace(
      startEnabled,
      'function setStartEnabled(e) { _romImported = !!e; if (startBtn) startBtn.disabled = !_romImported; if (_romImported && _autoLoaded) _doAutoStart(); }'
    );

    const importCatch = /\}\s*catch\s*\(e\)\s*\{\s*setRomStatus\("Read failed: "\s*\+\s*\(e\s*&&\s*e\.message\s*\|\|\s*e\)\s*,\s*!0\)\s*,\s*setStartEnabled\(!1\)\s*,\s*console\.error\("\[rom\] handleSelectedFile failed"\s*,\s*e\)\s*\}/;
    if (!importCatch.test(patched)) {
      throw new Error('Animal Crossing import-error fallback changed.');
    }
    patched = patched.replace(
      importCatch,
      '} catch (e) { setRomStatus("Read failed: " + (e && e.message || e), !0); setStartEnabled(!1); console.error("[rom] handleSelectedFile failed", e); if (_autoLoaded) { var loadingText = document.getElementById("loading-text"); if (loadingText) loadingText.remove(); showRomPicker(); _autoLoaded = false; } }'
    );

    const earlyAutoStart = /await\s+handleSelectedFile\(blob\)\s*;\s*if\s*\(_romImported\)\s*_doAutoStart\(\)\s*;/;
    if (!earlyAutoStart.test(patched)) {
      throw new Error('Animal Crossing auto-load completion changed; its startup timing could not be corrected.');
    }
    patched = patched.replace(earlyAutoStart, 'await handleSelectedFile(blob);');

    return patched;
  }

  function patchGeometryDash(html) {
    if (!/new\s+Worker\s*\(/.test(html)) {
      throw new Error('Geometry Dash worker setup changed; its browser compatibility patch could not be applied.');
    }

    const workerPatch = `<script>
(() => {
  const NativeWorker = window.Worker;
  window.Worker = function(url, options) {
    if (!String(url).includes('brotli-worker.js')) {
      return new NativeWorker(url, options);
    }

    const proxy = { onmessage: null, onerror: null };
    let decoderPromise;

    proxy.postMessage = message => {
      decoderPromise ||= import('https://cdn.jsdelivr.net/gh/web-ports/geometry-dash/brotli-decoder.js')
        .then(async module => {
          await module.default();
          return module;
        });
      decoderPromise
        .then(module => module.decompress(new Uint8Array(message.buffer)))
        .then(result => {
          const output = result instanceof Uint8Array ? result : new Uint8Array(result);
          const copy = output.slice().buffer;
          if (proxy.onmessage) proxy.onmessage({ data: { id: message.id, buffer: copy } });
        })
        .catch(error => {
          if (proxy.onmessage) proxy.onmessage({ data: { id: message.id, error: String(error) } });
        });
    };

    proxy.terminate = () => {};
    return proxy;
  };
})();
</script>`;

    const head = /<head\b[^>]*>/i.exec(html);
    if (!head) throw new Error('Geometry Dash HTML has no <head> element.');
    const insertAt = head.index + head[0].length;
    return `${html.slice(0, insertAt)}${workerPatch}${html.slice(insertAt)}`;
  }

  async function streamProgram(popup, program) {

    const response = await fetch(program.file);

    if (!response.ok) throw new Error(`Program request failed with status ${response.status}.`);

    const doc = popup.document;

    if (program.revealRomPicker || program.id === 'geometry-dash') {

      const html = await response.text();

      if (popup.closed) return;

      doc.open();
      const patchedHtml = program.revealRomPicker
        ? revealAnimalCrossingRomPicker(html)
        : patchGeometryDash(html);

      doc.write(addProgramBase(patchedHtml, program));

      doc.close();

      popup.focus();

      return;

    }



    doc.open();

    const reader = response.body && response.body.getReader();

    if (!reader) {

      const html = await response.text();

      if (popup.closed) return;

      doc.write(addProgramBase(html, program));

    } else {

      const decoder = new TextDecoder();

      let pending = '';

      let baseAdded = false;



      while (true) {

        const { done, value } = await reader.read();

        if (popup.closed) {

          reader.cancel().catch(error => console.error('Unable to stop the closed program download:', error));

          return;

        }

        const chunk = decoder.decode(value || new Uint8Array(), { stream: !done });

        if (!baseAdded) {

          pending += chunk;

          if (/<head\b[^>]*>/i.test(pending)) {

            doc.write(addProgramBase(pending, program));

            pending = '';

            baseAdded = true;

          } else if (pending.length > 1024 * 1024) {

            reader.cancel().catch(error => console.error('Unable to stop the invalid program download:', error));

            throw new Error('Program HTML has no <head> element in its first megabyte.');

          }

        } else if (chunk) {

          doc.write(chunk);

        }

        if (done) break;

      }



      if (!baseAdded) throw new Error('Program HTML has no <head> element.');

    }



    doc.close();

    if (!popup.closed) popup.focus();

  }



  function showPopupMessage(popup, title, message, detail = '') {

    if (popup.closed) return;

    const doc = popup.document;

    doc.open();

    doc.write(`<!doctype html>

<html lang="en">

<head>

  <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>${escapeHtml(title)}</title>

  <style>

    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #0b0c12; color: #f4f4f5; font: 16px system-ui, sans-serif; }

    main { max-width: 34rem; padding: 2rem; }

    p, pre { color: #b7b8c2; }

    pre { white-space: pre-wrap; overflow-wrap: anywhere; }

  </style>

</head>

<body><main><h1>${escapeHtml(title)}</h1><p>${escapeHtml(message)}</p>${detail ? `<pre>${escapeHtml(detail)}</pre>` : ''}</main></body>

</html>`);

    doc.close();

  }



  function launch(id) {

    const program = byId.get(id);

    if (!program) return;

    const screenW = window.screen ? window.screen.availWidth : 1280;

    const screenH = window.screen ? window.screen.availHeight : 800;

    const width = Math.min(1280, Math.max(800, Math.floor(screenW * 0.95)));

    const height = Math.min(800, Math.max(600, Math.floor(screenH * 0.95)));

    const left = Math.max(0, Math.floor((screenW - width) / 2));

    const top = Math.max(0, Math.floor((screenH - height) / 2));

    const popup = window.open('about:blank', '_blank', `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);

    if (!popup) { toast('Your browser blocked the program window. Allow popups for RPi WebLauncher and try again.'); return; }



    popup.opener = null;

    state.recent = [id, ...state.recent.filter(item => item !== id)].slice(0, RECENT_LIMIT);

    write(KEYS.recent, state.recent);

    renderRecent();

    toast(`Opening ${program.title}…`);

    showPopupMessage(popup, program.title, 'Loading program…');



    streamProgram(popup, program).catch(error => {

      console.error('Launch error:', error);

      showPopupMessage(popup, `Could not load ${program.title}`, 'Check your connection and try again.', error instanceof Error ? error.message : String(error));

      toast(`Could not load ${program.title}. Check your connection.`);

    });

  }



  function toggleFavorite(id, button) {

    const program = byId.get(id);

    const on = !state.favorites.has(id);

    if (on) state.favorites.add(id); else state.favorites.delete(id);

    write(KEYS.favorites, [...state.favorites]);

    if (state.filter === FAVORITES) { render(); return; }

    button.setAttribute('aria-pressed', on);

    button.setAttribute('aria-label', `${on ? 'Remove' : 'Add'} ${program.title} ${on ? 'from' : 'to'} favorites`);

    button.title = on ? 'Remove from favorites' : 'Add to favorites';

    renderTabs();

  }



  function resetFilters() {

    state.filter = 'All';

    state.query = '';

    els.search.value = '';

    render();

  }



  function applyTheme() {

    document.documentElement.classList.toggle('theme-light', state.light);

    els.theme.innerHTML = state.light ? icons.moon : icons.sun;

    const label = state.light ? 'Switch to dark mode' : 'Switch to light mode';

    els.theme.setAttribute('aria-label', label);

    els.theme.title = label;

    const meta = document.querySelector('meta[name="theme-color"]');

    if (meta) meta.content = state.light ? '#f3f4ef' : '#0b0c12';

  }



  function applyView() {

    const showCredits = location.hash === '#credits';

    els.launcher.hidden = showCredits;

    els.credits.hidden = !showCredits;

    window.scrollTo(0, 0);

  }



  /* ---------- events ---------- */



  els.grid.addEventListener('click', event => {

    const target = event.target.closest('[data-action]');

    const card = event.target.closest('.card');

    if (!target || !card) return;

    if (target.dataset.action === 'launch') launch(card.dataset.id);

    else if (target.dataset.action === 'favorite') toggleFavorite(card.dataset.id, target);

  });



  els.recentRow.addEventListener('click', event => {

    const item = event.target.closest('[data-action="launch"]');

    if (item) launch(item.dataset.id);

  });



  els.filters.addEventListener('click', event => {

    const tab = event.target.closest('[data-filter]');

    if (!tab) return;

    state.filter = tab.dataset.filter;

    render();

    els.filters.querySelector('.active')?.focus({ preventScroll: true });

  });



  els.filters.addEventListener('keydown', event => {

    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;

    const tabs = [...els.filters.querySelectorAll('.tab')];

    const next = tabs[(tabs.indexOf(document.activeElement) + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];

    if (next) { event.preventDefault(); next.click(); }

  });



  els.search.addEventListener('input', () => {

    state.query = els.search.value.trim();

    if (location.hash === '#credits') location.hash = '#library';

    render();

  });

  els.search.addEventListener('keydown', event => {

    if (event.key === 'Escape') { els.search.value = ''; state.query = ''; render(); els.search.blur(); }

  });



  els.sort.value = state.sort;

  els.sort.addEventListener('change', () => { state.sort = els.sort.value; write(KEYS.sort, state.sort); render(); });



  els.layout.addEventListener('click', event => {

    const button = event.target.closest('[data-layout]');

    if (!button) return;

    state.layout = button.dataset.layout;

    write(KEYS.layout, state.layout);

    render();

  });



  els.clear.addEventListener('click', resetFilters);



  els.theme.addEventListener('click', () => {

    state.light = !state.light;

    try { localStorage.setItem(KEYS.theme, state.light ? 'light' : 'dark'); } catch (_) {}

    applyTheme();

  });



  document.addEventListener('keydown', event => {

    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;

    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) return;

    event.preventDefault();

    if (location.hash === '#credits') location.hash = '#library';

    els.search.focus();

    els.search.select();

  });



  window.addEventListener('hashchange', applyView);



  function tick() { els.clock.textContent = new Intl.DateTimeFormat([], { hour: 'numeric', minute: '2-digit' }).format(new Date()); }



  applyTheme();

  render();

  applyView();

  tick();

  setInterval(tick, 30000);

})();
