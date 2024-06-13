window.addEventListener('scroll', function() {
    const menuBar = document.querySelector('.menu__bar');
    if (window.scrollY > 50) { // Cambia el valor según cuándo quieras que ocurra el cambio
      menuBar.classList.add('scrolled');
    } else {
      menuBar.classList.remove('scrolled');
    }
  });