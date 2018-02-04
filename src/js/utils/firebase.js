import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyASMCh9JdOU3QDksc9UAGxgEzNnGAfRqgE',
  authDomain: 'stickling-a915f.firebaseapp.com',
  databaseURL: 'https://stickling-a915f.firebaseio.com',
  projectId: 'stickling-a915f',
  storageBucket: 'stickling-a915f.appspot.com',
  messagingSenderId: '761082954252'
};

export const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
};

export const googleLogin = (onSuccess, onFailure) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(onSuccess)
    .catch(onFailure);
};

export const addUserToFirestore = (id, fName, lName) => {
  // todo
  // om user finns, skapa inte
  // gör till global, hur?
  console.log('addar till storage');
  const db = firebase.firestore();
  console.log(db);
  db
    .collection('users')
    .add({
      first: fName,
      last: lName,
      uID: id
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
};

export const getAllUsers = (onSucces, onFailure) => {
  const db = firebase.firestore();
  console.log('inne');
  db
    .collection('users')
    .get()
    .then(onSucces)
    .catch(onFailure);
};
