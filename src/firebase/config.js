import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCu7_hvF3tLyti_r-SE5ju7BwKDnraTaxk',
  authDomain: 'juntas-13751.firebaseapp.com',
  projectId: 'juntas-13751',
  storageBucket: 'juntas-13751.appspot.com',
  messagingSenderId: '628102063323',
  appId: '1:628102063323:web:91e5619799b67d5abe58fe',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = fb.firestore();
export default db;
