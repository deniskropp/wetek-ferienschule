<?php

include_once 'Setup.php';


class Database
{
    private $connection = null;

    /**
     * @throws Exception
     */
    public function exec($sql, $values, $types)
    {
        if ($this->connection === null) {
            $this->connection = new PDO('mysql:' .
                                        'host=' . Setup::$mysql['host'] . ';' .
                                        'dbname=' . Setup::$mysql['db'],
                                        Setup::$mysql['user'],
                                        Setup::$mysql['pass']
            );
        }

        $q = $this->connection->prepare($sql);

        for ($i = 0; $i < count($values); $i++)
            $q->bindValue($i + 1, $values[$i], $types[$i]);

        if (!$q->execute())
            throw new Exception( 'query execute failed (' . $sql . ')' );

        return $q;
    }
}
