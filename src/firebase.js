import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "firebase_API_KEY",
  authDomain: "interior-website-1c983.firebaseapp.com",
  projectId: "interior-website-1c983",
  storageBucket: "interior-website-1c983.appspot.com",
  messagingSenderId: "firebase_sender_id",
  appId: "firebase_APP_ID"
  };



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
