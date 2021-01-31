$('#cost').on('submit', function (e) {
	e.preventDefault();
	if (noValidate($(this))) {
		return
	}
	var fd = new FormData($('#cost-main')[0]);
	new URL(window.location.href).searchParams.forEach(function (value, key) {
		fd.append(key, value);
	});
	$(this).serializeArray().forEach(function ({name, value}) {
		fd.append(name, value);
	});
	
	$.ajax({
		url: '/action.php',
		type: 'POST',
		contentType: false,
		processData: false,
		data: fd,
		success: function () {
			try {
				yaCounter70481767.reachGoal('COST-SENDFORM');
			} catch (e) {
				console.log(e);
			}
			closeMenu();
			openMenu('.send-modal');
		},
	});
});
