document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".cardSwiper", {
    effect: "cards",
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
          },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
