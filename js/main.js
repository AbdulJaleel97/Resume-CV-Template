// Select Elements
let allLis = document.querySelectorAll(".top-menu ul li");
let allContents = document.querySelectorAll(".content-parent div");
let mainList = document.querySelector(".top-menu ul");
let about = document.querySelector("#about-card");
let resume = document.querySelector("#resume-card");
let works = document.querySelector("#works-card");
let blog = document.querySelector("#blog-card");
let contacts = document.querySelector("#contacts-card");
let contactBtn = document.getElementById("contact-btn");

// Remove Active From All Then Add it to specific
allLis.forEach((e, i) => {
  // Get the Order of the Li Clicked On
  let index = i;

  e.addEventListener("click", () => {
    e.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
    // Remove Active From All Contents
    allContents.forEach((e) => {
      e.parentElement.querySelectorAll(".active").forEach((ele) => {
        ele.classList.remove("active");
      });
    });
    // Add Active to The needed Content
    if (index == 0) {
      about.classList.add("active");
    }
    if (index == 1) {
      resume.classList.add("active");
    }
    if (index == 2) {
      works.classList.add("active");
    }
    if (index == 3) {
      blog.classList.add("active");
    }
    if (index == 4) {
      contacts.classList.add("active");
    }
  });
});
contactBtn.addEventListener("click", () => {
  // Remove Active from Lis
  allLis.forEach((e, i) => {
    e.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    // Add Active on Contacts Only
    allLis[4].classList.add("active");
  });
  // Remove Active From All Contents
  allContents.forEach((e) => {
    e.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
  });
  // Add Active On Contacts Only
  contacts.classList.add("active");
});

// Swiper
var mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll To Top
let btn = document.querySelector(".scroll");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    btn.style.cssText = "visibility:visible;Opacity:1";
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  }
  if (window.pageYOffset < 700) {
    btn.style.cssText = "visibility:hidden;Opacity:0";
  }
});

// Type Js

let freelance = new Typed(".auto-type", {
  strings: ["Freelancer", "Web Developer", "Vue.js Developer"],
  typeSpeed: 100,
  backSpeed: 20,
  loop: true,
});

let develop = new Typed(".another-type", {
  strings: ["Freelancer", "Web Developer", "Vue.js Developer"],
  typeSpeed: 100,
  backSpeed: 20,
  loop: true,
});
