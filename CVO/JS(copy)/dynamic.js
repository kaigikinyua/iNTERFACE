function addChatPage(){
    var content=document.getElementById("content");
    var chatPage=document.createElement('div');
    chatPage.innerHTML="<div class='chatpage' id='chatpage'><button onclick='closeChat()'>X</button><div class='keyboard'><table class='chat' id='chattable'></table></div><form method='POST' class='messageBox' id='messageBox'><input class='usrmsg' id='usrmsg' name='msg' type='text'/ placeholder='type here....'><input class='sendbtn' type='button' value='send' onclick='sendMessage()'></form></div>";
    //add the chat table
    content.appendChild(chatPage);
}
function closeChat(){
    var element=document.getElementById('chatpage');
    element.parentNode.removeChild(element);
}
function sendMessage(){
    var sen=document.forms['messageBox']['msg'].value;
    var msg=document.createElement("tr");
    msg.innerHTML="<tr><td><div class='user_side'>"+sen+"</div></td></tr>";
    var parent=document.getElementById("chattable");
    parent.appendChild(msg);
}
function changePic(){
    document.getElementById('profileF').style.visibility='visible';
    document.getElementById('addP').style.visibility='hidden';
}
function hide(name){
    document.getElementById(name).style.visibility='hidden';
}
function test(){
    document.getElementById("test").style.visibility='visible';
    console.log("Hello");
}