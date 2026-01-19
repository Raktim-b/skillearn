document.addEventListener("DOMContentLoaded", () => {
  // Loader Screen
  let swiper;
  // Initialize Lenis
  const lenis = new Lenis({
    duration: 2,

    autoRaf: true,
  });
  if (window.innerWidth < 1024) {
    lenis.destroy();
  }
const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let clientX = 0;
  let clientY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function MouseMove() {
    clientX += (mouseX - clientX) * 0.05;
    clientY += (mouseY - clientY) * 0.05;

    cursor.style.top = clientY + "px";
    cursor.style.left = clientX + "px";

    requestAnimationFrame(MouseMove);
  }
  MouseMove();
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-overlay");
    const content = document.querySelector(".page-wrpr");

    // setTimeout(() => {
    //   loader.classList.add("curtain-up");

    //   setTimeout(() => {
    //     loader.style.display = "none";
    //     content.classList.remove("hidden");

        
        swiper = new Swiper(".cardSwiper", {
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
      }, 1000);
    }, 2000);
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
});
