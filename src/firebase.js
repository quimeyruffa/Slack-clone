import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOvT--LfBKv6qim5nqoPh6ITwhpbgqROo",
    authDomain: "slack-clone-yt-784ac.firebaseapp.com",
    projectId: "slack-clone-yt-784ac",
    storageBucket: "slack-clone-yt-784ac.appspot.com",
    messagingSenderId: "1030694173715",
    appId: "1:1030694173715:web:6ba8bfd691ba13373a53e6",
    measurementId: "G-PZZWCR8DT1"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};