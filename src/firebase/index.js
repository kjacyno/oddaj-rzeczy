import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIINBsR7L6e0lPXCZt6u2g1vwzoMePX-s",
    authDomain: "oddaj-rzeczy-e454f.firebaseapp.com",
    projectId: "oddaj-rzeczy-e454f",
    storageBucket: "oddaj-rzeczy-e454f.appspot.com",
    messagingSenderId: "369996363876",
    appId: "1:369996363876:web:66ab4e82614d5323294771"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export  {app, db, auth};