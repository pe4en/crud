<?php
/**
 * Created by PhpStorm.
 * User: pe4en
 * Date: 2/28/14
 * Time: 1:52 PM
 */
function LogIn() {
    session_start();
    $email = $_POST['email'];
    $password = $_POST['password'];
    $query = mysql_query("select from users where email ='$email' and password ='$password'");
    $row =mysql_fetch_array($query);
    if(empty($row['email']) AND empty($row['password']))
    {

        echo '<h1>Error </h1>>';
        header("Refresh: 3; url=view/index.html");
    }

    else
    {

        $_SESSION['email'] = $email;
        $_SESSION['password'] = $password;

        header("Location: EditNews.php");
    }
}
class User {
    protected $userMail;
    protected $userPassword;
    function getUserEmail() {
        return $this->userMail;
    }
    function setUserMail($userMail) {
        $this->userMail = $userMail;
    }
    function getUserPassword() {
        return $this->userPassword;
    }
        function setUserPassword($userPassword) {
        $this->userPassword = $userPassword;
    }
}