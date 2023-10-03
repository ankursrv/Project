// Active nav-link 
$(".navbarBottom .nav-link").on("click", function(){
    $(".navbarBottom").find(".active").removeClass("active");
    $(this).addClass("active");
 });

//  Hero Banner Swiper 
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Work Swiper   
var swiper = new Swiper(".myWorkSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  autoplay:true,
  speed:1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 499px
    0: {
        slidesPerView: 1,
        spaceBetweenSlides: 5
    },
    // when window width is <= 999px
    600: {
        slidesPerView: 1.8,
        spaceBetweenSlides: 10
    }
}
});
  
// Review Swiper 
var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  autoplay:true,
  speed:1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

  document.addEventListener("DOMContentLoaded", function(){
		
		window.addEventListener('scroll', function() {
	       
			if (window.scrollY > 200) {
				document.getElementById('navbar_top').classList.add('fixed-top');
				
				navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
			 	document.getElementById('navbar_top').classList.remove('fixed-top');
				 
				document.body.style.paddingTop = '0';
			} 
		});
	});
  
  // $(window).scroll(function () {
  //   if($(window).scrollTop()){
  //   $("#navbar_top").addClass("black");
  //   }
  //   else{
  //   $("#navbar_top").removeClass("black");
  //   }
  //   });
//   $(window).scroll(function(){
//     $('nav').toggleClass('black', $(this).scrollTop() > 50);
// });