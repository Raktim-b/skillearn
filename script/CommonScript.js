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
// Loader Screen
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-overlay");
  const content = document.querySelector(".page-wrpr");

  // Let logo/text animation finish
  setTimeout(() => {
    loader.classList.add("curtain-up");

    // Remove loader after curtain animation
    setTimeout(() => {
      loader.style.display = "none";
      content.classList.remove("hidden");
    }, 1000);
  }, 2000);
});


