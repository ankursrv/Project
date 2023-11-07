var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
// Case studies Slider
var swiper = new Swiper(".case_studies_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: false,
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Happy Customer Slider
var swiper = new Swiper(".happy-cus-slid", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Second Header Sticky on scroll

var activeSticky = $("#active-sticky"),
  winDow = $(window);
winDow.on("scroll", function () {
  var scroll = $(window).scrollTop(),
    isSticky = activeSticky;
  if (scroll < 1) {
    isSticky.removeClass("is-sticky");
  } else {
    isSticky.addClass("is-sticky");
  }
});

// On Click header top Lang bg clr change
const sublng = document.getElementById("sub-lng");
const items = sublng.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    // Remove the "active" class from all items
    for (let j = 0; j < items.length; j++) {
      items[j].classList.remove("activee");
    }
    // Add the "active" class to the clicked item
    this.classList.add("activee");
  });
}
