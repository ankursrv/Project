var swiper = new Swiper("#testi-slid", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".testi-left-arro",
    prevEl: ".testi-right-arro",
  },
  breakpoints: {
    1181: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
  },
});
