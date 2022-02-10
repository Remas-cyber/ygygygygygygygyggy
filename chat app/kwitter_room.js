function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    var firebaseConfig = {
        apiKey: "AIzaSyBSwAanoFS6TKbBva3cV7IJVZXdSYtx3O8",
        authDomain: "kwitter-team.firebaseapp.com",
        databaseURL: "https://kwitter-team-default-rtdb.firebaseio.com",
        projectId: "kwitter-team",
        storageBucket: "kwitter-team.appspot.com",
        messagingSenderId: "302742188257",
        appId: "1:302742188257:web:997d422470a9277f9447a0"
      };
   });});}
getData();