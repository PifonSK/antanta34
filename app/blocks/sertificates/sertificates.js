if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var mySwiper = new Swiper('.sertificates__swiper', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.sertificates__right .swiper-pagination',
		},
		navigation: {
			nextEl: '.sertificates__right .swiper-button-next',
			prevEl: '.sertificates__right .swiper-button-prev',
		},
	});
} else {
	var mySwiper = new Swiper('.sertificates__swiper', {
		slidesPerView: 3,
		spaceBetween: 35,
		loop: true,
		pagination: {
			el: '.sertificates__right .swiper-pagination',
		},
		navigation: {
			nextEl: '.sertificates__right .swiper-button-next',
			prevEl: '.sertificates__right .swiper-button-prev',
		},
	});
}