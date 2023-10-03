$(".myNavbar .nav-link").on("click", function() {
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
  });

// Navbar Scrolling animation set on top 
  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

    