try {
  const light = localStorage.getItem('rpi-theme') === 'light';
  document.documentElement.classList.toggle('theme-light', light);
  if (document.body) document.body.classList.toggle('light-mode', light);
} catch (_) {}

document.documentElement.classList.add('page-ready');

document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || link.target === '_blank' || href.startsWith('http')) return;
  link.addEventListener('click', event => {
    event.preventDefault();
    document.documentElement.classList.add('page-leaving');
    window.setTimeout(() => { window.location.href = href; }, 240);
  });
});
