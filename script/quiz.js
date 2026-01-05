document.addEventListener("DOMContentLoaded", () => {
  const funnelList = document.querySelector(".category-list");
  const filterBtn = document.querySelector(".filter");
  console.log(filterBtn);

  window.funnelBtn = () => {
    funnelList.classList.toggle("show");
  };

  const rangeInput = document.getElementById("range4");
  const rangeOutput = document.getElementById("rangeValue");
  rangeOutput.textContent = rangeInput.value + "%";

  rangeInput.addEventListener("input", function () {
    rangeOutput.textContent = this.value + "%";
  });
});
