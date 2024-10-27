let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};

const testinomials = [
  {
    name: "Ethan Thompson",
    image: "images/StImg3.webp",
    testinomial:
      "I had a cracked screen on my iPhone, and these guys fixed it within an hour! The staff was super friendly and professional. My phone looks brand new again. I couldn’t be happier with the service.",
  },
  {
    name: "Emily Wilson",
    image: "images/StImg1.webp",
    testinomial:
      "I had my phone battery replaced here, and the whole experience was fantastic. The prices were much better compared to other repair shops in the area, and the quality of the work was top-notch.",
  },
  {
    name: "Lucas Brooks",
    image: "images/StImg4.webp",
    testinomial:
      "The team at this mobile repair shop is amazing! I had a problem with my phone’s charging port, and they diagnosed and fixed it in no time. They kept me updated throughout the process, and the customer service was truly impressive.",
  },
  {
    name: "Avery Mitchell",
    image: "images/StImg2.webp",
    testinomial:
      "I dropped my phone and shattered the screen completely. I thought I would have to replace the entire phone, but they fixed it like it was nothing. The turnaround time was very quick, and the phone works perfectly now.",
  },
];

let i = 0;

let j = testinomials.length;

let testinomialContainer = document.getElementById("review");
let nextBtn = document.getElementById("reviewnextBtn");
let prevBtn = document.getElementById("reviewprevBtn");

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
