<?php

error_reporting(E_ALL);
ini_set('display_error', 1);

// Headers

Header('Access-Control-Allow-Origin: *');
Header('Content-Type: application/json');
Header('Access-Control-Allow-Method: POST');

// Including required files.
include_once('../../config/Database.php');
include_once('../../models/Teilnehmer.php');

// Connecting with database.

$database = new Database;
$db =  $database->connect();

$token = new Post($db);

if(!$token->auth())
{
    http_response_code(404);

    echo json_encode([
        'message' => 'Could not generate token, Contact Admin',
    ]);
}
else
{
    http_response_code(200);

    echo json_encode($token->auth());
}