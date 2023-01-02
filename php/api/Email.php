<?php

include_once '../default.php';

include_once '../config/Database.php';

include_once '../lib/Response.php';
include_once '../lib/Util.php';

use PHPMailer\PHPMailer\PHPMailer;


$res = new Response();

try {
    $body = json_decode(file_get_contents('php://input'));
    if ($body) {
        $email = $body->email;

        if (isset($email)) {
            $db = new Database();

            $query = $db->exec('SELECT * FROM Teilnehmer WHERE Email = ?',
                               array($email),
                               array(PDO::PARAM_STR));

            $obj = $query->fetch(PDO::FETCH_OBJ);
            if ($obj) {
                $code = make_code($db, $obj->id, false);

                // Set mailer to use SMTP
                // Specify main and backup SMTP servers
                // Enable SMTP authentication
                // SMTP username
                // SMTP password
                // Enable TLS encryption, `ssl` also accepted
                // TCP port to connect to
                $mail = new PHPMailer;

                $mail->setFrom('meister@ferienschule.violass.club', 'Ferienschule');

                $mail->isSMTP();
                $mail->Host = 'smtp.ionos.de';
                $mail->SMTPAuth = true;
                $mail->Username = 'meister@ferienschule.violass.club';
                $mail->Password = 'schule2022!';
                $mail->SMTPSecure = 'tls';
                $mail->Port = 587;

                // Add a recipient
                $mail->addAddress($email, 'User');

                $mail->Subject = 'Zugang: Login URL (bitte im Browser eingeben)';
                $mail->Body    =
                $mail->AltBody = make_body($code);

                if (!$mail->send()) {
                    $res->setError('E-Mail konnte nicht versendet werden.' . ' Mailer Error: ' . $mail->ErrorInfo);
                }
                else {
                    $res->setError('Eine E-Mail wurde versendet.');
                }
            }
            else {
                $res->setError('Mit dieser E-Mail Adresse konnte kein Teilnehmer gefunden werden.');
            }
        }
        else {
            $res->setError('Keine E-Mail Adresse angegeben!');
        }
    }
    else {
        $res->setError('invalid body');
    }
}
catch (Exception $e) {
    $res->setError('Exception: ' . $e->getMessage());
}

$res->finish();


//--------------------------------------------------------------------------------

function make_code($db, $id, $admin): string
{
    $code = generateRandomString(20);

    $db->exec('INSERT INTO Codes (Code, Teilnehmer_id, admin) VALUES (?, ?, ?)',
        array($code, $id, $admin),
        array(PDO::PARAM_STR, PDO::PARAM_INT, PDO::PARAM_BOOL));

    return $code;
}

function make_body($code): string
{
    return $_SERVER['HTTP_REFERER'] . 'authenticate/' . $code;
}
