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

  // Course Complete Range

  const rangeInput = document.getElementById("range4");
  const rangeOutput = document.getElementById("rangeValue");

  // Set initial value
  rangeOutput.textContent = rangeInput.value + "%";

  rangeInput.addEventListener("input", function () {
    rangeOutput.textContent = this.value + "%";
  });

  // Chart JS
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
