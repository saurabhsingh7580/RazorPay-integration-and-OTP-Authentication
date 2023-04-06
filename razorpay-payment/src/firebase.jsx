
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbk_8Rzv6IGfPKWhhyMv-L-UtdrDQHU7c",
  authDomain: "reactotpauth.firebaseapp.com",
  projectId: "reactotpauth",
  storageBucket: "reactotpauth.appspot.com",
  messagingSenderId: "962056091138",
  appId: "1:962056091138:web:7d63fdf37ff3998626991b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);