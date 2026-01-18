const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

const dateEl = document.getElementById("currentDate");
const timeEl = document.getElementById("currentTime");

let currentDate = new Date();

const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/* 🔹 Highlighted dates (YYYY-MM-DD : CSS class) */
const highlightedDates = {
  "2026-01-01": "classColor3",
  "2026-01-03": "classColor3",
  "2026-01-06": "classColor3",
  "2026-01-08": "classColor3",
  "2026-01-10": "classColor3",
  "2026-01-12": "classColor3",
  "2026-01-14": "classColor3",
  "2026-01-16": "classColor3",
  "2026-01-19": "classColor1",
  "2026-01-21": "classColor1",
  "2026-01-23": "classColor1",
  "2026-01-26": "classColor1",
  "2026-01-28": "classColor1",
  "2026-01-30": "classColor1",
};
function renderCalendar(date) {
  calendarGrid.innerHTML = "";

  // Weekday header
  weekDays.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.textContent = day;
    calendarGrid.appendChild(dayDiv);
  });

  const year = date.getFullYear();
  const month = date.getMonth();

  monthYear.textContent = `${months[month]}, ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  // Previous month dates
  for (let i = firstDay; i > 0; i--) {
    const div = document.createElement("div");
    div.className = "date classColor4";
    div.textContent = prevMonthLastDate - i + 1;
    calendarGrid.appendChild(div);
  }

  // Current month dates
  for (let i = 1; i <= lastDate; i++) {
    const div = document.createElement("div");
    div.classList.add("date");

    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;

    // Apply custom highlight
    if (highlightedDates[fullDate]) {
      div.classList.add(highlightedDates[fullDate]);
    }

    // Highlight today
    const today = new Date();
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      div.classList.add("classColor2");
    }

    div.textContent = i;
    calendarGrid.appendChild(div);
  }
}

// Navigation buttons
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial calendar load
renderCalendar(currentDate);

/* 🔹 Live Date & Time */
function updateDateTime() {
  const now = new Date();

  dateEl.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  timeEl.textContent = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

updateDateTime();
setInterval(updateDateTime, 1000);
