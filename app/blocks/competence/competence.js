$('.competence__tabs-item').on('click', function() {
	$('.competence__tabs-item').removeClass('_active');
	$(this).addClass('_active');
	$('.competence__wrapper').hide();
	//var name = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '.competence__tabs ' : '.competence__block '; 
	$(name + '.competence__wrapper[type="' + $(this).attr('type') + '"]').fadeIn(1);
});

$('.competence__item').on('click', function() {
	openMenu('.consultation-modal', 'Узнайте стоимость', 'УЗНАТЬ СТОИМОСТЬ', 'menu__main-right.png', 'Евгений Фролов');
});