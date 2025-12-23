document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
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
});
