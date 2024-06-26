const swiperDiagnosis = new Swiper(".swiper-diagnosis", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const swiperSolutions = new Swiper(".swiper-solutions", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    toggles.forEach((item) => {
      if (item !== toggle) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-menu li a");

burger.addEventListener("click", function () {
  nav.classList.toggle("show-menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("show-menu");
  });
});
