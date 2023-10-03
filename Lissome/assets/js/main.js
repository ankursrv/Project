$(".my-navbar .nav-link").on("click", function(){
    $(".my-navbar").find(".active").removeClass("active");
    $(this).addClass("active");
 });

//  Testi image Click on zoom NavTab 
 $(".testi .nav-link").on("click", function(){
    $(".testi").find(".zoom").removeClass("zoom");
    $(this).addClass("zoom");
 });