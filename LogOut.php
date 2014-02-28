<?php
/**
 * Created by PhpStorm.
 * User: pe4en
 * Date: 2/28/14
 * Time: 3:13 PM
 */
session_start();
unset($_SESSION['email']);
session_destroy();
header('refresh: 1; location=view/index.html' );
?>