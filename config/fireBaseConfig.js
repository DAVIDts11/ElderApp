import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA48cbMgESZYhAcx3qwoYRspHr1m3Quu00',
  authDomain: 'elderapp-54404.firebaseapp.com',
  projectId: 'elderapp-54404',
  storageBucket: 'elderapp-54404.appspot.com',
  messagingSenderId: '839232656580',
  appId: '1:839232656580:web:a69e3cb73d0536040f6591',
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;
