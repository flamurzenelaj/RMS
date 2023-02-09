import firebase from 'firebase/compat/app';
import 'firebase/compat';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZSON4rUnaVphgxpvVo1pukgV7FkN9EQw",
  authDomain: "rms-main-9ea98.firebaseapp.com",
  projectId: "rms-main-9ea98",
  storageBucket: "rms-main-9ea98.appspot.com",
  messagingSenderId: "283740234559",
  appId: "1:283740234559:web:db1743b33ef4f7c163e98a",
  measurementId: "G-496DWJ5FY8"
};

 export const firebaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp =firebase.firestore.FieldValue.serverTimestamp;
  export {timestamp};
  export default firebaseApp.firestore();