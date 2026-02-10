document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let smoother;

  /* ===============================
     Smooth Scroll (Desktop Only)
  =============================== */
  function initSmoothScroll() {
    if (window.matchMedia("(min-width: 769px)").matches) {
      if (!smoother) {
        smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,
          effects: true,
          normalizeScroll: true,
        });
      }
    } else {
      if (smoother) {
        smoother.kill();
        smoother = null;
      }

      // Force native scrolling back
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }

  initSmoothScroll();
  window.addEventListener("resize", initSmoothScroll);

  /* ===============================
     Modal Scroll Handling
  =============================== */
  //  const modals = document.querySelectorAll(".modal");

  // modals.forEach((modal) => {
  //   modal.addEventListener("show.bs.modal", () => {
  //     if (smoother) smoother.paused(true);
  //     document.documentElement.style.overflow = "hidden";
  //     document.body.style.overflow = "hidden";
  //   });

  //   modal.addEventListener("hidden.bs.modal", () => {
  //     if (smoother) smoother.paused(false);
  //     document.documentElement.style.overflow = "";
  //     document.body.style.overflow = "";
  //   });
  // });

  /* ===============================
     Loader + Swiper
  =============================== */
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-overlay");
    const content = document.querySelector(".page-wrpr");

    setTimeout(() => {
      loader.classList.add("curtain-up");

      setTimeout(() => {
        loader.style.display = "none";
        content.classList.remove("hidden");

        new Swiper(".cardSwiper", {
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

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const userMenu = document.getElementById("userMenu");

  // Elements might not exist on every page
  if (!loginBtn || !registerBtn || !userMenu) return;

  if (token && user) {
    // Logged in
    loginBtn.classList.add("d-none");
    registerBtn.classList.add("d-none");
    userMenu.classList.remove("d-none");
    userMenu.classList.add("d-flex");
  } else {
    // Logged out
    loginBtn.classList.remove("d-none");
    registerBtn.classList.remove("d-none");
    userMenu.classList.add("d-none");
  }

  /* ===============================
     Back To Top Button
  =============================== */
  const backToTopBtn = document.querySelector(".button");

  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("show", window.pageYOffset > 300);
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: window.innerWidth > 768 ? "smooth" : "auto",
    });
  });
});

/* ===============================
   Custom Cursor (Desktop Only)
=============================== */
if (window.innerWidth > 768) {
  const cursor = document.querySelector(".cursor");
  const anchor = document.querySelectorAll("a");
  const cursorBtn = document.querySelectorAll("button");

  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate3d(
      calc(${e.clientX}px - 50%),
      calc(${e.clientY}px - 50%),
      0
    )`;
  });

  document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
  });

  anchor.forEach((item) => {
    item.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });

  cursorBtn.forEach((item) => {
    item.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
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
}
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
