// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY-yu7H6yqtilLdcw4STexFe-rpzLxMhc",
  authDomain: "openinapp-62b8c.firebaseapp.com",
  projectId: "openinapp-62b8c",
  storageBucket: "openinapp-62b8c.appspot.com",
  messagingSenderId: "647004005444",
  appId: "1:647004005444:web:b96dba063e46e310380811",
  measurementId: "G-N5PMGJJ0RL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };
