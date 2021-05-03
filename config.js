import firebase from 'firebase';
require('@firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVStJTohvee9iNN_5foc1Ae5oRGeImlZE",
    authDomain: "book-santa-47a0a.firebaseapp.com",
    projectId: "book-santa-47a0a",
    storageBucket: "book-santa-47a0a.appspot.com",
    messagingSenderId: "923318370448",
    appId: "1:923318370448:web:0c4036661c33fe35381815",
    measurementId: "G-K94JVF1WE7"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();