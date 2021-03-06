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

export const addUserToFirestore = (id, fName, lName, email, photo) => {
  // gör till global, hur?

  const db = firebase.firestore();
  db
    .collection('users')
    .doc(id)
    .set({
      first: fName,
      last: lName,
      email,
      uID: id,
      photo
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
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.username, user.password)
    .then(onSucces)
    .catch(onFailure);
};

export const logInWithEmail = (onSucces, onFailure, user) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(user.username, user.password)
    .then(onSucces)
    .catch(onFailure);
};

export const addAdToFirestore = (onSucces, onFailure, ad) => {
  const db = firebase.firestore();
  db
    .collection('ads')
    .add(ad)
    .then(onSucces)
    .catch(onFailure);
};

export const getAdsFromFirestore = (onSucces, onFailure) => {
  const db = firebase.firestore();
  db
    .collection('ads')
    .get()
    .then(onSucces)
    .catch(onFailure);
};

export const uploadFile = (img, adTitle) => {
  const storageRef = firebase.storage().ref();
  const file = img;

  return new Promise((resolve, reject) => {
    storageRef
      .child(`images/${adTitle}`)
      .put(file)
      .then(resolve)
      .catch(reject);
  });
};

export const deleteAd = (id, image, onSucces, onFailure, imageDeleteSucces, imageDeleteFailure) => {
  const db = firebase.firestore();
  const imageRef = firebase.storage().refFromURL(image);

  // should be using promises or delete image when successfully delete ad

  db
    .collection('ads')
    .doc(id)
    .delete()
    .then(onSucces)
    .catch(onFailure);

  imageRef
    .delete()
    .then(imageDeleteSucces)
    .catch(imageDeleteFailure);
};

export const addSocialMedia = (uId, instagram, twitter, onSucces, onFailure) => {
  const db = firebase.firestore();
  const dbRef = db.collection('users').doc(uId);

  dbRef
    .set(
      {
        instagram,
        twitter
      },
      { merge: true }
    )
    .then(onSucces)
    .catch(onFailure);
};
