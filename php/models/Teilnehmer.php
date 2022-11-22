<?php

error_reporting(E_ALL);
ini_set('display_error', 1);

require($_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php');

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

/**
 * @OA\Info(title="PDO PHP REST API", version="1.0")
 *    @OA\SecurityScheme(
 *        type="http",
 *        description="Authorisation with JWT generated tokens",
 *        name="Authorization",
 *        in="header",
 *        scheme="bearer",
 *        bearerFormat="JWT",
 *        securityScheme="bearerToken"
 *    )
 */

class Teilnehmer {
    
    // Teilnehmer Properties.
    public $id;
    public $Name;
    public $Vorname;
    public $Klassen_id;
    public $Email;
    public $dateModified;
    protected $key = '923480239s42@#$@#';

    // Database Data.

    private $connection;
    private $table = 'Teilnehmer';

    public function __construct($db)
    {
        $this->connection = $db;
    }


     /**
     * @OA\Get(
     *     path="/api/Teilnehmer/auth.php",
     *     summary="Generates Tokens for validation.",
     *     tags={"Security"},
     *     @OA\Response(response="200", description="An example resource"),
     *     @OA\Response(response="404", description="Not Found"),
     * )
     */
    public function auth()
    {
        try
        {
            $issueDate = time();
            $expirationDate = time() * 3600; // 1hour
            $payload = array(
                "iss" => "https://ferienschule.violass.club:444",
                "aud" => "https://ferienschule.violass.club:444",
                "iat" => $issueDate,
                "exp" => $expirationDate,
                "userName" => "Roger max",
            );

            $jwtGeneratedToken = JWT::encode($payload, $this->key, 'HS256');

            return [
                'token' => $jwtGeneratedToken,
                'expires' => $expirationDate,
            ];
        }
        catch(PDOExecption $e)
        {
            echo $e->getMessage();
        }
    }

    /**
     * @OA\Get(
     *     path="/api/Teilnehmer/teilnehmer.php",
     *     summary="Method to read all the saved Teilnehmer from database.",
     *     tags={"Teilnehmer"},
     *     @OA\Response(response="200", description="An example resource"),
     *     @OA\Response(response="404", description="Not Found"),
     *     security={ {"bearerToken": {}}}
     * )
     */
    public function readTeilnehmer()
    {
        try
        {
           $headers = apache_request_headers();
           
           if(isset($headers['Authorization']))
           {
              $token = str_ireplace('Bearer ', '', $headers['Authorization']);
              
              $decoded = JWT::decode($token , new Key($this->key, 'HS256'));

                if(isset($decoded->userName) && $decoded->userName == 'Roger max')
                {
                    
                    //Query for reading teilnehmer from table.
                    
                    $query = 'SELECT
                    category.name as category,
                    teilnehmer.id,
                    teilnehmer.title,
                    teilnehmer.description,
                    teilnehmer.category_id,
                    teilnehmer.created_at
                    FROM '.$this->table.' teilnehmer LEFT JOIN
                    category ON teilnehmer.category_id = category.id
                    ORDER BY
                    teilnehmer.created_at DESC
                    ';

                    $teilnehmer = $this->connection->prepare($query);

                    $teilnehmer->execute();

                    return $teilnehmer;
                }
                else
                {
//                    return $decoded;
                    return 3;
                }
            }
            else
            {
//                return $headers;
                return 2;
            }
            


        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }

    }

    /**
     * @OA\Get(
     *     path="/api/Teilnehmer/single.php",
     *     summary="Method for reading single Teilnehmer",
     *     tags={"Teilnehmer"},
     *     @OA\Parameter(
     *        name="id",
     *        in="query",
     *        required=true,
     *        description="The id passed to get data like in query string",
     *        @Oa\Schema(
     *           type="string"
     *        )
     *     ),
     *     @OA\Response(response="200", description="An example resource"),
     *     @OA\Response(response="404", description="Not Found"),
     *     security={ {"bearerToken": {}}}
     * )
     */
    public function read_single_post($id)
    {

        try
        {
            $headers = apache_request_headers();
           
            if(isset($headers['Authorization']))
            {
               $token = str_ireplace('Bearer ', '', $headers['Authorization']);
               
               $decoded = JWT::decode($token , new Key($this->key, 'HS256'));
 
                 if(isset($decoded->userName) && $decoded->userName == 'Roger max')
                 {
                    $this->id = $id;

                    //Query for reading teilnehmer from table.
                    
                    $query = 'SELECT
                        category.name as category,
                        teilnehmer.id,
                        teilnehmer.title,
                        teilnehmer.description,
                        teilnehmer.category_id,
                        teilnehmer.created_at
                        FROM '.$this->table.' teilnehmer LEFT JOIN
                        category ON teilnehmer.category_id = category.id
                        WHERE teilnehmer.id=?
                        LIMIT 0,1
                    ';
            
                    $teilnehmer = $this->connection->prepare($query);
            
                   
                    // $teilnehmer->bindValue('id', $this->id, PDO::PARAM_INT);
                    // $teilnehmer->execute();
            
                    //$teilnehmer->execute([$this->id]);
                    $teilnehmer->bindValue(1, $this->id, PDO::PARAM_INT);
                    $teilnehmer->execute();
                    return $teilnehmer;

                 }

                 return false;
            }

            return false;
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }

    /**
     * @OA\Teilnehmer(
     *     path="/api/Teilnehmer/insert.php",
     *     summary="Method to create new records.",
     *     tags={"Teilnehmer"},
     *     @OA\RequestBody(
     *        @OA\MediaType(
     *            mediaType="multipart/form-data",
     *            @OA\Schema(
     *                @OA\Property(
     *                    property="title",
     *                    type="string",
     *                ),
     *                @OA\Property(
     *                    property="description",
     *                    type="string",
     *                ),
     *                @OA\Property(
     *                    property="category_id",
     *                    type="integer",
     *                ),
     *            ),
     *        ),
     *     ),
     *     @OA\Response(response="200", description="An example resource"),
     *     @OA\Response(response="404", description="Not Found"),
     *     security={ {"bearerToken": {}}}
     * )
     */
    public function create_new_post($params)
    {
        try
        {
            $headers = apache_request_headers();
           
            if(isset($headers['Authorization']))
            {
               $token = str_ireplace('Bearer ', '', $headers['Authorization']);
               
               $decoded = JWT::decode($token , new Key($this->key, 'HS256'));
 
                 if(isset($decoded->userName) && $decoded->userName == 'Roger max')
                 {
                    // Assigning values.

                    $this->title = $params['title'];
                    $this->description = $params['description'];
                    $this->category_id = $params['category_id'];

                    // Query to store new teilnehmer in database.

                    $query = 'INSERT INTO '. $this->table .'
                            SET 
                            title = :title,
                            category_id = :category_id,
                            description = :details';

                    $teilnehmer = $this->connection->prepare($query);

                    $teilnehmer->bindValue('title', $this->title);
                    $teilnehmer->bindValue('details', $this->description);
                    $teilnehmer->bindValue('category_id', $this->category_id);


                    if($teilnehmer->execute())
                    {
                        return true;
                    }

                    return false;
                 }

                 return false;
            }

            return false;
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }

    /**
     * @OA\Put(
     *     path="/api/Teilnehmer/update.php",
     *     summary="Method for updating Teilnehmer.",
     *     tags={"Teilnehmer"},
     *     @OA\RequestBody(
     *        @OA\MediaType(
     *            mediaType="json",
     *            @OA\Schema(
     *               @OA\Property(
     *                    property="id",
     *                    type="integer",
     *                ),
     *                @OA\Property(
     *                    property="title",
     *                    type="string",
     *                ),
     *                @OA\Property(
     *                    property="description",
     *                    type="string",
     *                ),
     *                @OA\Property(
     *                    property="category_id",
     *                    type="integer",
     *                ),
     *            ),
     *        ),
     *     ),
     *     @OA\Response(response="200", description="An example resource"),
     *     @OA\Response(response="404", description="Not Found"),
     *     security={ {"bearerToken": {}}}
     * )
     */
    public function update($params)
    {
        try
        {
            $headers = apache_request_headers();
           
            if(isset($headers['Authorization']))
            {
               $token = str_ireplace('Bearer ', '', $headers['Authorization']);
               
               $decoded = JWT::decode($token , new Key($this->key, 'HS256'));
 
                 if(isset($decoded->userName) && $decoded->userName == 'Roger max')
                 {

                    // Assigning values.

                    $this->id = $params['id'];
                    $this->title = $params['title'];
                    $this->description = $params['description'];
                    $this->category_id = $params['category_id'];

                    // Query for updating existing record.

                    $query = 'UPDATE '.$this->table.' 
                        SET
                        title = :title,
                        category_id = :category_id,
                        description = :details 
                        WHERE id = :id';

                    $teilnehmer = $this->connection->prepare($query);

                    $teilnehmer->bindValue('id', $this->id);
                    $teilnehmer->bindValue('title', $this->title);
                    $teilnehmer->bindValue('details', $this->description);
                    $teilnehmer->bindValue('category_id', $this->category_id);

                    if($teilnehmer->execute())
                    {
                        return true;
                    }

                    return false;
                 }

                 return false;

            }

            return false;
        }
        catch(PDOExecption $e)
        {
            echo $e->getMessage();
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/Teilnehmer/destroy.php",
     *     summary="Method to delete Teilnehmer from database.",
     *     tags={"Teilnehmer"},
      *     @OA\RequestBody(
     *        @OA\MediaType(
     *            mediaType="json",
     *            @OA\Schema(
     *               @OA\Property(
     *                    property="id",
     *                    type="integer",
     *                ),
     *            ),
     *        ),
     *     ),
     *     @OA\Response(response="200", description="An example resource"),
     *     @OA\Response(response="404", description="Not Found"),
     *     security={ {"bearerToken": {}}}
     * )
     */
    public function destroy_post($id)
    {
        try
        {

            $headers = apache_request_headers();
           
            if(isset($headers['Authorization']))
            {
               $token = str_ireplace('Bearer ', '', $headers['Authorization']);
               
               $decoded = JWT::decode($token , new Key($this->key, 'HS256'));
 
                 if(isset($decoded->userName) && $decoded->userName == 'Roger max')
                 {
                    // Assigning values.

                    $this->id = $id;

                    // Query for updating existing record.

                    $query = 'DELETE FROM '.$this->table.' 
                        WHERE id = :id';

                    $teilnehmer = $this->connection->prepare($query);

                    $teilnehmer->bindValue('id', $this->id);

                    if($teilnehmer->execute())
                    {
                        return true;
                    }

                    return false;
                 }
                 return false;
            }
            return false;
        }
        catch(PDOExecption $e)
        {
            echo $e->getMessage();
        } 
    }
}