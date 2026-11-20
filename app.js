const grid = document.querySelector('#game-grid');
const search = document.querySelector('#search');
const filters = document.querySelector('#filters');
const count = document.querySelector('#game-count');
const empty = document.querySelector('#empty-state');
const themeToggle = document.querySelector('#theme-toggle');
let activeFilter = 'All';
let isLightMode = false;
try { isLightMode = localStorage.getItem('rpi-theme') === 'light'; } catch (_) {}

filters.innerHTML = ['All','Puzzle','Engaging','Apps'].map((category, index) => `<button class="filter-pill ${index === 0 ? 'active' : ''}" type="button" role="tab" aria-selected="${index === 0}" data-filter="${category}">${category}</button>`).join('');

function cardTemplate(program, index) {
  const band = program.rating <= 3 ? 'performance-low' : program.rating <= 6 ? 'performance-mid' : 'performance-high';
  const credit = program.creditUrl
    ? `<a class="credit-link" href="${program.creditUrl}" target="_blank" rel="noopener noreferrer">by ${program.credit}</a>`
    : `<a class="credit-link view-link" href="#credits">by ${program.credit}</a>`;
  const fallback = program.imageFallback ? `data-fallback="${program.imageFallback}"` : '';
  const escapedTitle = (program.title || '').replace(/"/g, '&quot;');
  return `<article class="game-card" style="--delay:${index * 55}ms"><button class="game-launch" type="button" data-file="${program.file}" data-title="${escapedTitle}" aria-label="Launch ${program.title}"><div class="cover-wrap"><img class="cover" src="${program.image}" ${fallback} alt="${program.title} icon" loading="lazy"><span class="play-button" aria-hidden="true">&#9654;</span></div><div class="card-body"><div class="card-meta"><span class="genre">${program.category}</span><span class="rating"><small>Est. performance</small><strong>${program.rating}</strong><small>/10</small></span></div><h2>${program.title}</h2><p>${program.description}</p><div class="card-bottom"><span class="verdict ${band}"><i></i>${program.verdict}</span><span class="launch-label">Play <span>&#8599;</span></span></div></div></button>${credit}</article>`;
}

function render() {
  const term = search.value.trim().toLowerCase();
  const visible = GAMES.filter(program => (activeFilter === 'All' || program.category === activeFilter) && `${program.title} ${program.description} ${program.category}`.toLowerCase().includes(term));
  grid.innerHTML = visible.map(cardTemplate).join('');
  count.textContent = `${visible.length} ${visible.length === 1 ? 'program' : 'programs'}`;
  empty.hidden = visible.length > 0;
  grid.querySelectorAll('img[data-fallback]').forEach(image => image.addEventListener('error', () => {
    const fallback = image.dataset.fallback;
    if (image.src !== fallback) image.src = fallback;
  }));
  grid.querySelectorAll('.game-launch').forEach(button => button.addEventListener('click', () => {
    launch(button.dataset.file, button.dataset.title);
  }));
  bindViewLinks();
}

function applyView(view) {
  document.querySelector('#launcher-view').hidden = view !== 'launcher';
  document.querySelector('#credits-view').hidden = view !== 'credits';
  window.scrollTo(0, 0);
}

function showView(view) {
  document.body.classList.add('view-switching');
  window.setTimeout(() => { applyView(view); document.body.classList.remove('view-switching'); }, 180);
}

function bindViewLinks() {
  document.querySelectorAll('.view-link').forEach(link => {
    if (link.dataset.bound) return;
    link.dataset.bound = 'true';
    link.addEventListener('click', event => { event.preventDefault(); showView(link.getAttribute('href') === '#credits' ? 'credits' : 'launcher'); });
  });
}

function launch(file, title = 'RPi WebLauncher') {
  const screenW = window.screen ? window.screen.availWidth : 1280;
  const screenH = window.screen ? window.screen.availHeight : 800;
  const width = Math.min(1280, Math.max(800, Math.floor(screenW * 0.95)));
  const height = Math.min(800, Math.max(600, Math.floor(screenH * 0.95)));
  const left = Math.max(0, Math.floor((screenW - width) / 2));
  const top = Math.max(0, Math.floor((screenH - height) / 2));
  const popup = window.open('about:blank', '_blank', `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);
  if (!popup) {
    window.alert('Your browser blocked the program window. Please allow popups for RPi WebLauncher.');
    return;
  }
  try {
    const doc = popup.document;
    doc.open();
    doc.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #000;
    }
    iframe {
      border: 0;
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
</head>
<body>
  <iframe src="${file}" allowfullscreen="true" allow="autoplay; fullscreen; gamepad; cross-origin-isolated; camera; microphone; clipboard-read; clipboard-write"></iframe>
</body>
</html>`);
    doc.close();
    popup.focus();
  } catch (err) {
    console.error('Launch error:', err);
    popup.location.href = file;
  }
}

function updateThemeIcon() {
  themeToggle.innerHTML = isLightMode ? '&#9790;' : '&#9788;';
  themeToggle.setAttribute('aria-label', isLightMode ? 'Switch to dark mode' : 'Switch to light mode');
  themeToggle.title = isLightMode ? 'Switch to dark mode' : 'Switch to light mode';
}

filters.addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; activeFilter = button.dataset.filter; filters.querySelectorAll('.filter-pill').forEach(pill => { const active = pill === button; pill.classList.toggle('active', active); pill.setAttribute('aria-selected', active); }); render(); });
search.addEventListener('input', render);
themeToggle.addEventListener('click', () => { isLightMode = !isLightMode; document.body.classList.toggle('light-mode', isLightMode); document.documentElement.classList.toggle('theme-light', isLightMode); try { localStorage.setItem('rpi-theme', isLightMode ? 'light' : 'dark'); } catch (_) {} updateThemeIcon(); });
document.body.classList.toggle('light-mode', isLightMode);
updateThemeIcon();
render();
applyView('launcher');
function tick() { document.querySelector('#clock').textContent = new Intl.DateTimeFormat([], { hour:'numeric', minute:'2-digit' }).format(new Date()); }
tick();
setInterval(tick, 30000);
