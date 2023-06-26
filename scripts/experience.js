let educations = [
  {
    education: "High School",
    venu: "Rylands High School",
    date: "2016 - 2020",
    subjects: [
      "English Home Language",
      "Afrikaans First Aditional Language",
      "Maths",
      "Physical Science",
      "Life Science",
      "Information Technology",
      "Life Orientation",
    ],
  },
];

let coding = [
  {
    education: "High School",
    venu: "Rylands High School",
    date: "2018 - 2021",
    Languages: ["Delphi", "SQL"],
  },
  {
    education: "Coding Course",
    venu: "Life Choices",
    date: "2021 - 2022",
    Languages: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "SQL",
      "PSQL",
      "MongoDB",
      "Vue.js",
    ],
  },
];

let work = [
  {
    company: "Gmaven",
    jobtitle: "Intern Data Cleaner",
    duration: "2022 - Present",
    tasks: ["Capturing Data", "Validating Data"],
  },
];

function popExperience() {
  let code = `
    <p class="Xp-icons">
        Education<i class="fas fa-graduation-cap Xp-icon"></i>
    </p>`;

  educations.forEach((education) => {
    code += `
        <div class="Ed-content">
            <ul class="Xp-lists">
              <li class="Xp-list">
                <div class="xp-details">
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Education:</p>
                    <p class="xp-l-content">${education.education}</p>
                  </div>
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Venu:</p>
                    <p class="xp-l-content">${education.venu}</p>
                  </div>
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Date:</p>
                    <p class="xp-l-content">${education.date}</p>
                  </div>
                </div>
                <div class="xp-discription">
                    <div class="xp-l-discription">
                        <p class="xp-l-head">Subjects:</p>`;

    education.subjects.forEach((subject) => {
      code += `<p class="xp-l-content">${subject}</p>`;
    });
    code += `
                </div>
             </div>
           </li>
         </ul>
       </div>
    `;
  });

  code += `
    <p class="Xp-icons">
        Coding<i class="fas fa-code Xp-icon"></i>
    </p>`;

  coding.forEach((codes) => {
    code += `
        <div class="Ed-content">
            <ul class="Xp-lists">
              <li class="Xp-list">
                <div class="xp-details">
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Education:</p>
                    <p class="xp-l-content">${codes.education}</p>
                  </div>
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Venu:</p>
                    <p class="xp-l-content">${codes.venu}</p>
                  </div>
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Date:</p>
                    <p class="xp-l-content">${codes.date}</p>
                  </div>
                </div>
                <div class="xp-discription">
                    <div class="xp-l-discription">
                        <p class="xp-l-head">Languages:</p>`;

    codes.Languages.forEach((Language) => {
      code += `<p class="xp-l-content">${Language}</p>`;
    });
    code += `
                </div>
             </div>
           </li>
         </ul>
       </div>
    `;
  });

  code += `
    <p class="Xp-icons">
        Work<i class="fas fa-solid fa-briefcase Xp-icon"></i>
    </p>`;

  work.forEach((works) => {
    code += `
        <div class="Ed-content">
            <ul class="Xp-lists">
              <li class="Xp-list">
                <div class="xp-details">
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Education:</p>
                    <p class="xp-l-content">${works.company}</p>
                  </div>
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Venu:</p>
                    <p class="xp-l-content">${works.jobtitle}</p>
                  </div>
                  <div class="xp-l-discription">
                    <p class="xp-l-head">Date:</p>
                    <p class="xp-l-content">${works.duration}</p>
                  </div>
                </div>
                <div class="xp-discription">
                    <div class="xp-l-discription">
                        <p class="xp-l-head">Tasks:</p>`;

    works.tasks.forEach((task) => {
      code += `<p class="xp-l-content">${task}</p>`;
    });
    code += `
                </div>
             </div>
           </li>
         </ul>
       </div>
    `;
  });
  document.querySelector(".Education-container").innerHTML = code;
}

popExperience();
