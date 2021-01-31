$('.projects__tabs-item').on('click', function() {
	$('.projects__tabs-item').removeClass('_active');
	$(this).addClass('_active');
	$('.projects__item').hide();
	var name = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '.projects__tabs ' : '.projects__wrapper '; 
	$(name + '.projects__item[type="' + $(this).attr('type') + '"]').fadeIn(1);
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var mySwiper = new Swiper('.projects__swiper', {
		slidesPerView: 'auto',
		loop: true,
		pagination: {
			el: '.projects .swiper-pagination',
		},
	});
}