<?php 
	use \Firebase\JWT\JWT;
	
	include '../default.php';
    header("Access-Control-Allow-Methods: POST");

	
	if (!isset($_POST['email']))
		throw new Error('email is not set');


	$conn = require '../db.php';

	$sql = 'SELECT * FROM Teilnehmer';

	$email = $_POST['email'];

	// write query for all users
	$sql .= ' WHERE Email = "'.$email.'"';

	// get the result set (set of rows)
	$result = mysqli_query($conn, $sql);

	// fetch the resulting rows as an array
	$entries = mysqli_fetch_all($result, MYSQLI_ASSOC);

	// free the $result from memory (good practise)
	mysqli_free_result($result);

	// close connection
	mysqli_close($conn);
	
	echo json_encode($entries);
?>


<?php

$key = "example_key";
$token = array(
    "iss" => "http://example.org",
    "aud" => "http://example.com",
    "iat" => 1356999524,
    "nbf" => 1357000000
);

/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
$jwt = JWT::encode($token, $key);
$decoded = JWT::decode($jwt, $key, array('HS256'));

print_r($decoded);

/*
 NOTE: This will now be an object instead of an associative array. To get
 an associative array, you will need to cast it as such:
*/

$decoded_array = (array) $decoded;

/**
 * You can add a leeway to account for when there is a clock skew times between
 * the signing and verifying servers. It is recommended that this leeway should
 * not be bigger than a few minutes.
 *
 * Source: http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#nbfDef
 */
JWT::$leeway = 60; // $leeway in seconds
$decoded = JWT::decode($jwt, $key, array('HS256'));

?>