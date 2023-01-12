<?php

	use \Firebase\JWT\JWT;
	use \Firebase\JWT\Key;

    class Auth
    {
        private static $jwt_key = '923480239s42@#$@#';

        private $id = null;
        private $admin = false;

        public function __construct($headers = null)
        {
            $GLOBALS['res']->log('Auth( ' . print_r($headers, true) . ' )');

            if (isset($headers)) {
                if (!isset($headers['Authorization']))
                    throw new Exception('Auth: missing header');

                $token = str_ireplace('Bearer ', '', $headers['Authorization']);
                //$GLOBALS['res']->log('  $token(' . print_r($token, true) . ')');

                $decoded = JWT::decode($token, new Key(Auth::$jwt_key, 'HS256'));
                //$GLOBALS['res']->log('  $decoded(' . print_r($decoded, true) . ')');

                $this->id = $decoded->Teilnehmer_id;
                $this->admin = $decoded->admin ? true : false;
            }
            else {
                $GLOBALS['res']->log('Auth()');
            }

            $GLOBALS['res']->log('  $this(' . print_r($this, true) . ')');
        }

        public function makeToken($Teilnehmer_id, $admin)
        {
            $GLOBALS['res']->log('Auth::makeToken( ' . print_r($Teilnehmer_id, true) . ', ' . print_r($admin, true) . ' )');

            return JWT::encode(array(
                "Teilnehmer_id" => $Teilnehmer_id,
                "admin" => $admin
            ), Auth::$jwt_key, 'HS256');
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
    