import * as firebase from "firebase/app"

import "firebase/auth";
//firebase app sdk configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7XneQBvRzvjQ7f2K884vFXgk6LWiaMZk",
    authDomain: "socialapp-401af.firebaseapp.com",
    projectId: "socialapp-401af",
    storageBucket: "socialapp-401af.appspot.com",
    messagingSenderId: "308842385242",
    appId: "1:308842385242:web:a977af2f3bb03fbc24ed63",
    measurementId: "G-XWTK1ST7M5"
  };

firebase.initializeApp(firebaseConfig)


export default firebase