(() => {
  const $ = selector => document.querySelector(selector);
  const els = {
    grid: $('#game-grid'),
    featured: $('#featured'),
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
    lowPower: $('#low-power'),
    toast: $('#toast'),
    clock: $('#clock'),
    launcher: $('#launcher-view'),
    credits: $('#credits-view'),
    nav: document.querySelectorAll('[data-nav]')
  };

  const KEYS = { favorites: 'rpi-favorites', recent: 'rpi-recent', sort: 'rpi-sort', layout: 'rpi-layout', lowPower: 'rpi-low-power' };
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
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.4-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>'
  };

  const ARROW_SVG = '<svg class="featured-arrow" viewBox="0 0 260 170" aria-hidden="true">' +
    '<path d="M232 10 C 246 80 196 120 66 121" fill="none" stroke="#4a0008" stroke-width="32" stroke-linecap="round"/>' +
    '<path d="M232 10 C 246 80 196 120 66 121" fill="none" stroke="#eb1c24" stroke-width="20" stroke-linecap="round"/>' +
    '<path d="M232 10 C 246 80 196 120 66 121" fill="none" stroke="#ff6b70" stroke-width="5" stroke-linecap="round" opacity=".55"/>' +
    '<polygon points="76,80 10,122 80,162" fill="#eb1c24" stroke="#4a0008" stroke-width="7" stroke-linejoin="round"/></svg>';

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const slug = title => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const band = rating => (rating <= 3 ? 'low' : rating <= 6 ? 'mid' : 'high');
  const BAND_COLOR = { low: '#fd3a40', mid: '#f2b544', high: '#3fd68a' };

  const programs = GAMES.map((program, index) => ({ ...program, id: slug(program.title), order: index }));
  const byId = new Map(programs.map(program => [program.id, program]));
  const categories = ['All', ...new Set(programs.map(program => program.category)), FAVORITES];
  const featured = programs[0];

  const state = {
    filter: 'All',
    query: '',
    sort: read(KEYS.sort, 'featured'),
    layout: read(KEYS.layout, 'grid'),
    favorites: new Set(read(KEYS.favorites, []).filter(id => byId.has(id))),
    recent: read(KEYS.recent, []).filter(id => byId.has(id)),
    lowPower: read(KEYS.lowPower, true) !== false
  };
  if (!['featured', 'performance', 'title'].includes(state.sort)) state.sort = 'featured';
  if (!['grid', 'list'].includes(state.layout)) state.layout = 'grid';

  /* ---------- rendering ---------- */

  function cardTemplate(program, index) {
    const favorite = state.favorites.has(program.id);
    const level = band(program.rating);
    const creditLink = program.creditUrl
      ? `<a class="credit" href="${escapeHtml(program.creditUrl)}" target="_blank" rel="noopener noreferrer">by ${escapeHtml(program.credit)}</a>`
      : `<a class="credit" href="#credits">by ${escapeHtml(program.credit)}</a>`;
    const fallback = program.imageFallback ? ` data-fallback="${escapeHtml(program.imageFallback)}"` : '';
    return `<article class="card" data-id="${program.id}" style="--i:${Math.min(index, 12)};--game-color:${BAND_COLOR[level]}">
      <button class="card-main" type="button" data-action="launch" aria-label="Play ${escapeHtml(program.title)}" title="${escapeHtml(program.description)}">
        <span class="cover-wrap"><img class="cover" src="${escapeHtml(program.image)}"${fallback} alt="" loading="lazy" decoding="async"><span class="play" aria-hidden="true">${icons.play}Play</span><span class="score ${level}" title="Estimated performance on low-power devices">${program.rating}<small>/10</small></span></span>
        <span class="card-body">
          <span class="tag">${escapeHtml(program.category)}</span>
          <span class="title">${escapeHtml(program.title)}</span>
          <span class="desc">${escapeHtml(program.description)}</span>
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

  function renderFeatured(show) {
    els.featured.hidden = !show;
    if (!show || els.featured.dataset.ready) return;
    els.featured.dataset.ready = '1';
    els.featured.innerHTML = `<button class="featured-cover" type="button" data-id="${featured.id}" data-action="launch" aria-label="Play ${escapeHtml(featured.title)}">
        <img src="${escapeHtml(featured.image)}" alt="" decoding="async">
        <span class="play-chip" aria-hidden="true">${icons.play}Play</span>
      </button>
      <div class="featured-info">
        <h2 class="featured-title">${escapeHtml(featured.title)}</h2>
        <p class="featured-desc">${escapeHtml(featured.description)}</p>
        <p class="featured-meta"><span class="score ${band(featured.rating)}">${featured.rating}<small>/10</small></span> ${escapeHtml(featured.verdict)} &middot; by ${escapeHtml(featured.credit)}</p>
        ${ARROW_SVG}
      </div>`;
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
    els.filters.innerHTML = categories.map((category, index) => {
      const total = category === 'All' ? programs.length : category === FAVORITES ? state.favorites.size : programs.filter(program => program.category === category).length;
      const active = category === state.filter;
      return `<button class="slant-btn slant-sm tab${active ? ' is-current' : ''}" style="--i:${index}" type="button" role="tab" aria-selected="${active}" data-filter="${category}"><span>${category}<small>${total}</small></span></button>`;
    }).join('');
  }

  function renderRecent() {
    const show = state.filter === 'All' && !state.query && state.recent.length > 0;
    els.recent.hidden = !show;
    if (show) els.recentRow.innerHTML = state.recent.slice(0, RECENT_LIMIT).map(id => recentTemplate(byId.get(id))).join('');
  }

  function render() {
    const list = visiblePrograms();
    const showFeatured = state.filter === 'All' && !state.query && state.sort === 'featured';
    renderFeatured(showFeatured);
    const cards = showFeatured ? list.filter(program => program !== featured) : list;
    els.grid.className = `game-grid ${state.layout}`;
    els.grid.innerHTML = cards.map(cardTemplate).join('');
    els.grid.querySelectorAll('img[data-fallback]').forEach(image => image.addEventListener('error', () => {
      const fb = image.dataset.fallback;
      if (fb && image.src !== fb) image.src = fb;
    }, { once: true }));
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

  // Runs inside the program window before any of the program's own scripts.
  // Renders at 1x pixel density (a 2x display otherwise draws 4x the pixels)
  // and turns off WebGL multisampling, which costs GPU memory and fill rate.
  // Programs can opt into dropping preserveDrawingBuffer via __rpiNoPreserve.
  const LOW_POWER_SHIM = `<script>(function(){try{
Object.defineProperty(window,'devicePixelRatio',{get:function(){return 1},configurable:true});
function wrap(proto){if(!proto||!proto.getContext)return;var get=proto.getContext;proto.getContext=function(type,attrs){
if(/webgl/i.test(String(type))){attrs=Object.assign({},attrs||{},{antialias:false});if(window.__rpiNoPreserve)attrs.preserveDrawingBuffer=false;}
return get.call(this,type,attrs);};}
wrap(window.HTMLCanvasElement&&HTMLCanvasElement.prototype);wrap(window.OffscreenCanvas&&OffscreenCanvas.prototype);
}catch(e){console.warn('[RPi WebLauncher] low-power shim failed',e);}})();</script>`;

  function addProgramBase(html, program) {
    const head = /<head\b[^>]*>/i.exec(html);
    if (!head) throw new Error('Program HTML has no <head> element.');
    const insertAt = head.index + head[0].length;
    const base = `<base href="${escapeHtml(new URL('.', program.file).href)}">`;
    const romPickerStyle = program.revealRomPicker
      ? '<style>html body #rom-picker.visible { display: flex !important; }</style>'
      : '';
    const shim = state.lowPower ? LOW_POWER_SHIM : '';
    return `${html.slice(0, insertAt)}${base}${shim}${romPickerStyle}${html.slice(insertAt)}`;
  }

  // Animal Crossing hard-codes a 1920x1440 canvas on desktop (9x the
  // GameCube's 640x480) and forces preserveDrawingBuffer on every WebGL
  // context so its optional CRT/ASCII filters can copy each frame. On
  // low-power GPUs or software WebGL that combination can take seconds per
  // frame. These patches are best-effort: if upstream changes, skip them.
  function lightenAnimalCrossing(html) {
    const canvasSize = /\?\s*720\s*:\s*1920(\s*,\s*FIXED_CANVAS_H\s*=\s*_isMobile\s*)\?\s*540\s*:\s*1440/;
    if (canvasSize.test(html)) html = html.replace(canvasSize, '? 640 : 640$1? 480 : 480');
    else console.warn('[RPi WebLauncher] Animal Crossing canvas size changed upstream; leaving it as-is.');
    // Keep preserveDrawingBuffer only when a display filter is turned on.
    const noPreserve = `<script>window.__rpiNoPreserve=(function(){try{var s=JSON.parse(localStorage.getItem('acgc.postfx.v1')||'{}');return !s.mode||s.mode==='off';}catch(_){return true;}})();</script>`;
    const head = /<head\b[^>]*>/i.exec(html);
    return head ? `${html.slice(0, head.index + head[0].length)}${noPreserve}${html.slice(head.index + head[0].length)}` : html;
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

  function patchProgram(html, program) {
    if (program.revealRomPicker) {
      const patched = revealAnimalCrossingRomPicker(html);
      return state.lowPower ? lightenAnimalCrossing(patched) : patched;
    }
    return patchGeometryDash(html);
  }

  async function streamProgram(popup, program) {
    const response = await fetch(program.file);
    if (!response.ok) throw new Error(`Program request failed with status ${response.status}.`);
    const doc = popup.document;

    if (program.revealRomPicker || program.id === 'geometry-dash') {
      const html = await response.text();
      if (popup.closed) return;
      doc.open();
      doc.write(addProgramBase(patchProgram(html, program), program));
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
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; color: #f4f6fb; font: 16px system-ui, sans-serif;
      background: radial-gradient(ellipse 70% 60% at 0% 0%, rgba(253,58,64,.35), transparent 70%), radial-gradient(ellipse 70% 60% at 100% 100%, rgba(44,138,255,.35), transparent 70%), #06070d; }
    main { max-width: 34rem; padding: 2rem; }
    h1 { margin: 0 0 .5rem; text-transform: uppercase; letter-spacing: .04em; }
    p, pre { color: #a9b1c6; }
    pre { white-space: pre-wrap; overflow-wrap: anywhere; }
  </style>
</head>
<body><main><h1>${escapeHtml(title)}</h1><p>${escapeHtml(message)}</p>${detail ? `<pre>${escapeHtml(detail)}</pre>` : ''}</main></body>
</html>`);
    doc.close();
  }

  // In low-power mode only one program runs at a time: opening another closes
  // the previous window so its memory (often hundreds of MB) is released.
  let activeProgram = null;

  function launch(id) {
    const program = byId.get(id);
    if (!program) return;
    let closedTitle = '';
    if (state.lowPower && activeProgram && !activeProgram.popup.closed) {
      closedTitle = activeProgram.title;
      activeProgram.popup.close();
    }
    const screenW = window.screen ? window.screen.availWidth : 1280;
    const screenH = window.screen ? window.screen.availHeight : 800;
    const width = Math.min(1280, Math.max(800, Math.floor(screenW * 0.95)));
    const height = Math.min(800, Math.max(600, Math.floor(screenH * 0.95)));
    const left = Math.max(0, Math.floor((screenW - width) / 2));
    const top = Math.max(0, Math.floor((screenH - height) / 2));
    const popup = window.open('about:blank', '_blank', `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);
    if (!popup) { toast('Your browser blocked the program window. Allow popups for RPi WebLauncher and try again.'); return; }

    popup.opener = null;
    activeProgram = { popup, title: program.title };
    state.recent = [id, ...state.recent.filter(item => item !== id)].slice(0, RECENT_LIMIT);
    write(KEYS.recent, state.recent);
    renderRecent();
    toast(closedTitle ? `Closed ${closedTitle} to free memory. Opening ${program.title}…` : `Opening ${program.title}…`);
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

  function applyLowPower() {
    els.lowPower.setAttribute('aria-pressed', state.lowPower);
    els.lowPower.querySelector('b').textContent = state.lowPower ? 'On' : 'Off';
    els.lowPower.title = state.lowPower
      ? 'Low-power mode is on: programs render at 1x pixel density without antialiasing, and only one program runs at a time.'
      : 'Low-power mode is off: programs run with their own graphics settings.';
  }

  function applyView() {
    const showCredits = location.hash === '#credits';
    els.launcher.hidden = showCredits;
    els.credits.hidden = !showCredits;
    els.nav.forEach(link => {
      const current = link.dataset.nav === (showCredits ? 'credits' : 'library');
      link.classList.toggle('is-current', current);
      if (current) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
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

  [els.recentRow, els.featured].forEach(container => container.addEventListener('click', event => {
    const item = event.target.closest('[data-action="launch"]');
    if (item) launch(item.dataset.id);
  }));

  els.filters.addEventListener('click', event => {
    const tab = event.target.closest('[data-filter]');
    if (!tab) return;
    state.filter = tab.dataset.filter;
    render();
    els.filters.querySelector('.is-current')?.focus({ preventScroll: true });
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

  els.lowPower.addEventListener('click', () => {
    state.lowPower = !state.lowPower;
    write(KEYS.lowPower, state.lowPower);
    applyLowPower();
    toast(state.lowPower ? 'Low-power mode on. Applies to programs you open next.' : 'Low-power mode off. Programs use their own graphics settings.');
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

  const clockFormat = new Intl.DateTimeFormat([], { hour: 'numeric', minute: '2-digit' });
  function tick() { if (!document.hidden) els.clock.textContent = clockFormat.format(new Date()); }
  document.addEventListener('visibilitychange', tick);

  applyLowPower();
  render();
  applyView();
  tick();
  setInterval(tick, 30000);
})();
