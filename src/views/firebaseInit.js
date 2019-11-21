import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxncZkSEwXiMHXGwmLfKlWgKwOsHRXVz8",
    authDomain: "vuedashboard-4e80f.firebaseapp.com",
    databaseURL: "https://vuedashboard-4e80f.firebaseio.com",
    projectId: "vuedashboard-4e80f",
    storageBucket: "vuedashboard-4e80f.appspot.com",
    messagingSenderId: "751886862925",
    appId: "1:751886862925:web:05232d776e0df28429aa04"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()