(() => {
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu-toggle');
  const pages = [...document.querySelectorAll('.page')];
  const links = [...document.querySelectorAll('[data-page]')];

  function route() {
    const hash = location.hash || '#home';
    const isVideos = hash === '#videos' || hash.startsWith('#clip-') || hash === '#full-interview';
    pages.forEach(page => { page.hidden = (page.id === 'videos') !== isVideos; });
    links.forEach(link => {
      const current = isVideos ? 'videos' : hash === '#about' ? 'about' : 'home';
      link.classList.toggle('active', link.dataset.page === current);
    });
    if (nav && menu) {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }
  }

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }
  window.addEventListener('hashchange', route);
  route();

  // Pause other players when one starts, so clips do not play simultaneously.
  document.querySelectorAll('video').forEach(player => {
    player.addEventListener('play', () => {
      document.querySelectorAll('video').forEach(other => {
        if (other !== player) other.pause();
      });
    });
  });
})();