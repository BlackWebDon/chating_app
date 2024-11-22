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

var fatch_name = localStorage.getItem("Lonin_Id");
document.getElementById("user_name").innerHTML="Welcome " + fatch_name; 


//coding for add room button 

function add_room()
{
    var room_name =document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).set({
        purpose:"adding room name"
    });
    

    localStorage.setItem("room name",room_name);
    window.location="chatbox.html";
}



//default code
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;

     console.log("Room Name" + Room_names);
    row = "<div class='room_name' id="+ Room_names+" onclick='redirectroom(this.id)'> # " + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row; 
 });
});

}

getData();

function redirectroom(name)
{
    
    localStorage.setItem("room name",name);
    window.location="chatbox.html";
}

function logout()
{
    localStorage.removeItem("Lonin_Id");
    localStorage.removeItem("Room_Name");
    window.location="index.html";
}

