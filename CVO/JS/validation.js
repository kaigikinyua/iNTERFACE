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
