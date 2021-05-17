 // Agregando evento click 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCfznDxJME9p0llWCuV9NwKB--btIcyFgE",
    authDomain: "linkedin-5ae5a.firebaseapp.com",
    databaseURL: "https://linkedin-5ae5a-default-rtdb.firebaseio.com",
    projectId: "linkedin-5ae5a",
    storageBucket: "linkedin-5ae5a.appspot.com",
    messagingSenderId: "139993377494",
    appId: "1:139993377494:web:9f29236c52365402233777",
    measurementId: "G-H30R91360G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  /* const db = firebase.database();
  collectionData = db.ref().child('Users');

  const getValueInput = () =>{
    if(username === null || password === null){

    }
    else{
        //generar id único para base de datos
        let idFirebase = collectionData.push().key;
        //capturar datos
        let username = document.getElementById("username").value; 
        let password = document.getElementById("password").value; 
        
        // console.log(idFirebase,username,password);

        // guardar credenciales
        writeUserData(idFirebase,username,password);
        console.log(idFirebase,username,password);
    }
    
  }

  function writeUserData(userId, username, passworduser) {
    firebase.database().ref('Users/' + userId).set({
      username: username,
      password: passworduser
    });
  } */
  