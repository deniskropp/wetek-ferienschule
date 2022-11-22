<?php 
	include '../default.php';


	try
	{
		$headers = apache_request_headers();
		
		if(isset($headers['Authorization']))
		{
			$token = str_ireplace('Bearer ', '', $headers['Authorization']);
			
			$decoded = JWT::decode($token , new Key($this->key, 'HS256'));

			if(isset($decoded->userName) && $decoded->userName == 'Roger max')
			{
				
				//Query for reading posts from table.
				
				$query = 'SELECT
				category.name as category,
				posts.id,
				posts.title,
				posts.description,
				posts.category_id,
				posts.created_at
				FROM '.$this->table.' posts LEFT JOIN
				category ON posts.category_id = category.id
				ORDER BY
				posts.created_at DESC
				';

				$post = $this->connection->prepare($query);

				$post->execute();

				return $post;
			}
			else
			{
				return 3;
			}
		}
		else
		{
			return 2;
		}
		


	}
	catch(PDOException $e)
	{
		echo $e->getMessage();
	}



	$conn = require '../db.php';

	$sql = 'SELECT * FROM Anwesenheit';

	if (isset($_GET['id'])) {
		$id = $_GET['id'];

		// write query for all users
		$sql .= ' WHERE Teilnehmer_id = '.$id;
	}
	else {
		// write query for all users
		$sql .= ' ORDER BY Datum';
	}

	// get the result set (set of rows)
	$result = mysqli_query($conn, $sql);

	// fetch the resulting rows as an array
	$entries = mysqli_fetch_all($result, MYSQLI_ASSOC);

	// free the $result from memory (good practise)
	mysqli_free_result($result);

	// close connection
	mysqli_close($conn);
?>

<?php
	echo json_encode($entries)
?>
