<?php
/**
 * Created by PhpStorm.
 * User: pe4en
 * Date: 2/28/14
 * Time: 1:35 PM
 */
include 'database/database.php';
include 'functions.php';
mysql_select_db('kalys');
$database=new database();
$database->connectToDb();
if (isset($_POST['click'])); {

}

