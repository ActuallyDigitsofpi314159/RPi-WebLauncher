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
  return `<article class="game-card" style="--delay:${index * 55}ms"><button class="game-launch" type="button" data-file="${program.file}" aria-label="Launch ${program.title}"><div class="cover-wrap"><img class="cover" src="${program.image}" alt="${program.title} cover art" loading="lazy"><span class="play-button" aria-hidden="true">&#9654;</span></div><div class="card-body"><div class="card-meta"><span class="genre">${program.category}</span><span class="rating"><small>Performance</small><strong>${program.rating}</strong><small>/10</small></span></div><h2>${program.title}</h2><p>${program.description}</p><div class="card-bottom"><span class="verdict ${band}"><i></i>${program.verdict}</span><span class="launch-label">Play <span>&#8599;</span></span></div></div></button><a class="credit-link view-link" href="#credits">by ${program.credit}</a></article>`;
}

function render() {
  const term = search.value.trim().toLowerCase();
  const visible = GAMES.filter(program => (activeFilter === 'All' || program.category === activeFilter) && `${program.title} ${program.description} ${program.category}`.toLowerCase().includes(term));
  grid.innerHTML = visible.map(cardTemplate).join('');
  count.textContent = `${visible.length} ${visible.length === 1 ? 'program' : 'programs'}`;
  empty.hidden = visible.length > 0;
  grid.querySelectorAll('.game-launch').forEach(button => button.addEventListener('click', () => launch(button.dataset.file)));
  bindViewLinks();
}

function applyView(view) {
  document.querySelector('#launcher-view').hidden = view !== 'launcher';
  document.querySelector('#credits-view').hidden = view !== 'credits';
  window.scrollTo(0, 0);
}

function showView(view) {
  history.pushState(null, '', view === 'credits' ? '#credits' : '#launcher');
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
  const popup = window.open(file, '_blank', 'popup=yes,width=1280,height=800,resizable=yes,scrollbars=yes');
  if (!popup) window.alert('Your browser blocked the program window. Please allow popups for RPi WebLauncher.');
  else popup.focus();
}

function updateThemeIcon() {
  themeToggle.innerHTML = isLightMode ? '&#9790;' : '&#9788;';
  themeToggle.setAttribute('aria-label', isLightMode ? 'Switch to dark mode' : 'Switch to light mode');
  themeToggle.title = isLightMode ? 'Switch to dark mode' : 'Switch to light mode';
}

filters.addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; activeFilter = button.dataset.filter; filters.querySelectorAll('.filter-pill').forEach(pill => { const active = pill === button; pill.classList.toggle('active', active); pill.setAttribute('aria-selected', active); }); render(); });
search.addEventListener('input', render);
themeToggle.addEventListener('click', () => { isLightMode = !isLightMode; document.body.classList.toggle('light-mode', isLightMode); document.documentElement.classList.toggle('theme-light', isLightMode); try { localStorage.setItem('rpi-theme', isLightMode ? 'light' : 'dark'); } catch (_) {} updateThemeIcon(); });
window.addEventListener('popstate', () => applyView(window.location.hash === '#credits' ? 'credits' : 'launcher'));
window.addEventListener('hashchange', () => applyView(window.location.hash === '#credits' ? 'credits' : 'launcher'));
document.body.classList.toggle('light-mode', isLightMode);
updateThemeIcon();
render();
applyView(window.location.hash === '#credits' ? 'credits' : 'launcher');
function tick() { document.querySelector('#clock').textContent = new Intl.DateTimeFormat([], { hour:'numeric', minute:'2-digit' }).format(new Date()); }
tick();
setInterval(tick, 30000);
