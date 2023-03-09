import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCkyotw6Sg6xZDFovkb-yQq6PGa2i66UUE",
  authDomain: "authentication-test-e176e.firebaseapp.com",
  projectId: "authentication-test-e176e",
  storageBucket: "authentication-test-e176e.appspot.com",
  messagingSenderId: "686478676359",
  appId: "1:686478676359:web:fc29eb328e8e65abea0322",
  measurementId: "G-RM3RYHEB44"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)