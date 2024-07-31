gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector("nav");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

const carousel = document.querySelector(".carousel-cont");
const slide = document.querySelector(".carousel-slide");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive
    ? carousel.scrollLeft + slideWidth
    : carousel.scrollLeft - slideWidth;
}

document.addEventListener("mousemove", function (event) {
  gsap.to(".cursor", {
    top: event.y,
    left: event.x,
    duration: 0.3,
  });
});

document
  .querySelector(".ri-menu-line")
  .addEventListener("mouseover", function () {
    gsap.to(".cursor", {
      scale: 3,
    });
  });

document
  .querySelector(".ri-menu-line")
  .addEventListener("mouseout", function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  });

const headbtn = document.querySelectorAll(".head-btn");

headbtn.forEach(function (headbtn) {
  headbtn.addEventListener("mouseover", function () {
    gsap.to(".cursor", {
      scale: 3,
    });
  });
  headbtn.addEventListener("mouseout", function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  });
});

const carouselbtn = document.querySelectorAll(".carousel-arrow");

carouselbtn.forEach(function (carouselbtn) {
  carouselbtn.addEventListener("mouseover", function () {
    gsap.to(".cursor", {
      scale: 3,
    });
  });
  carouselbtn.addEventListener("mouseout", function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  });
});

const cardbtn = document.querySelectorAll(".card-button");

cardbtn.forEach(function (cardbtn) {
  cardbtn.addEventListener("mouseover", function () {
    gsap.to(".cursor", {
      scale: 2.5,
    });
  });
  cardbtn.addEventListener("mouseout", function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  });
});

const servicebtn = document.querySelectorAll(".btn");

servicebtn.forEach(function (servicebtn) {
  servicebtn.addEventListener("mouseover", function () {
    gsap.to(".cursor", {
      scale: 4,
    });
  });
  servicebtn.addEventListener("mouseout", function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  });
});

const footerbtn = document.querySelectorAll(".footer-btn");

footerbtn.forEach(function (footerbtn) {
  footerbtn.addEventListener("mouseover", function () {
    gsap.to(".cursor", {
      scale: 2,
    });
  });
  footerbtn.addEventListener("mouseout", function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  });
});

function menuToggle() {
  document.querySelector(".menu-open").addEventListener("click", function () {
    gsap.to(".menubox", {
      opacity: "1",
      left: "0",
    });
  });

  document.querySelector(".menu-close").addEventListener("click", function () {
    gsap.to(".menubox", {
      opacity: "0",
      left: "-100%",
    });
  });
}
menuToggle();

function carMoveAnimation() {
  gsap.to(".image-anim .car", {
    scrollTrigger: {
      trigger: ".overlay",
      start: "bottom bottom",
      end: "+=250%",
      scroller: "body",
      scrub: true,
      // markers: true,
      pin: "main",
    },
    left: "64%",
  });
}
carMoveAnimation();

function features() {
  const hb = document.querySelectorAll(".hoverBtn");

  hb.forEach(function (btn, index) {
    btn.addEventListener("mouseover", function () {
      if (index === 0) {
        document.querySelector(
          ".imgdiv"
        ).innerHTML = ` <img src="./assets/car-rental.jpg" />`;
      }
      if (index === 1) {
        document.querySelector(
          ".imgdiv"
        ).innerHTML = ` <img src="./assets/hotel-booking.jpg" />`;
      }
      if (index === 2) {
        document.querySelector(
          ".imgdiv"
        ).innerHTML = ` <img src="./assets/pick-drop.webp" />`;
      }
      if (index === 3) {
        document.querySelector(
          ".imgdiv"
        ).innerHTML = ` <img src="./assets/tickets.jpg" />`;
      }
    });
  });
}

features();
