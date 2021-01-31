$('.questions__tabs-item').on('click', function() {
	$('.questions__tabs-item').removeClass('_active');
	$(this).addClass('_active');
	$('.questions__item').hide();
	var name = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '.questions__tabs ' : '.questions__wrapper '; 
	$(name + '.questions__item[type="' + $(this).attr('type') + '"]').fadeIn(1);
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var mySwiper = new Swiper('.questions__swiper', {
		slidesPerView: 'auto',
		loop: true,
		pagination: {
			el: '.questions .swiper-pagination',
		},
	});
}