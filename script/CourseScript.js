document.addEventListener("DOMContentLoaded", () => {
  // image container
  const images = document.querySelectorAll(".card-pic");

  // course title
  const titles = document.querySelectorAll(".title4");
  const cartBtns = document.querySelectorAll(".cart");
  const goToDetails = () => {
    window.location.href = "course-details.html";
  };
  const goCart = () => {
    window.location.href = "cart.html";
  };
  cartBtns.forEach((cartbtn) => {
    cartbtn.addEventListener("click", goCart);
  });
  images.forEach((img) => {
    img.addEventListener("click", goToDetails);
  });

  titles.forEach((title) => {
    title.addEventListener("click", goToDetails);
  });
});
