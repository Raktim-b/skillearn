document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // Sidebar Toggle
  // ===============================
  const navBar = document.querySelector(".left-sideNav");
  const close = document.querySelector(".close-btn");
  const menu = document.querySelector(".menu-btn");

  window.hamberger = () => {
    let isOpen = navBar.classList.add("open");

    if (isOpen !== true) {
      close.style.display = "block";
      menu.style.display = "none";
    }
    return isOpen;
  };

  window.clickClose = () => {
    navBar.classList.remove("open");
    close.style.display = "none";
    menu.style.display = "block";
  };

  // ===============================
  // Course Range
  // ===============================
  const rangeInput = document.getElementById("range4");
  const rangeOutput = document.getElementById("rangeValue");

  rangeOutput.textContent = rangeInput.value + "%";

  rangeInput.addEventListener("input", function () {
    rangeOutput.textContent = this.value + "%";
  });

  // ===============================
  // BAR CHART
  // ===============================
  const barCanvas = document.getElementById("myChart");

  const activeData = [2, 8, 5, 8, 6, 10, 9];
  const goalData = [5, 5, 6, 4, 5, 3, 4];

  const remainingData = goalData.map((g, i) => Math.max(g - activeData[i], 0));

  new Chart(barCanvas, {
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
        x: { stacked: true, grid: { display: false } },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: { callback: (v) => v + "h" },
        },
      },
      plugins: {
        legend: {
          position: window.innerWidth < 576 ? "bottom" : "right",
          labels: { boxWidth: 18, boxHeight: 10 },
        },
      },
    },
  });

  // ===============================
  // GAUGE CHART
  // ===============================
  const gaugeCanvas = document.getElementById("gaugeChart");
  if (!gaugeCanvas) return;

  const gaugeValue = 75; // 0–100

  const gaugeNeedlePlugin = {
    id: "gaugeNeedlePlugin",
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0);
      if (!meta.data.length) return;

      const centerX = meta.data[0].x;
      const centerY = meta.data[0].y;

      // Correct angle for half gauge
      const angle = -Math.PI / 2 + (Math.PI * gaugeValue) / 100;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);

      // Needle
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(chart.outerRadius - 15, 0);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.stroke();

      // Center dot
      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#000";
      ctx.fill();

      ctx.restore();
    },
  };

  new Chart(gaugeCanvas, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [20, 20, 20, 20, 20],
          backgroundColor: [
            "#3fd18b",
            "#6fe7d8",
            "#ffe066",
            "#ffb703",
            "#ff4d4f",
          ],
          borderWidth: 0,
          cutout: "65%",
          rotation: -90,
          circumference: 180,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
    plugins: [gaugeNeedlePlugin],
  });
});
