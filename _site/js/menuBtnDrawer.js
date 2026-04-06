document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('drawer');
  const drawerClose = document.getElementById('drawerClose');
  const overlay = document.getElementById('drawerOverlay');

  menuBtn.addEventListener('click', () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
  });

  [drawerClose, overlay].forEach(el => {
    el.addEventListener('click', () => {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    });
  });
});