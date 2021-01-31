$('.menu__block-item').on('click', function() {
	$('.menu__block-item._active').removeClass('_active');
	$(this).addClass('_active');
	closeMenu();
	$([document.documentElement, document.body]).animate({
		scrollTop: $(`section.${$(this).attr('index')}`).offset().top - 100
	}, 500);
});