document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const items = Array.from(document.querySelectorAll('.section-banner'));
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  let currentIndex = 1;

  // Clonar el primer y último elemento y agregar al final y al principio
  const firstClone = items[0].cloneNode(true);
  const lastClone = items[items.length - 1].cloneNode(true);

  carousel.appendChild(firstClone);
  carousel.insertBefore(lastClone, items[0]);

  // Actualizar la lista de items para incluir los clones
  const updatedItems = Array.from(carousel.querySelectorAll('.section-banner'));

  function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
  }

  function resetCarouselTransition() {
    carousel.style.transition = 'none';
  }

  function restoreCarouselTransition() {
    carousel.style.transition = 'transform 0.5s ease-in-out';
  }

  prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();

    if (currentIndex === 0) {
      setTimeout(() => {
        resetCarouselTransition();
        currentIndex = updatedItems.length - 2;
        updateCarousel();
        setTimeout(restoreCarouselTransition, 50);
      }, 500);
    }
  });

  nextButton.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();

    if (currentIndex === updatedItems.length - 1) {
      setTimeout(() => {
        resetCarouselTransition();
        currentIndex = 1;
        updateCarousel();
        setTimeout(restoreCarouselTransition, 50);
      }, 500);
    }
  });

  // Inicializar el carrusel en la posición correcta
  updateCarousel();
});