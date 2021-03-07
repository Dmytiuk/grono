$(document).ready(function(){
$('.hamburger').click(function(){
  $('.hamburger__lines').toggleClass('hamburger__lines_active');
  $('.nav__menu').toggleClass('nav__menu_active');
});
$(window).scroll(function(){
    $('.nav').toggleClass('nav__scrolled', $(this).scrollTop() > 0);
});
new WOW().init();
});
