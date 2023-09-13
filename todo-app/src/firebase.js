// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAYkurqUTdRRF32jqC47RC2yJnEsuDLUwo',
  authDomain: 'just-do-it-list.firebaseapp.com',
  projectId: 'just-do-it-list',
  storageBucket: 'just-do-it-list.appspot.com',
  messagingSenderId: '997135777614',
  appId: '1:997135777614:web:feb205b8ed646dfd28a81f',
  measurementId: 'G-JMYWC2LE07',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
