<?php

if (isset($_POST['contact-submit'])) {
    $contactName = $_POST['contact-name'];
    $mailFrom = $_POST['contact-email'];
    $projectMessage = $_POST['contact-project'];

    $mailTo = "t.wallis98@outlook.com";
    $headers = "WS - From: ".$mailFrom;
    $txt = "You have recieved an email from ".$contactName.". \n\n".$projectMessage;

    mail($mailTo, $subject, $text, $headers);
    header("Location: contact.html?mailsend");


}
