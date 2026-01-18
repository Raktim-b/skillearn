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
// BackTOTop Button
const backToTopBtn = document.querySelector(".button");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top when button is clicked
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
