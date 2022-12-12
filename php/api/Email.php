<?php

use PHPMailer\PHPMailer\PHPMailer;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

error_reporting(E_ALL);
ini_set('display_errors', '1');

include '../default.php';
header('Access-Control-Allow-Methods: POST');

include_once('../config/Database.php');

function generateRandomString($length = 25)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function make_code($connection, $user)
{
    $code = generateRandomString(20);

    try {
        $query = $connection->prepare('INSERT INTO Codes (Code, Teilnehmer_id) VALUES (?, ?)');

        $query->bindValue(1, $code, PDO::PARAM_STR);
        $query->bindValue(2, $user->id, PDO::PARAM_INT);

        if (!$query->execute())
            throw new Error('query execute failed');
    }
    catch (PDOException $e) {
        throw new Error($e->getMessage());
    }

    return $code;
}

function make_body($code)
{
    return 'https://ferienschule.violass.club/' . $code;
}

if (isset($_GET['email']))
    $email = $_GET['email'];
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    $body = json_decode($data);
    if ($body && isset($body->email))
        $email = $body->email;
}

if (isset($email)) {
    //objects
    $db = new Database();

    $connection = $db->connect();

    $sql = 'SELECT * FROM Teilnehmer WHERE Email = ?';

    $query = $connection->prepare($sql);

    $query->bindValue(1, $email, PDO::PARAM_STR);

    if (!$query->execute())
        throw new Error('query execute failed');

    $obj = $query->fetch(PDO::FETCH_OBJ);
    if (!$obj)
        $msg = 'Mit dieser E-Mail Adresse konnte kein Teilnehmer gefunden werden.';
    else if ($email == $obj->Email) {
        $mail = new PHPMailer;

        $code = make_code($connection, $obj);

        $email = 'kropp@wetek.de';

        $mail->isSMTP();
        // Set mailer to use SMTP
        $mail->Host = 'smtp.ionos.de';
        // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;
        // Enable SMTP authentication
        $mail->Username = 'meister@ferienschule.violass.club';
        // SMTP username
        $mail->Password = 'schule2022!';
        // SMTP password
        $mail->SMTPSecure = 'tls';
        // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;
        // TCP port to connect to

        $mail->setFrom('meister@ferienschule.violass.club', 'Ferienschule');
        $mail->addAddress($email, 'User');
        // Add a recipient

        $mail->Subject = 'Please follow the link';
        $mail->Body    =
            $mail->AltBody = make_body($code);

        if (!$mail->send()) {
            $msg = 'E-Mail konnte nicht versendet werden.' . ' Mailer Error: ' . $mail->ErrorInfo;
        } else {
            $msg = 'Eine E-Mail wurde versendet.';
        }
    }
} else {
    $msg = 'Keine E-Mail Adresse angegeben!';
}

echo '{"message":"' . $msg . '"}';
