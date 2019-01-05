<?php
    if(isset($_POST['login'])){
        $name=$_POST['uname'];$pass=$_POST['pass'];
        if(!empty($name) && !empty($pass)){
            header("location:../userpage.html");
        }else{
            header("location:../login.html");
            echo "<script>alert('Please fill in all the fields')</script>";
        }
    }
?>