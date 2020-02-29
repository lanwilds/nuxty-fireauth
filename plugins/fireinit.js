// /plugins/firebase.js
import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';

if(!firebase.apps.length){
  firebase.initializeApp({
    apiKey: "AIzaSyA3WmttYVAQ7amXR2tUGCJFQNS0FS3D3NQ",
    authDomain: "vue-auth-725b9.firebaseapp.com",
    databaseURL: "https://vue-auth-725b9.firebaseio.com",
    projectId: "vue-auth-725b9",
    storageBucket: "vue-auth-725b9.appspot.com",
    messagingSenderId: "371120106411",
    appId: "1:371120106411:web:6b1bfd5f5cd4c58f5840ee"
  });
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();

export default firebase;

