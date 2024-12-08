import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyApZnbFgLhma7d52ilHp9S8JRKl4BKrXOg',
  authDomain: 'base-connections-map.firebaseapp.com',
  projectId: "base-connections-map",
  storageBucket: 'base-connections-map.firebasestorage.app',
  messagingSenderId: '1061796894085',
  appId: '1:1061796894085:web:db1b648b80fed18871a0ec',
  measurementId: 'G-RYFDJ0XHVE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
