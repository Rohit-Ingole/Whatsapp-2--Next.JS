import firebase from "firebase";

const firebaseApp =
  firebase.apps.length === 0
    ? firebase.initializeApp({
        apiKey: "AIzaSyDV_JYvUB3ERTAqCDFtEy4fkuF-qVEhSfo",
        authDomain: "whatsapp-2-db.firebaseapp.com",
        projectId: "whatsapp-2-db",
        storageBucket: "whatsapp-2-db.appspot.com",
        messagingSenderId: "291145254427",
        appId: "1:291145254427:web:11d4b26cfd910690479abe",
        measurementId: "G-KY16L38K86",
      })
    : firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
