import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDW_74JAktO20N2a2Rtek5I3ymyUWlCx_U",
    authDomain: "instagram-clone-74b7e.firebaseapp.com",
    projectId: "instagram-clone-74b7e",
    storageBucket: "instagram-clone-74b7e.appspot.com",
    messagingSenderId: "565395187915",
    appId: "1:565395187915:web:564809b5cef147804b534e"
});


const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();





export {auth,storage,db} ;

