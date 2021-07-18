// Navbar
function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

let nav_anchors = document.querySelectorAll(".navbar-anchor");

for (let i = 0; i < nav_anchors.length; i++) {
  nav_anchors[i].addEventListener("click", toggleNavbar);
}
