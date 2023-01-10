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
        $GLOBALS['res']->log('Targets( ' . print_r($auth, true) . ' )');

        if ($auth->getId() === null)
            throw new Exception('Targets: invalid auth');

        $this->auth = $auth;
    }

    public function get($body)
    {
        $GLOBALS['res']->log('Targets::get( ' . print_r($body, true) . ' )');

        if (isset($body->target))
            $target = $body->target;

        if (isset($body->data))
            $data = $body->data;

        if ($target === 'Me.isAdmin')
            return new TargetMeIsAdmin($this->auth);

        $id = $this->auth->getId();
        $GLOBALS['res']->log('  $id(' . print_r($id, true) . ')');

        // Authorization successful
        if ($id !== null) {
            // initial part of commonly used query joining Teilnehmer/Klassen
            $sql_teilnehmer_join =
                'SELECT Teilnehmer.id, ' .
                'Teilnehmer.Name, ' .
                'Teilnehmer.Vorname, ' .
                'Teilnehmer.Klassen_id, ' .
                'Teilnehmer.Email, ' .
                'Klassen.Name AS Klasse, ' .
                'Klassen.Schule ' .
                'FROM Teilnehmer ' .
                'LEFT JOIN Klassen ' .
                'ON Teilnehmer.Klassen_id = Klassen.id ';

            // final query (single item)
            $sql_teilnehmer_one = $sql_teilnehmer_join .
                'WHERE Teilnehmer.id = ?';

            // final query (sorted multi)
            $sql_teilnehmer_all = $sql_teilnehmer_join .
                'ORDER BY Teilnehmer.Name';

            // Teilnehmer_id valid (normal account with Anwesenheit etc)
            if ($id !== 0) {
                if ($target == 'Teilnehmer.me') {
                    return new TargetDBGet(
                        $sql_teilnehmer_one,
                        array($id),
                        array(PDO::PARAM_INT)
                    );
                }

                if ($target == 'Anwesenheit.me') {
                    return new TargetDBGetMulti(
                        'SELECT * FROM Anwesenheit WHERE Teilnehmer_id = ? ORDER BY Datum DESC',
                        array($id),
                        array(PDO::PARAM_INT)
                    );
                }

                if ($target == 'Anwesenheit.post') {
                    $sql = 'INSERT INTO Anwesenheit (Datum, Teilnehmer_id) VALUES (?, ?)';
                    return new TargetDBNew(
                        $sql,
                        array($data->Datum, $this->auth->getId()),
                        array(PDO::PARAM_STR, PDO::PARAM_INT)
                    );
                }
            }

            // Administrative access?
            if ($this->auth->isAdmin()) {
                if ($target == 'Teilnehmer.all') {
                    return new TargetDBGetMulti(
                        $sql_teilnehmer_all,
                        array(),
                        array()
                    );
                }

                if ($target == 'Teilnehmer.delete') {
                    return new TargetDBDelete(
                        'DELETE FROM Teilnehmer WHERE id = ?',
                        array($data->id),
                        array(PDO::PARAM_INT)
                    );
                }

                if ($target == 'Teilnehmer.get') {
                    return new TargetDBGet(
                        $sql_teilnehmer_one,
                        array($data->id),
                        array(PDO::PARAM_INT)
                    );
                }

                if ($target == 'Teilnehmer.post') {
                    $sql = 'INSERT INTO Teilnehmer (Name, Vorname, Klassen_id, Email) VALUES (?, ?, ?, ?)';
                    return new TargetDBNew(
                        $sql,
                        array($data->Name, $data->Vorname, $data->Klassen_id, $data->Email),
                        array(PDO::PARAM_STR, PDO::PARAM_STR, PDO::PARAM_INT, PDO::PARAM_STR)
                    );
                }

                if ($target == 'Teilnehmer.put') {
                    return new TargetDBPut(
                        'UPDATE Teilnehmer SET Name = ?, Vorname = ?, Klassen_id = ?, Email = ? WHERE id = ?',
                        array($data->Name, $data->Vorname, $data->Klassen_id, $data->Email, $data->id),
                        array(PDO::PARAM_STR, PDO::PARAM_STR, PDO::PARAM_INT, PDO::PARAM_STR, PDO::PARAM_INT)
                    );
                }


                if ($target == 'Klassen.all') {
                    return new TargetDBGetMulti(
                        'SELECT * FROM Klassen ORDER BY Name',
                        array(),
                        array()
                    );
                }

                if ($target == 'Klassen.delete') {
                    return new TargetDBDelete(
                        'DELETE FROM Klassen WHERE id = ?',
                        array($data->id),
                        array(PDO::PARAM_INT)
                    );
                }

                if ($target == 'Klassen.get') {
                    return new TargetDBGet(
                        'SELECT * FROM Klassen WHERE id = ?',
                        array($data->id),
                        array(PDO::PARAM_INT)
                    );
                }

                if ($target == 'Klassen.post') {
                    $sql = 'INSERT INTO Klassen (Name, Schule) VALUES (?, ?)';
                    return new TargetDBNew(
                        $sql,
                        array($data->Name, $data->Schule),
                        array(PDO::PARAM_STR, PDO::PARAM_STR)
                    );
                }

                if ($target == 'Klassen.put') {
                    return new TargetDBPut(
                        'UPDATE Klassen SET Name = ?, Schule = ? WHERE id = ?',
                        array($data->Name, $data->Schule, $data->id),
                        array(PDO::PARAM_STR, PDO::PARAM_STR, PDO::PARAM_INT)
                    );
                }
            }
        }

        return false;
    }
}

// ---

abstract class TargetMe implements Target
{
    protected $auth;

    public function __construct($auth)
    {
        $this->auth = $auth;
    }
}

class TargetMeIsAdmin extends TargetMe
{
    public function request($response)
    {
        $response->setData('isAdmin', $this->auth->isAdmin());
    }
}

// ---

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

class TargetDBDelete extends TargetDBGetMulti
{
}

class TargetDBNew extends TargetDBGetMulti
{
}

class TargetDBPut extends TargetDBGetMulti
{
}
