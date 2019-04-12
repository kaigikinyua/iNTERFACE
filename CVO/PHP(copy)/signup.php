<?php
    if(isset($_POST['signup'])){
        $uname=$_POST['uname'];$email=$_POST['email'];$pass=$_POST['pass'];$passc=$_POST['passc'];
        if( !empty($uname) && !empty($email) && !empty($pass) && !empty($passc) ){
            if($pass == $passc){
                $con=mysqli_connect('localhost','root','root','CVO');
                #<<<<<<!validate email not done!>>>>>>>#
                $checkEmail="SELECT * FROM cvo_users where email='$email'";
                $r=mysqli_query($con,$checkEmail);
                if(mysqli_num_rows($r)==0){
                    $date=date('Y/m/d');
                    $insert_user="INSERT INTO cvo_users(username,email,password,date_joined) VALUES('$uname','$email','$pass','$date')";
                    $r=mysqli_query($con,$insert_user);
                    if($r){
                        header('location:../login.html');
                    }else{
                        echo "OOPS!! We are having trouble with the system ".mysqli_error($con).$date;
                    }
                    #header("location: ../userpage.html");
                }else{
                    echo "Email already in use";
                }
            }else{
                header('location:../index.html'); 
            }
        }else{
            header("location:../signup.html");
        }
    }
?>