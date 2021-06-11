import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDIuB638kiulQjDMSreH2rAV-W-0wP1bjk",
  authDomain: "inomma-task.firebaseapp.com",
  projectId: "inomma-task",
  storageBucket: "inomma-task.appspot.com",
  messagingSenderId: "244514064665",
  appId: "1:244514064665:web:3398340356c1d6b3c11d88",
  measurementId: "G-TB1RXF3XG5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
