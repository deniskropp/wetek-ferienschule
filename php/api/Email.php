<?php 
    use PHPMailer\PHPMailer\PHPMailer;

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    
    error_reporting(E_ALL);
    ini_set('display_errors', '1');

    include '../default.php';
    header("Access-Control-Allow-Methods: POST");

    include_once('../config/Database.php');


    function make_body($email)
    {
        $key = '923480239s42@#$@#';

        try
        {
            $issueDate = time();
            $expirationDate = time() * 3600; // 1hour
            $payload = array(
                "iss" => "http://localhoist/test",
                "aud" => "http://localhost",
                "iat" => $issueDate,
                "exp" => $expirationDate,
                "userName" => "Roger max",
            );

            $jwtGeneratedToken = JWT::encode($payload, $key, 'HS256');

            $msg = 'https://ferienschule.violass.club/'.$jwtGeneratedToken;
        }
        catch(PDOExecption $e)
        {
            $msg = $e->getMessage();
        }

        return $msg;
    }



    if (isset($_GET['email']))
        $email = $_GET['email'];
    else if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $data = file_get_contents("php://input");
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
            throw new Error('user not found');


        if ($email == $obj->Email) {
            $mail = new PHPMailer;

            $email = "kropp@wetek.de";

            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.ionos.de';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'meister@ferienschule.violass.club';                 // SMTP username
            $mail->Password = 'schule2022!';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to
            
            $mail->setFrom('meister@ferienschule.violass.club', 'Ferienschule');
            $mail->addAddress($email, 'User');     // Add a recipient
            
            $mail->Subject = 'Please follow the link';
            $mail->Body    = 
            $mail->AltBody = make_body($email);
            
            if(!$mail->send()) {
                $msg = 'Message could not be sent.' . 'Mailer Error: ' . $mail->ErrorInfo;
            } else {
                $msg = 'Message has been sent!';
            }

            echo '{"message":"'. $msg . '"}';
        }
	}
	else {
        echo '{"message":"No email specified!"}';
    }
?>
