<?php
/**
 * Created by PhpStorm.
 * User: pe4en
 * Date: 2/28/14
 * Time: 1:41 PM
 */
session_start();
include 'database/database.php';
$connect = new database();
$connect -> connectToDb();
if (isset($_SESSION['email'])){
    $query = 'select * from users ';
    $users = $connect->mysqli->query($query);

    include_once 'view/index.html';
}
