<?php

    include_once('../default.php');
    include_once('../secrets.php');

	use \Firebase\JWT\JWT;
	use \Firebase\JWT\Key;

    class Auth
    {
        private $id = null;
        private $admin = false;

        public function __construct($headers)
        {
            if (isset($headers) && isset($headers['Authorization'])) {
                $token = str_ireplace('Bearer ', '', $headers['Authorization']);

                $decoded = JWT::decode($token, new Key(Secrets::$jwt_key, 'HS256'));

                $this->id = $decoded->Teilnehmer_id;
                $this->admin = true;//$decoded->admin;
            }
        }

        public function makeToken($Teilnehmer_id, $admin)
        {
            return JWT::encode(array(
                "Teilnehmer_id" => $Teilnehmer_id,
                "admin" => $admin
            ), Secrets::$jwt_key, 'HS256');
        }

        public function getId()
        {
            return $this->id;
        }

        public function isAdmin(): bool
        {
            return $this->admin;
        }
    }
    