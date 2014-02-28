<?php
/**
 * Created by PhpStorm.
 * User: pe4en
 * Date: 2/28/14
 * Time: 1:31 PM
 */
class Database {

    public function connectToDb(){
        try {
            new PDO('mysql:host=localhost;dbname=kalys', 'root', '');
        }

        catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
        }

    }
}