<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$recipient = 'seijalehtinen3@gmail.com'; 
$subject="Feedback Form"; 
//creating message
$content = "New contact form submission \n From: ".$name.",\n Email: ".$email.", \n Message: ".$message;
//sending message
mail($recipient, $message, $content);

header("Location: notification.html")

?>