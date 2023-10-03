// Nav Link color change on active stage 
$("#navbar_nav .nav-link").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
 });