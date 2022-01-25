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

// skillsContainer.innerHTML += `<h3 class="Skills-head">Skills</h3>
// <div class="skills-content">`;

// // Soft Skills
// skillsContainer.innerHTML += `<div class="skills-content">
// <div class="soft-container">
// <h3 class="soft-skills-head">Soft Skills</h3>
// <ul class="soft-skills-list">`;

// softSkills.forEach((skill) => {
//   skillsContainer.innerHTML += `<li class="soft-skills">${skill}</li>`;
// });
// skillsContainer.innerHTML += `</ul></div></div>`;

// // Technical Skills
// skillsContainer.innerHTML += `<div class="tech-container">
// <h3 class="tech-skills-head">Technical Skills</h3>
// <ul class="tech-skills-list">`;

// techSkills.forEach((skill) => {
//   skillsContainer.innerHTML += `<li class="tech-skills">${skill}</li>`;
// });

// skillsContainer.innerHTML += `</ul></div>`;

// skillsContainer.innerHTML += `</div>`;

// skillsContainer.innerHTML += `<div class="skills-content">
// <div class="soft-container">
//   <h3 class="soft-skills-head">Soft Skills</h3>
//   <ul class="soft-skills-list">
//     <li class="soft-skills">Communication</li>
//     <li class="soft-skills">Teamwork</li>
//     <li class="soft-skills">Problem-solving</li>
//     <li class="soft-skills">Organized</li>
//     <li class="soft-skills">Detail orientated</li>
//   </ul>
// </div>
// <div class="tech-container">
//   <h3 class="tech-skills-head">Technical Skills</h3>
//   <ul class="tech-skills-list">
//     <li class="tech-skills">Microsoft Word</li>
//     <li class="tech-skills">Microsoft Excel</li>
//     <li class="tech-skills">Microsoft Powerpoint</li>
//     <li class="tech-skills">Windows</li>
//   </ul>
// </div>
// </div>`;
