var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      786: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    }
  });