<?php
$file = "contact.txt";
// get the file
$current = file_get_contents($file);
// get the data from contact page
ob_start();
var_dump($_REQUEST);
$result = ob_get_clean();

// Write the contents back to the file
$current .= $result. "\n";
file_put_contents($file, $current);
// We redirect the user back to the contact page
echo "Thank You! Your Request is Sent to Us, We will get back to you soon";
// header( "refresh:5;url=wherever.php" );
header( 'refresh:5;url=https://cst221-spring2017-peerni95.c9users.io/FinalProject/contact.html' ) ;
?>