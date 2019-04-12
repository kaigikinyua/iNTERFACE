<html>
    <head>
        <?php
        if(empty($_COOKIE['email_cookie'])){
            header("location:login.html");
        }
        ?>
        <title>
            userpage
        </title>
        <link rel="stylesheet" href="CSS/userpage.css"/>
        <script src="JS/dynamic.js"></script>
        <meta charset="UTF-8"/>
    </head>
    <body>
        <div class="navbar">
            <ul class="nav">
                <li><a href="index.html">Home</li>
                <!--page should be users name-->
                <li class="active"><a href="">Username</li>
                <li><a href="#">Log Out</li>
            </ul>
        </div>
        <div style="width:100%;height:70px;"></div>
        <div class="content" id="content">
            <div class="contacts">
                <center>
                <div class="profile">
                    <?php
                        $con=mysqli_connect("localhost","root","root","CVO");
                        $user=$_COOKIE['email_cookie'];
                        $e="SELECT profile from cvo_users where email='$user'";
                        $r=mysqli_query($con,$e);
                        $profilePath=mysqli_fetch_assoc($r);
                        #echo $profilePath['profile'];
                        echo "<img style='border-radius:50%;' src='USER/".$profilePath['profile']."' height='90px' width='90px'></br>";
                    ?>
                    <button id="addP" onclick="changePic()"><?php echo $user?></button>
                    <form class='profile' id='profileF' method='POST' action='PHP/upload.php' enctype="multipart/form-data" onsubmit="hide('profileF')">
                        <input type='file' name='pp'/>
                        <input type='submit' name='submit_profile' value='Upload'/>
                    </form>
                </div>
                </center>
                <!--backend read from the database which notifications that have not been read and display them in terms of the latest-->
                <!--onclick button shuld change the tables="messages" to the clicked notification-->
                <center>
                <div class="notification" onclick="addChatPage()">
                    James tried to call you
                    <!--add time of the occurence-->
                </div>
                <div class="notification" onclick="addChatPage()">
                    Emmily messaged you
                </div>
                </center>
                <div onclick="test()">
                    ClickMe
                    <div id='test' class="chatpage" style="visibility:hidden;"></div>
                </div>
            </div>
            <div class="trending">
                <center>
                <div class="title">
                    Trending
                </div>
                </center>
            </div>
        </div>
    </body>
</html>