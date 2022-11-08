// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2bFN5NnUmt2q1cnUVCPXRDyDtVR6nZU0",
    authDomain: "viva-visa.firebaseapp.com",
    projectId: "viva-visa",
    storageBucket: "viva-visa.appspot.com",
    messagingSenderId: "847858612939",
    appId: "1:847858612939:web:6df314e523f97bb8da794e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;