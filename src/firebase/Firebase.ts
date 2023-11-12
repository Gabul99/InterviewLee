// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCj6UwZHWpmlqtH-G9FHQVd7ZElfmIBxT4',
  authDomain: 'interview-lee.firebaseapp.com',
  projectId: 'interview-lee',
  storageBucket: 'interview-lee.appspot.com',
  messagingSenderId: '535884914086',
  appId: '1:535884914086:web:12e1db48d936fba8180367',
  databaseURL: 'https://interview-lee-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

export const getDBData = async () => {
  try {
    const data = await db.ref().get();
    return data.val();
  } catch (err) {
    throw Error(`${err}`);
  }
};

export const setDBData = async (key: string, value: any) => {
  try {
    await db.ref(key).set(value);
  } catch (err) {
    throw Error(`${err}`);
  }
};

export default firebase;
