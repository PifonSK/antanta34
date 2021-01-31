$('.quiz__last-answer-file input').on('change', function() {
	$('.quiz__last-answer-file .quiz__last-answer-file-btn').text($(this).val());
});

$('#consultation').on('submit', function (e) {
	e.preventDefault();
	if (noValidate($(this))) {
		return
	}
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
				yaCounter70481767.reachGoal('CONSULTATION-SENDFORM');
			} catch (e) {
				console.log(e);
			}
			closeMenu();
			openMenu('.send-modal');
		},
	});
});
