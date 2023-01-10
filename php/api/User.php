<?php 

include_once '../default.php';

include_once '../config/Auth.php';
include_once '../config/Targets.php';

include_once '../lib/Response.php';


$GLOBALS['res'] = $res = new Response();

$res->log('======================== User.php =============================');
//$res->log('=== ' . print_r($_SERVER, true) . '===');

try {
    $auth = new Auth(apache_request_headers());

    $body = json_decode( file_get_contents( 'php://input' ) );
    if ($body) {
        $targets = new Targets($auth);

        $target = $targets->get($body);
        $res->log('  $target(' . print_r($target, true) . ')');

        if ($target) {
            $target->request($res);
        }
        else {
            $res->setError('User: invalid target (' . $body->target . ')');
        }
    }
    else {
        $res->setError('User: invalid body');
    }
}
catch (Exception $e) {
    $res->setError($e->getMessage());
}

$res->finish();