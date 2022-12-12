<?php

    include_once('../lib/Response.php');
    include_once('../lib/Target.php');

    class Targets {
        private $auth;

        public function __construct($auth)
        {
            $this->auth = $auth;
        }

        public function get($target, $data)
        {
            if ($this->auth->getId() > 0) {
                if ($target == 'Teilnehmer.get')
                    return new TargetDBGet('SELECT * FROM Teilnehmer WHERE id = ?',
                                            array($this->auth->getId()),
                                            array(PDO::PARAM_STR));

                if ($target == 'Anwesenheit.get')
                    return new TargetDBGetMulti('SELECT * FROM Anwesenheit WHERE Teilnehmer_id = ?',
                                                array($this->auth->getId()),
                                                array(PDO::PARAM_STR));

                if ($target == 'Klassen.get')
                    return new TargetDBGetMulti('SELECT * FROM Klassen WHERE id = ?',
                                                array($data->id),
                                                array(PDO::PARAM_INT));

                return null;
            }
        }
    }

    include_once('../config/Database.php');

    class TargetDBGet implements Target
    {
        private $db;
        private $connection;
        protected $query;

        public function __construct($sql, $values, $types)
        {
            $this->db = new Database();

            $this->connection = $this->db->connect();
            
            $this->query = $this->connection->prepare($sql);

            for ($i = 0; $i < count($values); $i++) {
                $this->query->bindValue($i+1, $values[$i], $types[$i]);
            }
        }

        public function request($data, $response)
        {
            if (!$this->query->execute())
                throw new Error( 'query execute failed' );
    
            $obj = $this->query->fetch(PDO::FETCH_ASSOC);
    
            foreach ($obj as $key => $value) {
                $response->setData($key, $value);
            }
        }
    }

    class TargetDBGetMulti extends TargetDBGet
    {
        public function request($data, $response)
        {
            if (!$this->query->execute())
                throw new Error( 'query execute failed' );
    
            $obj = $this->query->fetchAll(PDO::FETCH_OBJ);

            $response->setArray($obj);
        }
    }
