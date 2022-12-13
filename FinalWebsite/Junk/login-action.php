<?php




$db_host = 'localhost';
$db_username = 'BGLandscaping';
$db_password = '********';


if ($_POST['username'] == $db_username){

    if ($_POST['password'] == $db_password){

        header("Location: ./admin_about.html");
    }
    else{header("Location: ./admin_Login.html");};
}
else{header("Location: ./admin_Login.html");};

?>