document.addEventListener("DOMContentLoaded", () => {
  // image container
  const images = document.querySelectorAll(".card-pic");

  // course title
  const titles = document.querySelectorAll(".title4");
  // const cartBtns = document.querySelectorAll(".cart");
  const goToDetails = () => {
    window.location.href = "course-details.html";
  };

  images.forEach((img) => {
    img.addEventListener("click", goToDetails);
  });

  titles.forEach((title) => {
    title.addEventListener("click", goToDetails);
  });

  const addToCartBtn = document.querySelectorAll(".cart");
  const cartPopup = document.getElementById("cartPopup");

  addToCartBtn.forEach((toCartBtn) => {
    toCartBtn.addEventListener("click", () => {
      // toCartBtn.textContent = "Go to Cart";
      // toCartBtn.disabled = true;

      // cartPopup.classList.add("show");
      // setTimeout(() => {
      //   window.location.href = "cart.html";
      //   // cartPopup2.classList.remove("show");
      // }, 2000);

      if (toCartBtn.classList.contains("added")) {
        window.location.href = "cart.html";
        return;
      }
      toCartBtn.innerHTML = `Added To Cart 
  <span class="cartIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	  <g fill="none" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path stroke-dasharray="20" d="M3 12h17.5">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
		</path>
		<path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to="0" />
		</path>
	  </g>
    </svg>
  </span>`;

      toCartBtn.classList.add("added");
      cartPopup.classList.add("show");

      setTimeout(() => {
        cartPopup.classList.remove("show");
      }, 2000);
    });
  });

  // Change the pages

  const cards = document.querySelectorAll(".course-card");
  const nextBtn = document.getElementById("nextCourses");
  const prevBtn = document.getElementById("prevCourses");

  let currentPage = 0;
  const perPage = 8; // courses per click

  function showPage(page) {
    cards.forEach((card) => card.classList.add("hidden"));

    let start = page * perPage;
    let end = start + perPage;

    for (let i = start; i < end && i < cards.length; i++) {
      cards[i].classList.remove("hidden");
    }

    prevBtn.disabled = page === 0;
    nextBtn.disabled = end >= cards.length;
  }

  function scrollToCourses() {
    const target = document.getElementById("coursesTop");

    window.scrollTo({
      top: target.offsetTop - 120,
      behavior: "smooth",
    });
  }

  nextBtn.addEventListener("click", () => {
    currentPage++;
    showPage(currentPage);
    scrollToCourses();
  });

  prevBtn.addEventListener("click", () => {
    currentPage--;
    showPage(currentPage);
    scrollToCourses();
  });

  showPage(currentPage);
});
