// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sarthi-ai-34409.firebaseapp.com",
  projectId: "sarthi-ai-34409",
  storageBucket: "sarthi-ai-34409.firebasestorage.app",
  messagingSenderId: "620938582735",
  appId: "1:620938582735:web:670bd70a068b0fe68175ba",
  measurementId: "G-CQNCYYE59L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}