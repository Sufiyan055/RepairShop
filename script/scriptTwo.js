let ulBar = document.querySelector(".ulBar");
let menuToggle = document.querySelector(".menuToggle");
let gotoTop = document.querySelector(".gotoTop");
let pureNavbar = document.querySelector(".pureNavbar");

const navMainBarDisplay = () => {
  if (window.scrollY >= 500) {
    pureNavbar.style.position = "fixed";
    pureNavbar.style.width = "100%";
    pureNavbar.style.top = "0px";
    pureNavbar.style.background = "#fff";
    pureNavbar.style.padding = "8px 30px";
    pureNavbar.style.boxShadow = "0px 0px 5px 2px #00000050";
  } else {
    pureNavbar.style.position = "relative";
  }
};

window.addEventListener("scroll", navMainBarDisplay);

toggleNav = () => {
  ulBar.classList.toggle("ulBarActive");
  menuToggle.classList.toggle("active");
};

function BacktoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollForTopBtn();
};

const scrollForTopBtn = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gotoTop.style.display = "block";
  } else {
    gotoTop.style.display = "none";
  }
};
