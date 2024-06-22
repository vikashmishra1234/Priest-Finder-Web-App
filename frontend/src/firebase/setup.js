// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQySzP8vrikkrB8e7U5rsdWyCW-pYG3Jk",
  authDomain: "tourist-gauid.firebaseapp.com",
  projectId: "tourist-gauid",
  storageBucket: "tourist-gauid.appspot.com",
  messagingSenderId: "392023212194",
  appId: "1:392023212194:web:046179fbd40ab90faf97fb",
  measurementId: "G-CMZTC90V7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);