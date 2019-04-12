console.log("Hello");
function empty(){
    var username=document.forms["only"]["uname"].value;
    var email=document.only.email.value;
    var password=document.only.pass.value;
    var cpassword=document.only.passc.value;
    if(username==null || username==""){
        alert("Please fill in your username")
        return false;
    }
    else if(email==null || email ==""){
        alert("Please fill in your Email Address");
        return false;
    }
    else if(password==null || password==""){
        alert("Please fill in the password field");
        return false;
    }
    else if(cpassword==null || cpassword==""){
        alert("Please fill in the confirm password field");
        return false;
    }
    else{
        console.log(username);
        return false;
    }
}
function login_user(){
    var uname=document.forms["only"]["uname"].value;
    var pass=document.forms["only"]["pass"].value;
    if(uname==null || pass==null || uname==""|| pass==""){
        if(uname==null || uname==""){
            alert("Please Fill in your Email");
        }else if(pass==null || pass==""){
            alert("Please enter your password");
        }
        else{
            alert(":(");
        }
        return false;
    }
}
function updateChat(){
    var msg=document.forms["chat"]["message"].value;
    if(msg=="" || msg==null){
        return false;
    }
    else{
        document.getElementById("msg").innerHTML="<p class='btn'>";
    }
}
