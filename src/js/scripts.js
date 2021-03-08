$(document).ready(function(){
$('.hamburger').click(function(){
  $('.hamburger__lines').toggleClass('hamburger__lines_active');
  $('.nav__menu').toggleClass('nav__menu_active');
});
$(window).scroll(function(){
    $('.nav').toggleClass('nav__scrolled', $(this).scrollTop() > 0);
});
function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top - $('.nav__fixed').height()
		}, {
			duration: speed,
			step: function( now, fx ) {
				var newOffset = scrollLink.offset().top;
				if (fx.end !== newOffset) {
					fx.end = newOffset;
				}
			}
		});
		return false;
	}
	$('.anchor-next').click(function(e){
		e.preventDefault();
		var el = $(this).closest('section').next();
		scroll(el, 1500);
	});

	$('.js-menu-item-link').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
		$('#js-navigation-menu').removeClass('nav__menu_active');
		$('#js-nav-hamburger').removeClass('active');
	});

	$('.js-anchor').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('data-href') ), 1500);
	});

new WOW().init();
});
