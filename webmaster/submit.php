<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username  = htmlspecialchars($_POST['name']);
    $type = htmlspecialchars($_POST['type']);
    $message   = htmlspecialchars($_POST['message']);
    $timestamp = date("Y-m-d H:i:s");

    $data = "Timestamp: $timestamp, Name of organization: $username, Type of resource: $type, Message: $message" . PHP_EOL;

    $file = 'user_submissions.txt';

    $fh = fopen($file, 'a') or die("Can't open file");
    fwrite($fh, $data);
    fclose($fh);

    echo "Thank you for your submission! Your data has been stored.";
} else {
    header("Location: index.html");
    exit();
}
?>
