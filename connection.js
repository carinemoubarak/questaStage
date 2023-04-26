import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBSsr1yBbBz-hydDQdEvjEuXsD_6iZxDW8",
    authDomain: "signin-c0c9b.firebaseapp.com",
    projectId: "signin-c0c9b",
    storageBucket: "signin-c0c9b.appspot.com",
    messagingSenderId: "928592459077",
    appId: "1:928592459077:web:ebec7798734213175fba2c",
    measurementId: "G-ME67B1H1ZB"
  };

  const app=initializeApp(firebaseConfig);
  export const db=getFirestore(app);


