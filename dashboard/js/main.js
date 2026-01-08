document.addEventListener("DOMContentLoaded", function () {
  // Hamberger SideBar Toggle
  const navBar = document.querySelector(".left-sideNav");
//   const menuButton = document.querySelector(".menu-btn");
//   const closeBtn = document.querySelector(".close-btn");

  window.hamberger = () => {
    navBar.classList.add("open");

  };

  window.clickClose = () => {
    navBar.classList.remove("open");

  };
});
