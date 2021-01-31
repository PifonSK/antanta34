$("input[name='phone']").mask("+7-(999)-999-99-99");

function convertPhone(phone) {
    return phone[1] + phone[4] + phone[5] + phone[6] + phone[9] + phone[10] + phone[11] + phone[13] + phone[14] + phone[16] + phone[17];
}

function check7Duplicate(phone) {
    let check = false;
    for(let i = 1; i < 5; i++) {
        if (phone[i] === phone[i+1] && phone[i] === phone[i+2] && phone[i] === phone[i+3] && phone[i] === phone[i+4] && phone[i] === phone[i+5] && phone[i] === phone[i+6]) {
            check = true;
        }
    }
    return check;
}

function noValidate(form) {
    let noValid = false;
	const phone = convertPhone(form.find('input[name="phone"]').val());
	if (!phone) {
        noValid = true;
		form.find('.error').text('Заполните номер телефона');
		return noValid;
    }
    if (check7Duplicate(phone)) {
        noValid = true;
		form.find('.error').text('Номер не может иметь больше 6 подряд одинаковых цифр');
		return noValid;
    }
    if (phone[1] !== '9') {
        noValid = true;
		form.find('.error').text('Номер должен начинаться с 9');
		return noValid;
    }

    return noValid;
}

jQuery(".colorbox").colorbox({
	height: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $(window).width()*846/616 : 'false'
 });

 jQuery(".contacts__colorbox").colorbox({
	height: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $(window).width()*484/617 : 'false'
 });

// if (location.protocol !== 'https:') {
//     location.replace(`https:${location.href.substring(location.protocol.length)}`);
// }