import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQuzpJUg6xj1mCfy8KVOCb-d1VJqh399w",
  authDomain: "budget-1f699.firebaseapp.com",
  projectId: "budget-1f699",
  storageBucket: "budget-1f699.appspot.com",
  messagingSenderId: "641553221927",
  appId: "1:641553221927:web:2ccdf1fbc7502beec68102",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
