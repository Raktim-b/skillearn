document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll(".toggle-btns-wrpr button");
  const participantsBox = document.getElementById("participantsBox");
  const chatBox = document.getElementById("chatBox");
  const closeBtn = document.querySelector(".panel-close-btn");
  const panel = document.querySelector(".live-dashboard-right");

  if (window.innerWidth <= 768) {
    participantsBox.classList.add("active");
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth > 768) return;

      const target = btn.dataset.target;

      panel.classList.add("active");
      participantsBox.classList.remove("active");
      chatBox.classList.remove("active");

      target === "participants"
        ? participantsBox.classList.add("active")
        : chatBox.classList.add("active");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      panel.classList.remove("active");
    });
  }
});
