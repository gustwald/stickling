import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyASMCh9JdOU3QDksc9UAGxgEzNnGAfRqgE',
  authDomain: 'stickling-a915f.firebaseapp.com',
  databaseURL: 'https://stickling-a915f.firebaseio.com',
  projectId: 'stickling-a915f',
  storageBucket: 'stickling-a915f.appspot.com',
  messagingSenderId: '761082954252'
};

export const initFirebase = () => {
  const fire = firebase.initializeApp(firebaseConfig);
};
