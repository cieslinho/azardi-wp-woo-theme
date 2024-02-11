<?php
    //get data from form  
    $name = $_POST['name'];
    $email= $_POST['email'];
    $emailTo = $_POST['email-adress'];
    $mobile = $_POST['mobile'];
    $message= $_POST['message'] ;
    $subject = $_POST['subject'];
    $to = 'biuro@lozko24.pl';
    $txt = " Imię: ". $name . "\r\n E-mail: " . $email . "\r\n Telefon: " .$mobile. "\r\n Temat wiadomości: " . $subject . "\r\n Treść wiadomości: " . $message;
    $headers = 'Od: no-reply@azardi.pl' ."\r\n"
    .'Content-Type: text/plain; charset=utf-8'."\r\n" ;
    if ($email != NULL) {
        mail($to, '=?utf-8?B?'.base64_encode($subject).'?=',$txt,$headers);
    }
    //redirect
    header("Location: /kontakt/wiadomosc-wyslana");
?>