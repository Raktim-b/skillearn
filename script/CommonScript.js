document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,
    effects: true,
    normalizeScroll: true,
  });

  const modal = document.getElementById("exampleModal");

  modal.addEventListener("show.bs.modal", () => {
    smoother.paused(true);

    // restore native scrolling context for modal
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  });

  modal.addEventListener("hidden.bs.modal", () => {
    smoother.paused(false);

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  });

  // Initialize Lenis
  // const lenis = new Lenis({
  //   duration: 2,

  //   autoRaf: true,
  // });
  // if (window.innerWidth < 1024) {
  //   lenis.destroy();
  // }

  // const cursor = document.querySelector(".cursor");
  //   let mouseX = 0;
  //   let mouseY = 0;
  //   let clientX = 0;
  //   let clientY = 0;
  //   document.addEventListener("mousemove", (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //   });
  //   function MouseMove() {
  //     clientX += (mouseX - clientX) * 0.05;
  //     clientY += (mouseY - clientY) * 0.05;

  //     cursor.style.top = clientY + "px";
  //     cursor.style.left = clientX + "px";

  //     requestAnimationFrame(MouseMove);
  //   }
  //   MouseMove();
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-overlay");
    const content = document.querySelector(".page-wrpr");

    setTimeout(() => {
      loader.classList.add("curtain-up");

      setTimeout(() => {
        loader.style.display = "none";
        content.classList.remove("hidden");

        let swiper = new Swiper(".cardSwiper", {
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

// Cursor Initialization
const cursor = document.querySelector(".cursor");
const anchor = document.querySelectorAll("a");
const cursorBtn = document.querySelectorAll("button");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  requestAnimationFrame(mousemove);
});
mousemove();
document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
});

anchor.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

cursorBtn.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
