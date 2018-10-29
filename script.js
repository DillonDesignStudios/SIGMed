$(document).ready(function() {
    
   $(".jsMenu").on("click", function () {
        $(".jsNav").slideToggle();
    });
    
   
    $('.scrollContact').click(function(){
        $('html, body').animate({scrollTop: $('.jsScrollContact').offset().top}, 2000);
    });
    $('.scrollTop').click(function(){
        $('html, body').animate({scrollTop: $('.jsScrollTop').offset().top}, 2000);
    });
    $('.scrollNews').click(function(){
        $('html, body').animate({scrollTop: $('.jsScrollNews').offset().top}, 2000);
    });
    $('.scrollRib').click(function(){
        $('html, body').animate({scrollTop: $('.jsScrollRib').offset().top}, 2000);
    });
    $('.scrollVideo').click(function(){
        $('html, body').animate({scrollTop: $('.jsScrollVideo').offset().top}, 2000);
    });
    $('.scrollAbout').click(function () {
        $('html, body').animate({scrollTop: $('.jsScrollAbout').offset().top}, 2000);
    });
     $('.scrollEvents').click(function () {
        $('html, body').animate({scrollTop: $('.jsScrollEvents').offset().top}, 2000);
    });
    
});