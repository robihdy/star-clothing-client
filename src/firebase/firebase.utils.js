import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBOXLzPoVheWq7dSU9MAfIjkXFYcGMA36c',
  authDomain: 'star-clothing.firebaseapp.com',
  databaseURL: 'https://star-clothing.firebaseio.com',
  projectId: 'star-clothing',
  storageBucket: 'star-clothing.appspot.com',
  messagingSenderId: '655136478841',
  appId: '1:655136478841:web:f54ff57f0e789e735066a8',
  measurementId: 'G-7JKHHFL9DM'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
