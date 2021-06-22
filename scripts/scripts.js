// Navbar
function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

let nav_anchors = document.querySelectorAll(".navbar-anchor");

for (let i = 0; i < nav_anchors.length; i++) {
  nav_anchors[i].addEventListener("click", toggleNavbar);
}

// Theme changer

const Theme = document.querySelector(".Switch");

let icon = document.querySelector(".fa-moon");

Theme.addEventListener("click", function () {
  document.body.classList.toggle("Dark-Theme");

  let iconDelay = setTimeout(function () {
    if (icon.className === "far fa-moon") {
      icon.className = "fas fa-bahai";
    } else if (icon.className === "fas fa-bahai") {
      icon.className = "far fa-moon";
    }
  }, 300);
});

// Filter buttons

function borderclick(button) {
  if (button == "all") {
    let BTN = document.querySelector(".filter-all");
    BTN.style.borderBottom = "solid";
    BTN.style.borderTop = "solid";
    BTN.style.borderColor = "var(--text-detail)";

    BTN = document.querySelector(".filter-python");
    BTN.style.border = "none";
    BTN = document.querySelector(".filter-html");
    BTN.style.border = "none";
  }
  if (button == "python") {
    let BTN = document.querySelector(".filter-python");
    BTN.style.borderBottom = "Solid";
    BTN.style.borderTop = "Solid";
    BTN.style.borderColor = "var(--text-detail)";

    BTN = document.querySelector(".filter-all");
    BTN.style.border = "none";
    BTN = document.querySelector(".filter-html");
    BTN.style.border = "none";
  }
  if (button == "html") {
    let BTN = document.querySelector(".filter-html");
    BTN.style.borderBottom = "Solid";
    BTN.style.borderTop = "Solid";
    BTN.style.borderColor = "var(--text-detail)";

    BTN = document.querySelector(".filter-all");
    BTN.style.border = "none";
    BTN = document.querySelector(".filter-python");
    BTN.style.border = "none";
  }
}
