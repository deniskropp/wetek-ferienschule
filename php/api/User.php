<?php 
    header("Access-Control-Allow-Methods: POST");

	include_once '../default.php';

    include_once('../config/Auth.php');
    include_once('../config/Targets.php');
    include_once('../lib/Response.php');

    $res = new Response();

    try {
        $auth = new Auth();

        if ($auth->getId() != null) {
            $targets = new Targets($auth);

            $data = file_get_contents( 'php://input' );
            $body = json_decode( $data );
            if ($body && isset($body->target)) {
                $target = $targets->get($body->target, $body->data);
    
                if (isset($target)) {
                    $target->request($body->data, $res);
                }
                else {
                    $res->setError('invalid target');
                }
            }
            else {
                $res->setError('invalid body');
            }
        }
        else {
            $res->setError('invalid auth');
        }
    }
    catch (Exception $e) {
        $res->setError($e->getMessage());
    }

    echo $res->toString();
