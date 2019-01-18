<?php
    if(!isset($_COOKIE[$cookie_name])){
        header("location:../login.html");
    }else{
        header("location:../userpage.html");
    }
?>