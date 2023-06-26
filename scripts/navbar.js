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

// // // // // // POP NAVBAR // // // // // //

function popNavbarLinks() {
  let navbarLinks = [
    { name: "Home", link: "Landing" },
    { name: "About", link: "About" },
    { name: "Experience", link: "Experience" },
    { name: "Skills", link: "Skills" },
    { name: "Projects", link: "Projects" },
    { name: "Testimonials", link: "Testimonials" },
    { name: "Contact", link: "Contact" },
  ];
  let navContainer = document.querySelector(".navbar-links");
  navContainer.innerHTML = ``;
  navbarLinks.forEach((navbarLink) => {
    navContainer.innerHTML += `
    <li class="navbar-link">
      <a href="#${navbarLink.link}" class="navbar-anchor">${navbarLink.name}</a>
    </li>
    `;
  });
}

popNavbarLinks();

let nav_anchors = document.querySelectorAll(".navbar-anchor");

for (let i = 0; i < nav_anchors.length; i++) {
  nav_anchors[i].addEventListener("click", toggleNavbar);
}

// // // // // // POP COLORS // // // // // //

function popColorChanger() {
  let colors = ["red", "blue", "aqua", "lime", "yellow", "deeppink"];
  let colorContainer = document.querySelector(".colors");
  colorContainer.innerHTML = ``;
  colors.forEach((color) => {
    colorContainer.innerHTML += `
    <div onclick="colorChange('${color}')" class="${color} color"></div>
    `;
  });
}

popColorChanger();
