<?php


class Setup {
    public static $site = [
        //'base' => 'http://localhost:3000'
        'base' => 'https://ferienschule.violass.club'
        //'base' => 'https://ferienschule.wetek.de'
    ];

    public static $admins = [
        [
            'name' => 'Meister',
            'email' => 'meister@ferienschule.violass.club'
        ],
        [
            'name' => 'Denis Kropp',
            'email' => 'kropp@wetek.de'
        ]
    ];

    public static $mysql = [
        'host' => 'localhost:4401',
        'db' => 'db',
        'user' => 'root',
        'pass' => ''
    ];

    public static $email = [
        'from' => 'meister@ferienschule.violass.club',
        'name' => 'Ferienschule'
    ];

    public static $smtp = [
        'host' => 'smtp.ionos.de',
        'user' => 'meister@ferienschule.violass.club',
        'pass' => 'schule2022!'
    ];
}
