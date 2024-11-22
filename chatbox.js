var firebaseConfig = {
    apiKey: "AIzaSyC0ok1l4js9uVHJs7Yb-hqQPHw-qWz38oM",
    authDomain: "letschatwebapp-ae172.firebaseapp.com",
    databaseURL: "https://letschatwebapp-ae172-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-ae172",
    storageBucket: "letschatwebapp-ae172.firebasestorage.app",
    messagingSenderId: "137333964820",
    appId: "1:137333964820:web:a9b0ddc9f963ca4f6a6701"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var username = localStorage.getItem("Lonin_Id");
  console.log("user name is " + username);
  document.getElementById("username").innerHTML= username;

  var roomname = localStorage.getItem("room name");
  console.log("room name is " + roomname);
  document.getElementById("RoomIdInfo").innerHTML = roomname;



  function SendMessage(){
    var msg = document.getElementById("message_text").value;
    firebase.database().ref(roomname).push({
        name:username,
        message:msg,
        like:0
    })
    document.getElementById("message_text").value ="";
  }

  function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);

    Name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ Name +"<img class='user_tick' src='tick.png.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn_btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike (this.id)'>";
    span_with_tag = "<span class='glyphicon_glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
    row = name_with_tag + message_with_tag +like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;

} });  }); }
getData();

function updateLike(message_id)
{
   console.log("click on the button - " + message_id);
   btn_id = message_id; 
   likes = document.getElementById(btn_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);

   firebase.database().ref(roomname).child(message_id).update({
    like : updated_likes
   });
}