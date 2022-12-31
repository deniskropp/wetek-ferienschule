<?php

include_once '../config/Auth.php';
include_once '../config/Database.php';

include_once '../lib/Response.php';
include_once '../lib/Target.php';

class Targets
{
    private $auth;

    /**
     * @throws Exception
     */
    public function __construct($auth)
    {
        if ($auth->getId() == null)
            throw new Exception('invalid auth');

        $this->auth = $auth;
    }

    public function get($body)
    {
        $target = $body->target;
        $data = $body->data;

        if ($target == 'Me.isAdmin')
            return new TargetMe('isAdmin', $this->auth->isAdmin());

        if ($target == 'Teilnehmer.me')
            return new TargetDBGet(
                'SELECT * FROM Teilnehmer WHERE id = ?',
                array($this->auth->getId()),
                array(PDO::PARAM_STR)
            );

        if ($target == 'Anwesenheit.me')
            return new TargetDBGetMulti(
                'SELECT * FROM Anwesenheit WHERE Teilnehmer_id = ?',
                array($this->auth->getId()),
                array(PDO::PARAM_STR)
            );

        if ($this->auth->isAdmin()) {
            if ($target == 'Teilnehmer.all') {
                $sql = 'SELECT Teilnehmer.Name, Teilnehmer.Vorname, ' .
                              'Teilnehmer.Klassen_id, Teilnehmer.Email, ' .
                              'Teilnehmer.id, Klassen.Name AS Klasse FROM Teilnehmer ' .
                              'LEFT JOIN Klassen ON Teilnehmer.Klassen_id = Klassen.id ' .
                              'ORDER BY Teilnehmer.Name';
                return new TargetDBGetMulti($sql, array(), array());
            }

           if ($target == 'Teilnehmer.delete')
                return new TargetDBDelete(
                    'DELETE FROM Teilnehmer WHERE id = ?',
                    array($data->id),
                    array(PDO::PARAM_INT)
                );

            if ($target == 'Teilnehmer.get')
                return new TargetDBGet(
                    'SELECT * FROM Teilnehmer WHERE id = ?',
                    array($data->id),
                    array(PDO::PARAM_INT)
                );

            if ($target == 'Teilnehmer.put')
                return new TargetDBPut(
                    'UPDATE Teilnehmer SET Name = ?, Vorname = ?, Klassen_id = ?, Email = ? WHERE id = ?',
                    array($data->Name, $data->Vorname, $data->Klassen_id, $data->Email, $data->id),
                    array(PDO::PARAM_STR, PDO::PARAM_STR, PDO::PARAM_INT, PDO::PARAM_STR, PDO::PARAM_INT)
                );


            if ($target == 'Klassen.all')
                return new TargetDBGetMulti(
                    'SELECT * FROM Klassen ORDER BY Name', array(), array()
                );

            if ($target == 'Klassen.delete')
                return new TargetDBDelete(
                    'DELETE FROM Klassen WHERE id = ?',
                    array($data->id),
                    array(PDO::PARAM_INT)
                );

            if ($target == 'Klassen.get')
                return new TargetDBGet(
                    'SELECT * FROM Klassen WHERE id = ?',
                    array($data->id),
                    array(PDO::PARAM_INT)
                );
        }

        return false;
    }
}


class TargetMe implements Target
{
    private $key;
    private $value;

    public function __construct($key, $value)
    {
        $this->key = $key;
        $this->value = $value;
    }

    public function request($response)
    {
        $response->setData($this->key, $this->value);
    }
}


class TargetDBGet implements Target
{
    private $db;
    protected $query;

    /**
     * @throws Exception
     */
    public function __construct($sql, $values, $types)
    {
        $this->db = new Database();
        $this->query = $this->db->exec($sql, $values, $types);
    }

    public function request($response)
    {
        $obj = $this->query->fetch(PDO::FETCH_ASSOC);

        foreach ($obj as $key => $value) {
            $response->setData($key, $value);
        }
    }
}

class TargetDBGetMulti extends TargetDBGet
{
    public function request($response)
    {
        $obj = $this->query->fetchAll(PDO::FETCH_OBJ);

        $response->setArray($obj);
    }
}

class TargetDBDelete extends TargetDBGet
{
    public function request($response)
    {
    }
}

class TargetDBPut extends TargetDBGet
{
    public function request($response)
    {
        $obj = $this->query->fetchAll(PDO::FETCH_OBJ);

        $response->setArray($obj);
    }
}
