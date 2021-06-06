 // Agregando evento click 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  /*var firebaseConfig = {
    Aquí va la configuración de firebase
  };*/
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
  
