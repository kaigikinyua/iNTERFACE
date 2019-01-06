<?php
    if(isset($_POST['login'])){
        $name=$_POST['uname'];$pass=$_POST['pass'];
        if(!empty($name) && !empty($pass)){
            $con=mysqli_connect("localhost","root","root","CVO");
            if($con){
                $login="SELECT * FROM cvo_users where email='$name' and password='$pass'";
                $r=mysqli_query($con,$login);
                ##<!!VALIDATE EMAIL >
                if(mysqli_num_rows($r)==1){
                    header("location:../userpage.html");
                }
                else{
                    echo("wrong credentials");
                }
            }
        }else{
            header("location:../login.html");
            echo "<script>alert('Please fill in all the fields')</script>";
        }
    }
?>