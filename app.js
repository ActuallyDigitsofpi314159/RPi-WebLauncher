const grid = document.querySelector('#game-grid');
const search = document.querySelector('#search');
const filters = document.querySelector('#filters');
const count = document.querySelector('#game-count');
const empty = document.querySelector('#empty-state');
const themeToggle = document.querySelector('#theme-toggle');
let activeFilter = 'All';
let isLightMode = false;
try { isLightMode = localStorage.getItem('rpi-theme') === 'light'; } catch (_) {}

const categories = ['All', 'Puzzle', 'Engaging', 'Apps'];
filters.innerHTML = categories.map((category, index) => `<button class="filter-pill ${index === 0 ? 'active' : ''}" type="button" role="tab" aria-selected="${index === 0}" data-filter="${category}">${category}</button>`).join('');

function cardTemplate(game, index) {
  const performanceClass = game.rating <= 3 ? 'performance-low' : game.rating <= 6 ? 'performance-mid' : 'performance-high';
  return `<article class="game-card ${game.warning ? 'has-warning' : ''}" style="--delay: ${index * 55}ms">
    <button class="game-launch" type="button" data-file="${game.file}" aria-label="Launch ${game.title}">
      <div class="cover-wrap"><img class="cover" src="${game.image}" alt="${game.title} cover art" loading="lazy"><span class="play-button" aria-hidden="true">&#9654;</span></div>
      <div class="card-body"><div class="card-meta"><span class="genre">${game.category}</span><span class="rating"><small>Performance</small><strong>${game.rating}</strong><small>/10</small></span></div><h2>${game.title}</h2><p>${game.description}</p><div class="card-bottom"><span class="verdict ${performanceClass}"><i></i>${game.verdict}</span><span class="launch-label">Play <span>&#8599;</span></span></div></div>
    </button>
    <a class="credit-link" href="${game.creditUrl}">by ${game.creditName}</a>
  </article>`;
}

function render() {
  const term = search.value.trim().toLowerCase();
  const visible = GAMES.filter(game => (activeFilter === 'All' || game.category === activeFilter) && `${game.title} ${game.description} ${game.category}`.toLowerCase().includes(term));
  grid.innerHTML = visible.map(cardTemplate).join('');
  count.textContent = `${visible.length} ${visible.length === 1 ? 'program' : 'programs'}`;
  empty.hidden = visible.length > 0;
  grid.querySelectorAll('.game-launch').forEach(button => button.addEventListener('click', () => launch(button.dataset.file)));
  bindViewLinks();
}

function applyView(view) {
  const launcher = document.querySelector('#launcher-view');
  const credits = document.querySelector('#credits-view');
  launcher.hidden = view !== 'launcher';
  credits.hidden = view !== 'credits';
  window.scrollTo(0, 0);
}

function showView(view, updateHash = true) {
  if (updateHash) history.pushState(null, '', view === 'credits' ? '#credits' : '#launcher');
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

function launch(file) {
  const gameUrl = new URL(file, window.location.href).href;
  const popup = window.open(gameUrl, '_blank', 'popup=yes,width=1280,height=800,resizable=yes,scrollbars=yes');
  if (!popup) {
    window.alert('Your browser blocked the game window. Please allow popups for RPi WebLauncher.');
    return;
  }
  popup.focus();
}

function updateThemeIcon() {
  themeToggle.innerHTML = isLightMode ? '&#9790;' : '&#9788;';
  themeToggle.setAttribute('aria-label', isLightMode ? 'Switch to dark mode' : 'Switch to light mode');
  themeToggle.title = isLightMode ? 'Switch to dark mode' : 'Switch to light mode';
}

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  activeFilter = button.dataset.filter;
  filters.querySelectorAll('.filter-pill').forEach(pill => { const active = pill === button; pill.classList.toggle('active', active); pill.setAttribute('aria-selected', active); });
  render();
});

search.addEventListener('input', render);
themeToggle.addEventListener('click', () => { isLightMode = !isLightMode; document.body.classList.toggle('light-mode', isLightMode); document.documentElement.classList.toggle('theme-light', isLightMode); try { localStorage.setItem('rpi-theme', isLightMode ? 'light' : 'dark'); } catch (_) {} updateThemeIcon(); });

function tick() { document.querySelector('#clock').textContent = new Intl.DateTimeFormat([], { hour: 'numeric', minute: '2-digit' }).format(new Date()); }

document.body.classList.toggle('light-mode', isLightMode);
updateThemeIcon();
render();
bindViewLinks();
window.addEventListener('popstate', () => applyView(window.location.hash === '#credits' ? 'credits' : 'launcher'));
window.addEventListener('hashchange', () => applyView(window.location.hash === '#credits' ? 'credits' : 'launcher'));
applyView(window.location.hash === '#credits' ? 'credits' : 'launcher');
tick();
setInterval(tick, 30000);
