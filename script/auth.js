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
      item.addEventListener("mouseleave", () =>
        cursor.classList.remove("hover"),
      );
    });

    cursorBtn.forEach((item) => {
      item.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      item.addEventListener("mouseleave", () =>
        cursor.classList.remove("hover"),
      );
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
      }, 1000);
    }, 2000);
  });
});

// Block copy paste in password input
// BLOCK COPY / PASTE ON PASSWORD
document.querySelectorAll('input[type="password"]').forEach((input) => {
  const block = (e) => e.preventDefault();

  input.addEventListener("paste", block);
  input.addEventListener("copy", block);
  input.addEventListener("cut", block);
  input.addEventListener("drop", block);
  input.addEventListener("contextmenu", block);
});

// PASSWORD SHOW / HIDE
document.querySelectorAll(".eye-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);

    if (!input) return;

    // toggle type
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";

    // toggle class for icon styling
    btn.classList.toggle("active");

    // change icon (cross eye)
    btn.innerHTML = isPassword ? closedEyeSVG : openEyeSVG;
  });
});

// icons
const openEyeSVG = `
<svg width="22" height="15" viewBox="0 0 22 15" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path d="M11 4.5C10.2044 4.5 9.44129 4.81607 8.87868 5.37868C8.31607 5.94129 8 6.70435 8 7.5C8 8.29565 8.31607 9.05871 8.87868 9.62132C9.44129 10.1839 10.2044 10.5 11 10.5C11.7956 10.5 12.5587 10.1839 13.1213 9.62132C13.6839 9.05871 14 8.29565 14 7.5C14 6.70435 13.6839 5.94129 13.1213 5.37868C12.5587 4.81607 11.7956 4.5 11 4.5ZM11 12.5C9.67392 12.5 8.40215 11.9732 7.46447 11.0355C6.52678 10.0979 6 8.82608 6 7.5C6 6.17392 6.52678 4.90215 7.46447 3.96447C8.40215 3.02678 9.67392 2.5 11 2.5C12.3261 2.5 13.5979 3.02678 14.5355 3.96447C15.4732 4.90215 16 6.17392 16 7.5C16 8.82608 15.4732 10.0979 14.5355 11.0355C13.5979 11.9732 12.3261 12.5 11 12.5ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z"
fill="#100F0F" />
</svg>
`;

const closedEyeSVG = `
<svg width="22" height="15" viewBox="0 0 22 15" fill="none">
<path d="M1 1L21 14" stroke="#100F0F" stroke-width="2"/>
<path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z" fill="#100F0F"/>
</svg>
`;

