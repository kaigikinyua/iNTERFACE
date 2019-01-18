<?php
    if(isset($_POST['login'])){
        $name=$_POST['uname'];$pass=$_POST['pass'];
        if(!empty($name) && !empty($pass)){
            $con=mysqli_connect("localhost","root","root","CVO");
            if($con){
                $login="SELECT * FROM cvo_users where email='$name' and password='$pass'";
                $r=mysqli_query($con,$login);
                ##<!!VALIDATE EMAIL > k
                if(mysqli_num_rows($r)==1){
                    $user_email=$name;
                    $cookie_name="email_cookie";
                    setcookie($cookie_name,$user_email,time()+(86400*2),"/");
                    echo $_COOKIE['email_cookie'];
                    header("location:../userpage.php");
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