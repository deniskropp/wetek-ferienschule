<?php 

include_once '../default.php';
include_once '../secrets.php';

include_once '../config/Auth.php';
include_once '../config/Database.php';

include_once '../lib/Response.php';

use \Firebase\JWT\JWT;


$res = new Response();

try {
    $auth = new Auth(null);

    $body = json_decode(file_get_contents('php://input'));
    if ($body) {
        if (isset($body->code)) {
            $code = lookupCode($body->code);

            $jwt = $auth->makeToken($code->Teilnehmer_id, $code->admin);

            $res->setData('token', $jwt);
        }
        else {
            $res->setError('no code');
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

/**
 * @throws Exception
 */
function lookupCode($code) {
    $db = new Database();

    $q = $db->exec('SELECT Teilnehmer_id FROM Codes WHERE Code = ?',
        array($code),
        array(PDO::PARAM_STR));

    $obj = $q->fetch(PDO::FETCH_OBJ);
    if (!$obj)
        throw new Error('could not find code');

    return $obj;
}
