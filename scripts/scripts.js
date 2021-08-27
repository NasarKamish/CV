// Theme changer

const Theme = document.querySelector(".Switch");

let icon = document.querySelector(".fa-moon");

Theme.addEventListener("click", function () {
  document.body.classList.toggle("Dark-Theme");

  // let iconDelay = setTimeout(function () {
  //   if (icon.className === "far fa-moon") {
  //     icon.className = "fas fa-bahai";
  //   } else if (icon.className === "fas fa-bahai") {
  //     icon.className = "far fa-moon";
  //   }
  // }, 300);
});

// Filter buttons

function borderclick(button) {
  let pyContainer = document.querySelector(".py-container");
  let pyHead = document.querySelector(".python-head");
  let htmlContainer = document.querySelector(".Html-container");
  let htmlHead = document.querySelector(".Html-head");

  if (button == "all") {
    let BTN = document.querySelector(".filter-all");
    BTN.style.borderBottom = "solid";
    BTN.style.borderTop = "solid";
    BTN.style.borderColor = "var(--text-detail)";

    BTN = document.querySelector(".filter-python");
    BTN.style.border = "none";
    BTN = document.querySelector(".filter-html");
    BTN.style.border = "none";

    pyContainer.style.display = "flex";
    pyHead.style.display = "flex";
    htmlContainer.style.display = "flex";
    htmlHead.style.display = "flex";
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

    pyContainer.style.display = "flex";
    pyHead.style.display = "flex";
    htmlContainer.style.display = "none";
    htmlHead.style.display = "none";
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

    pyContainer.style.display = "none";
    pyHead.style.display = "none";
    htmlContainer.style.display = "flex";
    htmlHead.style.display = "flex";
  }
}
