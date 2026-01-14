document.addEventListener("DOMContentLoaded", () => {
  // Swiper JS
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 10000,
    direction: "horizontal",
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
});
