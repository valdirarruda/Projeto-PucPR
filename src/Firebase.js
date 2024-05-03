import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDOYwjZrMKPCW9C5Tcz4RWNs1drfqZFzSI",
    authDomain: "projetopucpr-7898e.firebaseapp.com",
    projectId: "projetopucpr-7898e",
    storageBucket: "projetopucpr-7898e.appspot.com",
    messagingSenderId: "1004489921950",
    appId: "1:1004489921950:web:009836b7d0c7387fecf28f",
    measurementId: "G-SXCFYSXPLM"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;