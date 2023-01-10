<?php

class Response
{
    private $status;
    private $message;
    private $data;
    private $log;

    public function __construct() {
        $this->status = 'unknown';
        $this->message = '';
        $this->data = [];
        $this->log = [];
    }

    public function setData($key, $value) {
        $this->status = 'OK';
        $this->data[$key] = $value;
    }

    public function setArray($arr) {
        $this->status = 'OK';
        $this->data = $arr;
    }

    public function setError($msg) {
        $this->status = 'ERROR';
        $this->message = $msg;
    }

    public function setMessage($msg) {
        $this->status = 'OK';
        $this->message = $msg;
    }

    public function log($line) {
        array_push($this->log, $line);
    }

    public function toString() {
        return json_encode(array(
            'status' => $this->status,
            'message' => $this->message,
            'data' => $this->data,
            'log' => $this->log
        ));
    }

    public function finish() {
        echo $this->toString();

//        http_response_code($this->status);
    }
}