
import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyD5VW0sRBBe1trcWQXCaXEW3AvnLcDKv9Q",
    authDomain: "todolist-2edf8.firebaseapp.com",
    databaseURL: "https://todolist-2edf8.firebaseio.com",
    projectId: "todolist-2edf8",
    storageBucket: "todolist-2edf8.appspot.com",
    messagingSenderId: "104536508702",
    appId: "1:104536508702:web:9b11d497c3534836a0610f",
    measurementId: "G-YZ1Z5K7Z70"
  };
 

const fire=firebase.initializeApp(config)



export default fire;