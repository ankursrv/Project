// nav Link active color 
$(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
 });

//  Work Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
      spaceBetween: 25,
      autoplay:true,
      loop:Infinity,
      speed:1000,
      grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
    },
  });

  // Wow js 
  new WOW().init();
  