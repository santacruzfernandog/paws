import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyCLeHxjhH-d0dkCRFtVd5NBS9AJsEHICUQ",
    authDomain: "ecommerce-coder-4d9bf.firebaseapp.com",
    projectId: "ecommerce-coder-4d9bf",
    storageBucket: "ecommerce-coder-4d9bf.appspot.com",
    messagingSenderId: "994870666034",
    appId: "1:994870666034:web:4f21eaa3f719eac6352d2b"
})

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}

