
  document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset === 0) {
        hero.classList.add('hero-zoom'); // Zoom when scrolled to top
      } else {
        hero.classList.remove('hero-zoom'); // Reset on scroll down
      }
    });
  });