<?php
    //get data from form  
    $name = $_POST['name'];
    $email= $_POST['email'];
    $emailTo = $_POST['email-adress'];
    $mobile = $_POST['mobile'];
    $city= $_POST['city'];
    $street = $_POST['street'];
    $postal = $_POST['postal'];
    $samples = $_POST['samples'];
    $to = 'biuro@lozko24.pl';
    $txt = " Imię i nazwisko: ". $name . "\r\n E-mail: " . $email . "\r\n Telefon: " .$mobile. "\r\n Miasto: " . $city . "\r\n Ulica i numer domu: " . $street. "\r\n Kod pocztowy: " . $postal . "\r\n Nazwa tkanin/tkaniny: " . $samples;
    $headers = "Od: no-reply@azardi.pl";
    if ($email != NULL) {
        mail($to,$street,$txt,$headers);
    }
    //redirect
    header("Location: /tkaniny/bezplatne-probki");
?>