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
// fire.firestore().enablePersistence()
//   .catch(function(err) {
//       if (err.code == 'failed-precondition') {
//           // Multiple tabs open, persistence can only be enabled
//           // in one tab at a a time.
//           // ...
//       } else if (err.code == 'unimplemented') {
//           // The current browser does not support all of the
//           // features required to enable persistence
//           // ...
//       }
// });
export default fire;