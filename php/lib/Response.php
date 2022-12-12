<?php

class Response
{
    private $message;
    private $data;

    public function __construct() {
        $this->message = '';
        $this->data = [];
    }

    public function setData($key, $value) {
        $this->message = '';
        $this->data[$key] = $value;
    }

    public function setArray($arr) {
        $this->message = '';
        $this->data = $arr;
    }

    public function setError($msg) {
        $this->message = $msg;
        $this->data = [];
    }

    public function toString() {
        return json_encode(array(
            'message' => $this->message,
            'data' => $this->data
        ));
    }
}