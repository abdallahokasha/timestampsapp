import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjkCiX3qyjlt8lmu8gCTu-CUGhrIb5-s0",
    authDomain: "timestamps-4a186.firebaseapp.com",
    databaseURL: "https://timestamps-4a186.firebaseio.com",
    projectId: "timestamps-4a186",
    storageBucket: "timestamps-4a186.appspot.com",
    messagingSenderId: "382984156387"
  };
var fire = firebase.initializeApp(config);
export default fire;