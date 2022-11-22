<?php


class Database {

    // Database Properties.

    private $host = 'localhost:3334';
    private $db_name = 'db';
    private $username = 'root';
    private $password = '';
    private $connection = null;


    // Function for making connection to database.

    public function connect()
    {
        try
        {
            $this->connection = new PDO('mysql:host='.$this->host.';dbname='.$this->db_name,
                                    $this->username,
                                    $this->password,
        );
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }

        return $this->connection;
    }

    
}