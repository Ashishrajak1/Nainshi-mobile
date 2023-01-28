import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDN_lDGBb1Q5ticIcLuC4kescTFzacSsN4",
  authDomain: "nainshimobile-afee3.firebaseapp.com",
  projectId: "nainshimobile-afee3",
  storageBucket: "nainshimobile-afee3.appspot.com",
  messagingSenderId: "705529167326",
  appId: "1:705529167326:web:2cc3bd410985831fcb314f",
  measurementId: "G-LL9LMVC3MX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {db,app, auth };
