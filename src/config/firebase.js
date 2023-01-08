import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAhAnafnkr4qvKOfate6HT935F7fnTuq08",
    authDomain: "bookmyshow-5dd2f.firebaseapp.com",
    projectId: "bookmyshow-5dd2f",
    storageBucket: "bookmyshow-5dd2f.appspot.com",
    messagingSenderId: "325547604470",
    appId: "1:325547604470:web:945cfbb97a3e51e2e2efd7",
    measurementId: "G-L5NV33J6RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();