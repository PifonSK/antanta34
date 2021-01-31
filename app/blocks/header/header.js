if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var mySwiper = new Swiper('.header__slider-mobile', {
		loop: true,
		slidesPerView: 1,
	});
} else {
	let initAnimate = true;

	if ($('.about').length) {
		// справа кнопки
		const heights = [
			0,
			$('.about').offset().top,
			$('.competence').offset().top,
			$('.maintenance').offset().top,
			$('.advantages').offset().top,
			$('.sertificates').offset().top,
			$('.projects').offset().top,
			$('.cost').offset().top,
			$('.questions').offset().top,
			$('.contacts').offset().top - 200,
			$('.footer').offset().top,
		];
	
		$(window).on('scroll', function () {
			for (let i = 0; i < $('.header__pagination-item').length; i++) {
				if ($(window).scrollTop() >= heights[i] && $(window).scrollTop() < heights[i+1]) {
					$($('.header__pagination-item')[i]).addClass('_active');
				} else {
					$($('.header__pagination-item')[i]).removeClass('_active');
				}
			}
		});
	}
}

$(window).on('scroll', function () {
	if ($(window).scrollTop() > 0) {
		$('.header:not(.menu) .header__top').addClass('_fixed');
	} else {
		$('.header:not(.menu) .header__top').removeClass('_fixed');
	}
});

var maxSlides = $('.header__slider-item').length;

function nextSlide() {
	let index = $('.header__slider-item._active').attr('index');
	$('.header__slider-item._active').removeClass('_active');
	index++;
	if (index > maxSlides) {
		index = 1;
	}
	$(`.header__slider-item[index="${index}"]`).addClass('_active');
}

function openMenu(name, title, button, src, fio) {
	$('body').addClass('_not-scroll');
	$(name).addClass('_open');
	if (title) {
		$('.menu._open .menu__main-title').text(title);
		$('.menu._open .menu__main-btn span').text(button);
		$('.menu._open .menu__main input[name="formname"]').val(title);
		$('.menu._open .menu__main .menu__main-right img').attr('src', `/images/${src}`);
		$('.menu._open .menu__main .menu__main-right-name').text(fio);
	}
}

function closeMenu() {
	$('body').removeClass('_not-scroll');
	$('.menu').removeClass('_open');
}