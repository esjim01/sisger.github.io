
// Inicializar Sidenav y ScrollSpy
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);

  const spy = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(spy, { scrollOffset: 100 });

  // Detectar scroll para cambiar navbar
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});