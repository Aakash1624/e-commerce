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

//Fire Store DataBase

const commerceDb = getFirestore(commerceApp);

const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(commerceDb, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapShop = await getDoc(userDocRef);
  console.log(userSnapShop);
  console.log(userSnapShop.exist());

  if (!userSnapShop.exists()) {
    const { displayName, email } = userAuth;
    const createAdt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAdt,
      });
    } catch (err) {
      console.log('error message', err.message);
    }
  }
};

export { signInWithGooglePopup, createUserDocumentFromAuth };
