<?php

    include_once('../default.php');
    include_once('../secrets.php');

	use \Firebase\JWT\JWT;
	use \Firebase\JWT\Key;

    class Auth
    {
        private $id = null;

        public function __construct()
        {
            $headers = apache_request_headers();

            if (isset($headers['Authorization'])) {
                $token = str_ireplace('Bearer ', '', $headers['Authorization']);

                $decoded = JWT::decode($token, new Key(Secrets::$jwt_key, 'HS256'));

                $this->id = $decoded->Teilnehmer_id;
            }
        }

        public function getId()
        {
            return $this->id;
        }
    }
    