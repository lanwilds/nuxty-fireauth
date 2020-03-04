// /plugins/firebase.js
import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';

if(!firebase.apps.length){
  firebase.initializeApp({
    apiKey: "xxxxx",
    authDomain: "vue-auth-xxxx.firebaseapp.com",
    databaseURL: "https://vue-auth-xxxx.firebaseio.com",
    projectId: "vue-auth-xxxx",
    storageBucket: "vue-auth-xxxx.appspot.com",
    messagingSenderId: "xxxx",
    appId: "xxxx"
  });
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();

export default firebase;

