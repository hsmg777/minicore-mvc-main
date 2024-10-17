import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChpBox4DCStRpEZn-u726qszHUdshkoGc",
  authDomain: "mini-core-e6bc2.firebaseapp.com",
  projectId: "mini-core-e6bc2",
  storageBucket: "mini-core-e6bc2.appspot.com",
  messagingSenderId: "1003036613310",
  appId: "1:1003036613310:web:6d47c9ee2db724fb2c1cef",
  measurementId: "G-PRQ2F0L4NJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
