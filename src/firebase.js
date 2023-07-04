import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCd0vPzCCVDWebqC7Lr88yNzOQzzJjxh3g",
  authDomain: "todoapp-699c9.firebaseapp.com",
  projectId: "todoapp-699c9",
  storageBucket: "todoapp-699c9.appspot.com",
  messagingSenderId: "1083911406861",
  appId: "1:1083911406861:web:0b8ad6cab6d9599f45dc44",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
