<?php
    if(isset($_POST['submit_profile'])){
        #check file size,uniqueid,insert path to the database
        $file=$_FILES['pp']['tmp_name'];
        print_r ($_FILES['pp']);
        if($_FILES['pp']['size']>5000000){
            echo "File is too big";
        }else{
            #move_uploaded_file(file_to_be_uploaded, path_to_the_file.filename);
            $filename="";
            if(file_exists("../USER/".$_FILES['pp']['name'])){
                $filename=uniqid();
            }else{
                $filename=$_FILES['pp']['name'];
            }
            move_uploaded_file($file,'../USER/'.$filename);
            header("location:../userpage.html");
            $con=mysqli_connect("localhost","root","root","CVO");
            if($con){
                $email=$_COOKIE['email_cookie'];
                $profile="UPDATE cvo_users set profile='$filename' where email='$email'";
                $r=mysqli_query($con,$profile);
                if(!$r){
                    echo mysqli_error($r);
                }
            }        
        }
    }
?>