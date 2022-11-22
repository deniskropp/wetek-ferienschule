<?php 
	include '../default.php';

	$conn = require '../db.php';

	$sql = 'DELETE * FROM Teilnehmer';

	if (isset($_GET['id'])) {
		$id = $_GET['id'];

		// write query for all users
		$sql .= ' WHERE id = '.$id;

        // get the result set (set of rows)
        $result = mysqli_query($conn, $sql);

        // fetch the resulting rows as an array
        $entries = mysqli_fetch_all($result, MYSQLI_ASSOC);

        // free the $result from memory (good practise)
        mysqli_free_result($result);

        // close connection
        mysqli_close($conn);
	}
?>
