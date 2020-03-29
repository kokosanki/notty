import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp ({
    apiKey: "AIzaSyBFOz1h-GnJGaWwxQw0wpn8IlTWNNLzFSs",
    authDomain: "notty-75add.firebaseapp.com",
    databaseURL: "https://notty-75add.firebaseio.com",
    projectId: "notty-75add",
    storageBucket: "notty-75add.appspot.com",
    messagingSenderId: "554450352255",
    appId: "1:554450352255:web:bd0fb9602947c53fec674a"
  });

  export default app;