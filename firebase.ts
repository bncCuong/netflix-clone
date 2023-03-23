// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDc_P832gbUsWAVZtVqRlKP3fDH7BdFKwI',
    authDomain: 'netflix-clone-12f26.firebaseapp.com',
    projectId: 'netflix-clone-12f26',
    storageBucket: 'netflix-clone-12f26.appspot.com',
    messagingSenderId: '370010377930',
    appId: '1:370010377930:web:55c494ea69f05cccbb6e33',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
