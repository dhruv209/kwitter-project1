const firebaseConfig = {
    apiKey: "AIzaSyCNTaAw3vRZlBE2YeI4OYrW5zPz5OPfq5k",
    authDomain: "kwitter-6b6f2.firebaseapp.com",
    databaseURL: "https://kwitter-6b6f2-default-rtdb.firebaseio.com",
    projectId: "kwitter-6b6f2",
    storageBucket: "kwitter-6b6f2.appspot.com",
    messagingSenderId: "998678128585",
    appId: "1:998678128585:web:990964c982d59b07a9ea18"
  };
  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }