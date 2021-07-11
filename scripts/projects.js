let python_projects = [
  {
    class: "Temp-Converter-p",
    head: "Temperature Convertor",
    discription: "This is a form that Converts temperature",
    git: "https://github.com/NasarKamish/Temperature-Convertor",
    live: "https://replit.com/join/bxmaeqlf-nasarkamish",
  },
  {
    class: "Adding-2-numbers-p",
    head: "Adding two numbers",
    discription: "This is a form that adds two numbers",
    git: "https://github.com/NasarKamish/Adding-two-numbers",
    live: "https://replit.com/join/dmdsqgah-nasarkamish",
  },
];

let html_projects = [
  {
    class: "contact-form-p",
    head: "Contact Form",
    discription: "This is a contact form",
    git: "https://github.com/NasarKamish/Contact-Form",
    live: "https://frosty-roentgen-af4fe1.netlify.app/",
  },
  {
    class: "my-projects-p",
    head: "Projects",
    discription: "List of Project cards",
    git: "https://github.com/NasarKamish/Projects",
    live: "https://gracious-hamilton-1d5041.netlify.app/",
  },
  {
    class: "owl-carousel-p",
    head: "Testimonial slider",
    discription: "This is testimonials within sliders",
    git: "https://github.com/NasarKamish/Owl_Carousel",
    live: "https://gracious-villani-1c634b.netlify.app/",
  },
  {
    class: "timeline-p",
    head: "Timeline",
    discription: "This is a timeline using animations",
    git: "https://github.com/NasarKamish/Timeline",
    live: "https://gifted-yonath-0a9fd1.netlify.app/",
  },
];

// Python cards

let python_container = document.querySelector(".py-container");

python_projects.forEach((projects) => {
  let card = `<div class="py-card ${projects.class}">
<div class="overlay">
  <div class="text">
    <h1 class="card-head">${projects.head}</h1>          
    <p class="card-discription">${projects.discription}</p>
    <div class="card-buttons">
      <a target="_blank" href="${projects.git}"><button class="card-button">Git</button></a>
      <a target="_blank" href="${projects.live}"><button class="card-button">Live</button></a>
    </div>
  </div>
</div>
</div>`;
  python_container.innerHTML += card;
});

// html cards

let html_container = document.querySelector(".Html-container");

html_projects.forEach((projects) => {
  let card = `<div class="html-card ${projects.class}">
<div class="overlay">
  <div class="text">
    <h1 class="card-head">${projects.head}</h1>          
    <p class="card-discription">${projects.discription}</p>
    <div class="card-buttons">
      <a target="_blank" href="${projects.git}"><button class="card-button">Git</button></a>
      <a target="_blank" href="${projects.live}"><button class="card-button">Live</button></a>
    </div>
  </div>
</div>
</div>`;
  html_container.innerHTML += card;
});
