function addChatPage(){
    var content=document.getElementById("content");
    var chatPage=document.createElement('div');
    chatPage.innerHTML="<div class='chatpage' id='chatpage'><button onclick='closeChat()'>X</button><div class='keyboard'><form class='messageBox'><input class='usrmsg' type='text'/ placeholder='type here....'><input class='sendbtn' type='button' value='send'></form></div></div>";
    content.appendChild(chatPage);
}
function closeChat(){
    var element=document.getElementById('chatpage');
    element.parentNode.removeChild(element);
}

//<div class="chatpage">
  //  <!--on clicking the friends button it should change the progile pick and name-->
    //<span class="title">
      //      friend name
    //</span>
//<!--by default show what has happend when the user was offline-->
//<!--should be updated frequently but not the whole page-->
//<div class="keyboard">
  //  <!--add the text -->
    //<table class="messages" id="messages">
//<!--display messages of the clicked notification from the earliest to the latest-->
  //      <tr><td><div class="user_side">Hello</div></td></tr>
    //    <tr><td><div class="friend_side">Hae</div></td></tr>
      //  <tr><td><div class="user_side">Are we meeting up this weekend or what?</div></td></tr>
    //</table>
    //<form class="messageBox">
      //  <input class="usrmsg" type="text" placeholder="Type ..."/>
        //<input class="sendbtn" type="button" value="send"/>
    //</form>
//</div>
//</div>