<?php 
    header("Access-Control-Allow-Methods: POST");

	include '../default.php';
	include '../secrets.php';

    include_once('../config/Database.php');
    include_once('../lib/Response.php');

	use \Firebase\JWT\JWT;

	function lookupCode($code) {
		$db = new Database();
		$connection = $db->connect();

		$q = $connection->prepare('SELECT Teilnehmer_id FROM Codes WHERE Code = ?');

		$q->bindValue(1, $code, PDO::PARAM_STR);

		if (!$q->execute())
			throw new Error( 'query execute failed' );

		$obj = $q->fetch(PDO::FETCH_OBJ);

		return $obj->Teilnehmer_id;
	}



    $res = new Response();

    try {
		$data = file_get_contents( 'php://input' );
		$body = json_decode( $data );
		if ($body && isset($body->code)) {
			$id = lookupCode($body->code);

			$token = array(
				"Teilnehmer_id" => $id,
				"admin" => $id == 0 ? true : false,
			);

			$jwt = JWT::encode($token, Secrets::$jwt_key, 'HS256');

            $res->setData('token', $jwt);
		}
		else {
            $res->setError('invalid code');
		}
	}
    catch (Exception $e) {
        $res->setError($e->getMessage());
    }

    echo $res->toString();
