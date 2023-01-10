<?php

include_once '../default.php';

include_once '../config/Database.php';
include_once '../config/Setup.php';

include_once '../lib/Response.php';
include_once '../lib/Util.php';

use PHPMailer\PHPMailer\PHPMailer;


$GLOBALS['res'] = $res = new Response();

try {
    $body = json_decode(file_get_contents('php://input'));
    if ($body) {
        if (isset($body->email)) {
            $db = new Database();

            $user = find_user($db, $body->email);
            if ($user) {
                $code = make_code($db, $user['id'], $user['admin']);

                // Set mailer to use SMTP
                // Specify main and backup SMTP servers
                // Enable SMTP authentication
                // SMTP username
                // SMTP password
                // Enable TLS encryption, `ssl` also accepted
                // TCP port to connect to
                $mail = new PHPMailer;

                $mail->setFrom(Setup::$email['from'], Setup::$email['name']);

                $mail->isSMTP();
                $mail->Host = Setup::$smtp['host'];
                $mail->SMTPAuth = true;
                $mail->Username = Setup::$smtp['user'];
                $mail->Password = Setup::$smtp['pass'];
                $mail->SMTPSecure = 'tls';
                $mail->Port = 587;

                // Add a recipient
                $mail->addAddress($user['email'], $user['name']);

                $mail->Subject = 'Link zur Aktivierung';
                $mail->Body    =
                $mail->AltBody = make_body($code);

                if (!$mail->send()) {
                    $res->setError('E-Mail konnte nicht versendet werden (' . $mail->ErrorInfo . ')');
                }
                else {
                    $res->setMessage('Eine E-Mail wurde an Sie versendet. Sehen Sie eventuell auch im Junk Folder nach!');
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
        $res->setError('Email: invalid body');
    }
}
catch (Exception $e) {
    $res->setError($e->getMessage());
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
    return str_replace('/email', '/', $_SERVER['HTTP_REFERER'])
        . 'authenticate/' . $code
        . ' (bitte im Browser eingeben)';
}

function find_user($db, $email)
{
    foreach (Setup::$admins as $admin) {
        if ($admin['email'] == $email) {
            return [
                'id' => 0,
                'admin' => true,
                'name' => $admin['name'],
                'email' => $admin['email']
            ];
        }
    }

    $query = $db->exec(
        'SELECT id, Name, Vorname, Email FROM Teilnehmer WHERE Email = ?',
        array($email),
        array(PDO::PARAM_STR)
    );

    $obj = $query->fetch(PDO::FETCH_OBJ);
    if ($obj) {
        return [
            'id' => $obj->id,
            'admin' => false,
            'name' => $obj->Vorname . ' ' . $obj->Name,
            'email' => $obj->Email
        ];
    }

    return null;
}
