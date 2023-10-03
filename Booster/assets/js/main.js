$(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
 });
//  Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      640: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 2,
        
      },
      1100: {
        slidesPerView: 3.3,
        
      },
    },
  });

  // Smooth Scroll 
  const option = {
    'damping' : 0.06,       //Scrollbar Speed
    'alwaysShowTracks' : true
  }
  Scrollbar.init(document.querySelector('#my-scrollbar'), option);






