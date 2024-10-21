const testinomials = [
  {
    name: "Ethan Thompson",
    image: "images/StImg3.webp",
    testinomial:
      "I had a cracked screen on my iPhone, and these guys fixed it within an hour! The staff was super friendly and professional. My phone looks brand new again. I couldn’t be happier with the service. Highly recommended for anyone looking for fast and reliable mobile repair!",
  },
  {
    name: "Emily Wilson",
    image: "images/StImg1.webp",
    testinomial:
      "I had my phone battery replaced here, and the whole experience was fantastic. The prices were much better compared to other repair shops in the area, and the quality of the work was top-notch. They even gave me tips on how to maintain my phone for a longer lifespan. Will definitely be coming back if I ever need another repair!",
  },
  {
    name: "Lucas Brooks",
    image: "images/StImg4.webp",
    testinomial:
      "The team at this mobile repair shop is amazing! I had a problem with my phone’s charging port, and they diagnosed and fixed it in no time. They kept me updated throughout the process, and the customer service was truly impressive. If you're looking for a repair shop that values its customers, this is the place.",
  },
  {
    name: "Avery Mitchell",
    image: "images/StImg2.webp",
    testinomial:
      "I dropped my phone and shattered the screen completely. I thought I would have to replace the entire phone, but they fixed it like it was nothing. The turnaround time was very quick, and the phone works perfectly now. Super happy with the service, and I highly recommend them to anyone needing a repair.",
  },
];

let i = 0;

let j = testinomials.length;

let testinomialContainer = document.getElementById("review");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimnial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimnial();
});

let displayTestimnial = () => {
  testinomialContainer.innerHTML = `
  <div class="peopleImg"> 
  <img src=${testinomials[i].image}>
  </div>
  <span>${testinomials[i].name}</span>
  <p>${testinomials[i].testinomial}</p>
    `;
};

displayTestimnial();
