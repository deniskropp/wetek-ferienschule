<?php
    // connect to the database
    $conn = mysqli_connect('localhost:3333', 'root', '', 'db');

    // check connection
    if (!$conn) {
    	echo 'Connection error: '. mysqli_connect_error();
    }

    return $conn;
?>
