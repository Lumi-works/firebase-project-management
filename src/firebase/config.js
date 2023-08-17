// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAZAg1AEwv_jVjPSdwuYasSecurZzxd_M",
  authDomain: "fir-group-chat-e7257.firebaseapp.com",
  projectId: "fir-group-chat-e7257",
  storageBucket: "fir-group-chat-e7257.appspot.com",
  messagingSenderId: "290317858880",
  appId: "1:290317858880:web:fddff8f8ab5d2f4c7d47a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);
const projectStorage = getStorage(app);

// timestamp
const timestamp = projectFirestore.Timestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
