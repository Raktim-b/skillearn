document.addEventListener("DOMContentLoaded", () => {
  const funnelList = document.querySelector(".category-list");
  const filterBtn = document.querySelector(".filter");

  window.funnelBtn = () => {
    funnelList.classList.toggle("show");
    filterBtn.style.color = isOpen ? "#097877" : "";
  };
});
