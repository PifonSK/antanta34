<?php
require 'PHPMailer/PHPMailerAutoload.php';

print_r($_POST);

$message = '';

if ($_POST['message']) {
	$message = $message."Описание ситуации: ".$_POST['message']."<br>";
}
if ($_POST['first']) {
	$message = $message."Как получить стоимость: ".$_POST['first']."<br>";
}
if ($_POST['second']) {
	$message = $message."Хотите ли получить план действий: ".$_POST['second']."<br>";
}
if ($_POST['desc']) {
	$message = $message."ВОПРОС: ".$_POST['desc']."<br>";
}
if ($_POST['mail']) {
	$message = $message."ПОЧТА: ".$_POST['mail']."<br>";
}
if ($_POST['type']) {
	$message = $message."Вид юридического сопровождения: ".$_POST['type']."<br>";
}
if ($_POST['need']) {
	$message = $message."Нужна ли консультация: ".$_POST['need']."<br>";
}
if ($_POST['prava']) {
	$message = $message."К какой области права относится ваш вопрос?: ".$_POST['prava']."<br>";
	$message = $message."Какие меры вы уже предпринимали?: ".$_POST['meri']."<br>";
	$message = $message."В какие сроки вы хотели бы, чтобы мы решили вашу проблему?: ".$_POST['sroki']."<br>";
	$message = $message."Был ли у вас опыт обращения в юридические компании?: ".$_POST['expa']."<br>";
	if ($_POST['situation']) {
		$message = $message."Опишите кратко ситуацию: ".$_POST['situation']."<br>";
	}
	$message = $message."СВЯЗАТЬСЯ: ".$_POST['where']."<br>";
}
if ($_POST['name']) {
	$message = $message."ИМЯ: ".$_POST['name']."<br>";
}
$message = $message."ТЕЛЕФОН: ".$_POST['phone']."<br>";

if ($_POST['formname']) $message = $message."ФОРМА: ".$_POST['formname'];

if ($_POST['utm_source']) $message = $message."<br><br>utm_source: ".$_POST['utm_source'];
if ($_POST['utm_medium']) $message = $message."<br>utm_medium: ".$_POST['utm_medium'];
if ($_POST['utm_campaign']) $message = $message."<br>utm_campaign: ".$_POST['utm_campaign'];
if ($_POST['utm_content']) $message = $message."<br>utm_content: ".$_POST['utm_content'];
if ($_POST['utm_term']) $message = $message."<br>utm_term: ".$_POST['utm_term'];

$message = wordwrap($message, 70, "<br>");
echo $message;
$title = 'Новая заявка от '.$_POST['phone'];

$mail = new PHPMailer;
$mail->isSMTP();                              // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                       // Enable SMTP authentication
$mail->Username = 'reservesmtp@caaat.pro';         // SMTP username
$mail->Password = 'HU3Vf2GgonQ7Du9si';             // SMTP password
$mail->SMTPSecure = 'ssl';                    // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;

$mail->CharSet = "utf-8";

$mail->setFrom('reservesmtp@caaat.pro', 'new.antanta34.ru');
$mail->isHTML(true);

$mail->addAddress('info@antanta34.ru', 'My Friend');

if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
    $mail->AddAttachment($_FILES['file']['tmp_name'],
        $_FILES['file']['name']);
}

$mail->Subject = $title;
$mail->Body = $message;

if (!$mail->send()) {
    echo 'Ошибка при отправке. Ошибка: ' . $mail->ErrorInfo;
} else {
    echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в
      ближайшее время<Br> $back";
}
?>
