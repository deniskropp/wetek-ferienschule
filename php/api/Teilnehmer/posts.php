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

$post = new Post($db);

$data = $post->readPosts();

if(is_numeric($data))
{
    if($data == 2)
    {
        echo json_encode(['message' => 'You are not authorised']);
    }
    else if ($data == 3)
    {
        echo json_encode(['message' => 'You are not authorised']);
    }
    exit;
}

//return $data;


// If there is posts in database.

if($data->rowCount())
{
    $posts = [];

    // re-aggrange the posts data.

    while($row = $data->fetch(PDO::FETCH_OBJ))
    {
        $posts[$row->id] = [
            'id' => $row->id,
            'categoryName' =>  $row->category,
            'description' =>  $row->description,
            'title' =>  $row->title,
            'created_at' =>  $row->created_at,
        ];
    }

    echo json_encode($posts);


}
else
{
    echo json_encode(['message' => ' No posts found']);
}