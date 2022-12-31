<?php


class Database
{

    // Database Properties.

    private $host = 'localhost:4401';
    private $db_name = 'db';
    private $username = 'root';
    private $password = '';
    private $connection = null;


    /**
     * @throws Exception
     */
    public function exec($sql, $values, $types)
    {
        if ($this->connection === null)
            $this->connection = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name,
                $this->username,
                $this->password,
            );

        $q = $this->connection->prepare($sql);

        for ($i = 0; $i < count($values); $i++)
            $q->bindValue($i + 1, $values[$i], $types[$i]);

        if (!$q->execute())
            throw new Exception( 'query execute failed (' . $sql . ')' );

        return $q;
    }
}
