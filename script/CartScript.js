document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".cartSwiper", {
    slidesPerView: 1,
    loop: "true",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
});
