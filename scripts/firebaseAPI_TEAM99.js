//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDGLssa8So8GDEhfW0253eJD9-RxJcaf5s",
    authDomain: "comp-1800-202410-demo.firebaseapp.com",
    projectId: "comp-1800-202410-demo",
    storageBucket: "comp-1800-202410-demo.appspot.com",
    messagingSenderId: "253774497129",
    appId: "1:253774497129:web:8500bcbc27785aca25e9f8"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
