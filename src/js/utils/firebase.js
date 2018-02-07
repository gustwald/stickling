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
  // gör till global, hur?

  const db = firebase.firestore();
  db
    .collection('users')
    .doc(id)
    .set({
      first: fName,
      last: lName,
      uID: id
    })
    .then(() => {
      console.log('inloggad');
    })
    .catch(error => {
      console.error('Error adding user: ', error);
    });
};

export const getAllUsers = (onSucces, onFailure) => {
  const db = firebase.firestore();
  db
    .collection('users')
    .get()
    .then(onSucces)
    .catch(onFailure);
};

export const signOutUser = (onSucces, onFailure) => {
  firebase
    .auth()
    .signOut()
    .then(onSucces)
    .catch(onFailure);
};


export const createUserWithEmail = (onSucces, onFailure, user) => {
  console.log("inne i createUserWithEmail");
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.username, user.password)
    .then(onSucces)
    .catch(onFailure);
}