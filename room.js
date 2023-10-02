const firebaseConfig = {
    apiKey: "AIzaSyDePOuAtE0y4vAngph3sLTkvga-_ewmVTA",
    authDomain: "lets-chat-e3a7d.firebaseapp.com",
    databaseURL: "https://lets-chat-e3a7d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-e3a7d",
    storageBucket: "lets-chat-e3a7d.appspot.com",
    messagingSenderId: "569846139975",
    appId: "1:569846139975:web:835796226c9670ff08f562",
    measurementId: "G-LV8DKBHWYY"
};
firebase.initializeApp(firebaseConfig);

document.getElementById("user").innerHTML=localStorage.getItem("username");

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "div class='room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("room_display").innerHTML=row;
//End code
});});}
getData();

function addRoom(){
    roomname = document.getElementById("rooms").value;
    if(!roomname == ""){
        firebase.database().ref("/").child(roomname).update({
            purpose : "New room is added!"
          });
          localStorage.setItem("roomname", roomname);   

          window.location = "page.html";
    }else{
        alert("Please put a room name value");
    }
}

