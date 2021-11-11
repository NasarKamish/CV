let themeCounter = 0;
let navCounter = 0;

// Load Container

window.addEventListener("load", () => {
  document.querySelector(".loader-container").classList.add("hide");
});

// Navbar and theme

function toggleNavbar() {
  if (themeCounter == 1) {
    toggleTheme();
  }
  if (navCounter == 0) {
    navCounter = 1;
  } else {
    navCounter = 0;
  }
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

let nav_anchors = document.querySelectorAll(".navbar-anchor");

for (let i = 0; i < nav_anchors.length; i++) {
  nav_anchors[i].addEventListener("click", toggleNavbar);
}

function toggleTheme() {
  document.getElementsByClassName("theme")[0].classList.toggle("active");
  if (navCounter == 1) {
    toggleNavbar();
  }
  if (themeCounter == 0) {
    themeCounter = 1;
  } else {
    themeCounter = 0;
  }
}

function colorChange(color) {
  console.log(color);
  window.localStorage.setItem("ThemeColor", color);
  document.documentElement.style.setProperty("--text-detail", color);
  toggleTheme();
}

if (window.localStorage.getItem("ThemeColor")) {
  document.documentElement.style.setProperty(
    "--text-detail",
    window.localStorage.getItem("ThemeColor")
  );
}
