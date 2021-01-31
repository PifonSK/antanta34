$('.overlay').on('click', function() {
	$(this).hide();
	$('.modal:visible, .quiz-modal:visible').hide();
	$(`.contract__wrapper`).hide();
});

$('.modal__close').on('click', function() {
	$('.overlay').hide();
	$('.modal:visible').hide();
	$(`.contract__wrapper`).hide();
});

function showModal(modal, link) {
	$(`.${modal}`).show();
	$('.overlay').show();
	if (modal === 'contract-modal') {
		$(`.contract__wrapper`).show();
	}

	if (modal === 'quiz-modal' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$([document.documentElement, document.body]).animate({
			scrollTop: 0
		}, 500);
	}

	if (link) {
		$('.youtube-modal iframe').attr('src', link);
	}
}

function closeModal() {
	$('.overlay').hide();
	$('.modal:visible').hide();
	$(`.contract__wrapper`).hide();
}

$('.quiz__last-answer input').on('change', function() {
	$('.quiz__last-answer .quiz__last-answer-file-btn').text($(this).val());
});