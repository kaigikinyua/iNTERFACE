<?php
    if(isset($_POST['submit_profile'])){
        #check file size,uniqueid,insert path to the database
        $file=$_FILES['pp']['tmp_name'];
        print_r ($_FILES['pp']);
        if($_FILES['pp']['size']>5000000){
            echo "File is too big";
        }else{
            move_uploaded_file($file,'../USER/'.$_FILES['pp']['name']);

        }
    }
?>