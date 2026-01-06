document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
  var swiperSec = new Swiper(".mySwiper2", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
