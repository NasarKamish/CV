let testData = [
  {
    name: "Abdur-Razaaq Jardien",
    position: "Classmate",
    image: "./images/Testimonials/Abdur-Razaa Jardien .jpg",
    quote: `Nasar is one of the brightest people I know. When it comes to
    technology, Nasar is on the ball. He is extremely helpful and
    is willing to go the extra mile for others. I know that he
    will reach greater heights in the future.`,
  },
  {
    name: "Brent lee Johnson",
    position: "Classmate",
    image: "./images/Testimonials/Brent Lee Johnson.jpg",
    quote: `Nasar is the most enthusiastic friend one can get. Not only is
    he a fierce competitor, he's always willing to help those who
    lacks the same amount of knowledge he does. Still, I can
    assure you that Nasar puts in his share of hard-work.`,
  },
  {
    name: "Ghiyaath Williams",
    position: "Classmate",
    image: "./images/Testimonials/Ghiyaath Williams.jpg",
    quote: `Nasar is a hardworking individual as he commits himself to his
    work, doing what needs to be done on time.`,
  },
  {
    name: "Godwin Dzvapatsva",
    position: "Lecturer",
    image: "./images/Testimonials/Godwin-Dzvapatsra.jpg",
    quote: `I am pleased to commend on Nasar. He possesses leadership
    skills and finishes his work on schedule.`,
  },
  {
    name: "Naeemah Davis",
    position: "Classmate",
    image: "./images/Testimonials/Naeemah.jpg",
    quote: `Nasar is an extremely perceptive and enthusiastic individual.
    Very accommodating when others are in need of his assistance.
    I trust that his intellect and hard-work can be beneficial to
    any business.`,
  },
  {
    name: "Nahum Van Diemen",
    position: "Classmate",
    image: "./images/Testimonials/Nahum_v_Diemen.jpg",
    quote: `Nasar and have been class mates and friends since we started
    at life choices. From what I've seen he has is brilliant in
    backend languages and he is always willing to lend a helping
    hand to his classmates.`,
  },
  {
    name: "Shuaib Dollie",
    position: "Classmate",
    image: "./images/Testimonials/Shuaib_Dollie.jpg",
    quote: `Nasar in my opinion is one of the most hardest working person
    i know. Besides being hard-working he knows his work very well
    and will always assist where he can he always goes the extra
    mile for everyone.`,
  },
  {
    name: "Thapelo Tsotetsi",
    position: "Lecturer",
    image: "./images/Testimonials/Thapelo-Tsotetsi.jpg",
    quote: `Nasar is an exceptional students. He always submit he’s work
    on time and is always of great qualify. Nasar has great
    intellectual skills and has the ability of learning new
    technologies quickly. He possesses great communication skills
    and works well within a team.`,
  },
];

let testContainer = document.querySelector(".Testimonial-border");

testContainer.innerHTML = `<h3 class="test-head">Testimonials</h3>`;
testContainer.innerHTML += `<div class="card-container">`;

testData.forEach((person) => {
  testContainer.innerHTML += `<div class="test-card">
    <div class="test-img-container">
      <img
        class="test-img"
        src="${person.image}"
        alt="${person.name}"
      />
    </div>
    <div class="testcontent">
      <div class="test-name">${person.name}</div>
      <p class="test-position">${person.position}</p>
      <i class="fas fa-quote-left quote-icon"></i>
      <div class="test-context">
        <p>
          ${person.quote}
        </p>
      </div>
      <i class="fas fa-quote-right quote-icon"></i>
    </div>
  </div>`;
});

testContainer.innerHTML += `</div>`;
