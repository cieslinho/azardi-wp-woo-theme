<?php
include('phpmailer/PHPMailerAutoload.php');
    //get data from form  
    $name = $_POST['name'];
    $email= $_POST['email'];
    $emailTo = $_POST['email-adress'];
    $message= $_POST['message'];
    $subject = $_POST['subject'];
    $to = 'cszymon01@gmail.com';
    $subject = "AZARDI - FORMULARZ KONTAKTOWY";
    $txt = " Imię: ". $name . ' ' . $surname . "\r\n E-mail: " . $email . "\r\n Temat wiadomości: " . $subject . "\r\n Treść wiadomości: " . $message;
    $headers = "Od: kontakt@azardi.pl";
    if ($email != NULL) {
        mail($to,$subject,$txt,$headers);
    }
    //redirect
    header("Location: http://azardishop.local/kontakt/wiadomosc-wyslana");
?>