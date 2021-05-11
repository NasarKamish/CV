function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

const Theme = document.querySelector(".Switch");

Theme.addEventListener("click", function () {
  document.body.classList.toggle("Dark-Theme");
});
