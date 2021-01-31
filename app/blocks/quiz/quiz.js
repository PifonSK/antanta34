if ($('#test-block').hasClass('_main')) {
	var quizSlider = new Swiper('.quiz__slider', {
		simulateTouch: false,
		followFinger: false,
		allowTouchMove: false,
		slidesPerView: 1,
		spaceBetween: 70,
		effect: 'fade',
		autoHeight: true,
		observer: true,
		observeParents: true,
		fadeEffect: {
			crossFade: true
		},
		loop: false,
		on: {
			init: function () {
				var html = 'Вопрос 1 из ' + ($('.quiz__slide').length - 2);

				$('.quiz__num').html(html);
			},
			slideChange: function (swiper) {
				var index = $('.quiz__slide.swiper-slide-active').attr('data-index');
				var html = 'Вопрос ' + index + ' из ' + ($('.quiz__slide').length - 2);

				$('.quiz__num').html(html);
			}
		},
		pagination: {
			el: '.qstatus',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				var html = '';
				for (let i = 1; i <= total; i++) {
					if (i <= current) {
						html += '<li class="active"></li>';
					} else {
						html += '<li></li>';
					}
				}

				return html;
			}
		},
	});

	$('.quiz__slider .button_prev').on('click', function () {
		quizSlider.slidePrev();
	})

	$('.quiz_2 .button_next').on('click', function () {
		var $parent = $(this).closest('.quiz__slide');
		if ($parent.find('input[name="prava"]:checked').length) {
			quizSlider.slideNext();
		}
	})
	$('.quiz_3 .button_next').on('click', function () {
		var $parent = $(this).closest('.quiz__slide');
		if ($parent.find('input[name="meri"]:checked').length) {
			quizSlider.slideNext();
		}
	})
	$('.quiz_4 .button_next').on('click', function () {
		var $parent = $(this).closest('.quiz__slide');
		if ($parent.find('input[name="sroki"]:checked').length) {
			quizSlider.slideNext();
		}
	})
	$('.quiz_5 .button_next').on('click', function () {
		var $parent = $(this).closest('.quiz__slide');
		if ($parent.find('input[name="expa"]:checked').length) {
			quizSlider.slideNext();
		}
	})
	$('.quiz_6 .button_next').on('click', function () {
		quizSlider.slideNext();
	})

	$('.quiz__last-answer input').on('change', function() {
		$('.quiz__last-answer .quiz__last-answer-file-btn').text($(this).val());
	});

	$('input[name="square_num"]').on('focus change', function () {
		$('.sq__input').addClass('active');
		$('input[name="square"]:checked').prop('checked', false);
		var
			$input = $(this),
			$val = $(this).val(),
			$new_val = $val;
		if (isNaN($val)) {
			$new_val = '';
		} else if ($val < 1) {
			$new_val = '';
		}
		$input.val($new_val);
	})

	var i = 0, prec;
	if ($("#prec").length) {
		var degs = $("#prec").attr("class").split(' ')[1];
	}
	var activeBorder = $("#activeBorder");

	function loopit(dir) {
		if (dir == "c")
			i++
		else
			i--;
		if (i < 0)
			i = 0;
		if (i > degs) {
			quizSlider.slideNext();
			$(".thanks-modal-video iframe")[0].src += "?autoplay=1";
			return
		}
		prec = (100 * i) / 360;
		$(".prec").html(Math.round(prec) + "%");

		if (i <= 180) {
			activeBorder.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #ECECEC 50%),linear-gradient(90deg, #ECECEC 50%, transparent 50%)');
		}
		else {
			activeBorder.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #13A0D8 50%),linear-gradient(90deg, #ECECEC 50%, transparent 50%)');
		}

		setTimeout(function () {
			loopit("c");
		}, 1);
	}

	$('#quiz').on('submit', function (e) {
		e.preventDefault();
		if ($('#quiz-phone').is(':visible') && noValidate($(this))) {
			return
		}
		quizSlider.slideNext();
		loopit("c");
		var fd = new FormData(this);
		new URL(window.location.href).searchParams.forEach(function (value, key) {
			fd.append(key, value);
		});
		$.ajax({
			url: '/action.php',
			type: 'POST',
			contentType: false,
			processData: false,
			data: fd,
			success: function () {
				try {
					yaCounter70481767.reachGoal('QUIZ-SENDFORM');
				} catch (e) {
					console.log(e);
				}
			},
		});
	});
}
