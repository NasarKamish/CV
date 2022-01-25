let softSkills = [
  "Communication",
  "Teamwork",
  "Problem-solving",
  "Organized",
  "Detail orientated",
];

let techSkills = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft Powerpoint",
  "Windows",
];

let codeSkills = [
  "fab fa-python",
  "fab fa-html5",
  "fab fa-css3-alt",
  "fab fa-js-square",
  "fab fa-node-js",
  "fab fa-vuejs",
];

let skillsContainer = document.querySelector(".Skills-container");

// // // // // // POP SOFT SKILLS // // // // // //

function popSoftSkills() {
  let softContainer = document.querySelector(".soft-skills-list");
  softContainer.innerHTML = ``;
  softSkills.forEach((skill) => {
    softContainer.innerHTML += `<li class="soft-skills">${skill}</li>`;
  });
}

popSoftSkills();

// // // // // // POP TECH SKILLS // // // // // //

function popTechSkills() {
  let techContainer = document.querySelector(".tech-skills-list");
  techContainer.innerHTML = ``;
  techSkills.forEach((skill) => {
    techContainer.innerHTML += `<li class="tech-skills">${skill}</li>`;
  });
}
popTechSkills();

// // // // // // POP CODE SKILLS // // // // // //

function popCodeSkills() {
  let codeContainer = document.querySelector(".cards-container");
  codeContainer.innerHTML = ``;
  codeSkills.forEach((skill) => {
    codeContainer.innerHTML += `
    <div class="card">
      <div class="card-icon"><i class="${skill}"></i></div>
    </div>
    `;
  });
}
popCodeSkills();
