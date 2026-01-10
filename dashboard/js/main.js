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

  // Original data
  const activeData = [2, 8, 5, 8, 6, 10, 9];
  const goalData = [5, 5, 6, 4, 5, 3, 4];

  // Calculate remaining goal (gray part)
  const remainingData = goalData.map((goal, i) =>
    Math.max(goal - activeData[i], 0)
  );

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Active",
          data: activeData,
          backgroundColor: "#6CD1C3",
          borderRadius: 6,
          barThickness: 28,
          stack: "stack1",
        },
        {
          label: "Goal",
          data: remainingData,
          backgroundColor: "#D9D9D9",
          borderRadius: 6,
          barThickness: 28,
          stack: "stack1",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: (value) => value + "h",
          },
        },
      },
      plugins: {
        legend: {
          position: window.innerWidth < 576 ? "bottom" : "right",
          labels: {
            boxWidth: 18,
            boxHeight: 10,
          },
        },
      },
    },
  });
});
