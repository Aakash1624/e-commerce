import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJq1DYaO_1qiEGVRKzzmzC-Ejuc0Ybdms',
  authDomain: 'e-commerce-1-1e157.firebaseapp.com',
  projectId: 'e-commerce-1-1e157',
  storageBucket: 'e-commerce-1-1e157.appspot.com',
  messagingSenderId: '738254265660',
  appId: '1:738254265660:web:c8d82290be63dbc19e9239',
};

// Initialize Firebase
const commerceApp = initializeApp(firebaseConfig);

//Authentication
const commerceAuth = getAuth(commerceApp);

//sigIn with Google
const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopup = () =>
  signInWithPopup(commerceAuth, googleProvider);

export { signInWithGooglePopup };

//Fire Store DataBase

const commerceDb = getFirestore(commerceApp);

const addData = async (collection,id,value) => {
  const res = await setDoc(doc(commerceDb, collection, id),value);

  console.log(res);
};

addData('cities', 'LA', { name: 'Los Angeles', state: 'CA', country: 'USA' });
