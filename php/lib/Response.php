<?php

class Response
{
    private $status;
    private $message;
    private $data;

    public function __construct() {
        $this->status = 'OK';
        $this->message = '';
        $this->data = [];
    }

    public function setData($key, $value) {
        $this->data[$key] = $value;
    }

    public function setArray($arr) {
        $this->data = $arr;
    }

    public function setError($msg) {
        $this->status = 'ERROR';
        $this->message = $msg;
    }

    public function toString() {
        return json_encode(array(
            'status' => $this->status,
            'message' => $this->message,
            'data' => $this->data
        ));
    }

    public function finish() {
        echo $this->toString();

//        http_response_code($this->status);
    }
}