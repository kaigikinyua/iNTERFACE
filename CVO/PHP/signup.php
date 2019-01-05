<?php
    if(isset($_POST['signup'])){
        $uname=$_POST['uname'];$email=$_POST['email'];$pass=$_POST['pass'];$passc=$_POST['passc'];
        if( !empty($uname) && !empty($email) && !empty($pass) && !empty($passc) ){
            if($pass === $passc){
                $con=mysqli_connect('localhost','root','root','CVO');
                #<<<<<<!validate email not done!>>>>>>>#

            }
        }else{
            echo "<center><div class='warning'>Please fill in all the fields</div><center>";
        }
    }
?>