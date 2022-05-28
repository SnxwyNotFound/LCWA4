//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
username = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + username + "!"

function addRoom() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("roomname-" + Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#"
                        + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}
//End code
      } });  }); }
getData();


function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0      
      });
      document.getElementById("msg").value = "";
}