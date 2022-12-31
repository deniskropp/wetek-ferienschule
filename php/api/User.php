<?php 

include_once '../default.php';

include_once '../config/Auth.php';
include_once '../config/Targets.php';

include_once '../lib/Response.php';


$res = new Response();

try {
    $auth = new Auth(apache_request_headers());

    $body = json_decode( file_get_contents( 'php://input' ) );
    if ($body) {
        $targets = new Targets($auth);

        $target = $targets->get($body);
        if ($target) {
            $target->request($res);
        }
        else {
            $res->setError('invalid target (' . $body->target . ')');
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