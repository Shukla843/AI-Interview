
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "chaliye-283b6.firebaseapp.com",
  projectId: "chaliye-283b6",
  storageBucket: "chaliye-283b6.firebasestorage.app",
  messagingSenderId: "82489851797",
  appId: "1:82489851797:web:8828dbcfe65d938b2d409c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}