function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

let nav_anchors = document.querySelectorAll(".navbar-anchor");

for (let i = 0; i < nav_anchors.length; i++) {
  nav_anchors[i].addEventListener("click", toggleNavbar);
}

const Theme = document.querySelector(".Switch");

let icon = document.querySelector(".fa-moon");

Theme.addEventListener("click", function () {
  document.body.classList.toggle("Dark-Theme");

  let iconDelay = setTimeout(function () {
    if (icon.className === "far fa-moon") {
      icon.className = "far fa-sun";
    } else if (icon.className === "far fa-sun") {
      icon.className = "far fa-moon";
    }
  }, 300);
});