const studForm = (event) => {
  event.preventDefault();

  const form = event.target;

  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();
  const ename = form.ename.value.trim();
  const num = form.num.value.trim();
  const cpass = form.cpass.value.trim();
  const rpass = form.rpass.value.trim();

  const fnameError = document.getElementById("fnameError");
  const lnameError = document.getElementById("lnameError");
  const emailError = document.getElementById("emailError");
  const numError = document.getElementById("numError");
  const cpassError = document.getElementById("cpassError");
  const rpassError = document.getElementById("rpassError");

  // Clear previous errors
  fnameError.textContent = "";
  lnameError.textContent = "";
  emailError.textContent = "";
  numError.textContent = "";
  cpassError.textContent = "";
  rpassError.textContent = "";

  let isValid = true;

  // First Name
  if (fname.length < 3) {
    fnameError.textContent = "At least 3 characters";
    isValid = false;
  }

  // Last Name
  if (lname.length < 3) {
    lnameError.textContent = "At least 3 characters";
    isValid = false;
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(ename)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Mobile Number
  if (num.length !== 10) {
    numError.textContent = "Mobile number must be 10 digits";
    isValid = false;
  }

  // Password
  const strongPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=+*/]).{6,}$/;

  if (!strongPass.test(cpass)) {
    cpassError.textContent =
      "Password must include uppercase, lowercase, number, special character & greater than 6 characters";
    isValid = false;
  }

  // Confirm Password
  if (cpass !== rpass) {
    rpassError.textContent = "Passwords do not match";
    isValid = false;
  }

  // If everything is valid
  if (!isValid) return;
  const studDetails = {
    name: `${fname} ${lname}`,
    email: ename,
    phone: num,
    password: cpass,
  };

  studRegisterData(studDetails, form);
};
const studRegisterData = async (studDetails, form) => {
  const success = document.getElementById("message");
  success.textContent = "";

  try {
    const response = await fetch(
      "https://news-blog-api.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(studDetails),
      },
    );
    const data = await response.json();
    console.log(response);

    console.log("STATUS:", response.status);
    console.log("BACKEND MESSAGE:", data);

    if (response?.status === 201) {
      success.textContent = data.message;
      success.className = "message success";
      form.reset();
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    } else {
      success.textContent = data.message;
      success.className = "message error";
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

const techFrom = (event) => {
  event.preventDefault();

  const form = event.target;

  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();
  const ename = form.ename.value.trim();
  const cpass = form.cpass.value.trim();
  const rpass = form.rpass.value.trim();

  const fnameError = document.getElementById("fnameError");
  const lnameError = document.getElementById("lnameError");
  const emailError = document.getElementById("emailError");
  const cpassError = document.getElementById("cpassError");
  const rpassError = document.getElementById("rpassError");

  // Clear previous errors
  fnameError.textContent = "";
  lnameError.textContent = "";
  emailError.textContent = "";
  cpassError.textContent = "";
  rpassError.textContent = "";

  let isValid = true;

  // First Name
  if (fname.length < 3) {
    fnameError.textContent = "At least 3 characters";
    isValid = false;
  }

  // Last Name
  if (lname.length < 3) {
    lnameError.textContent = "At least 3 characters";
    isValid = false;
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(ename)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Password
  const strongPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=+*/]).{6,}$/;

  if (!strongPass.test(cpass)) {
    cpassError.textContent =
      "Password must include uppercase, lowercase, number & special character";
    isValid = false;
  }

  // Confirm Password
  if (cpass !== rpass) {
    rpassError.textContent = "Passwords do not match";
    isValid = false;
  }

  // If everything is valid
  if (!isValid) return;
  const techDetails = {
    name: `${fname} ${lname}`,
    email: ename,
    password: cpass,
  };
  techRegisterData(techDetails, form);
};

const techRegisterData = async (techDetails, form) => {
  const success = document.getElementById("message");
  success.textContent = "";

  try {
    const response = await fetch(
      "https://news-blog-api.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(techDetails),
      },
    );
    const data = await response.json();
    console.log(response);

    console.log("STATUS:", response.status);
    console.log("BACKEND MESSAGE:", data);

    if (response?.status === 201) {
      success.textContent = data.message;
      success.className = "message success";
      form.reset();
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    } else {
      success.textContent = data.message;
      success.className = "message error";
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

const formSubmitLog = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const pass = form.pass.value;
  const emailError = document.getElementById("emailError");
  const passError = document.getElementById("passError");

  emailError.textContent = "";
  passError.textContent = "";

  const logInDetails = {
    email: email,
    password: pass,
  };
  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Password
  if (pass.length < 6) {
    passError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }
  //   console.log(userDetails);
  loginData(logInDetails, form);
};

const loginData = async (logInDetails, form) => {
  const success = document.getElementById("message");
  success.textContent = "";
  try {
    const response = await fetch(
      "https://news-blog-api.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(logInDetails),
      },
    );
    const data = await response.json();
    console.log(response);
    console.log(data);

    if (response?.status === 200) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      success.textContent = data.message;
      success.className = "message success";
      form.reset();
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      success.textContent = data.message;
      success.className = "message error";
    }
  } catch (error) {
    console.log("error", error.message);
  }
};
