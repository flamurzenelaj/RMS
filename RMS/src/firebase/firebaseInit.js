import firebase from 'firebase/compat/app';
import 'firebase/compat';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANtXmJmC78PVqdFr_W31mbyXv-Jm1e-KI",
  authDomain: "rms-vuejs-4969a.firebaseapp.com",
  projectId: "rms-vuejs-4969a",
  storageBucket: "rms-vuejs-4969a.appspot.com",
  messagingSenderId: "116562903235",
  appId: "1:116562903235:web:23a245f26e560f5f9ae276"
};

 export const firebaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp =firebase.firestore.FieldValue.serverTimestamp;
  export {timestamp};
  export default firebaseApp.firestore();