import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDdbqbhGvABA3yDKfFOXPdr0_xQiiXXoCc",
  authDomain: "clone-61556.firebaseapp.com",
  projectId: "clone-61556",
  storageBucket: "clone-61556.appspot.com",
  messagingSenderId: "18907581369",
  appId: "1:18907581369:web:3507135508f702bdf88468"
};

  
firebase.initializeApp(firebaseConfig)

export default firebase.auth()
