<?php
    if(isset($_POST['submit_profile'])){
        #check file size,uniqueid,insert path to the database
        $file=$_FILES['pp']['tmp_name'];
        print_r ($file);
        move_uploaded_file($file,'../USER/'.$_FILES['pp']['name']);
    }
?>