import firebase from "firebase";
var config = {
    apiKey: "AIzaSyDWGf4DijB7zkwCcBf9RKM66shLqnWTRvI",
    authDomain: "burger-queen-3f95b.firebaseapp.com",
    databaseURL: "https://burger-queen-3f95b.firebaseio.com",
    projectId: "burger-queen-3f95b",
    storageBucket: "burger-queen-3f95b.appspot.com",
    messagingSenderId: "291448847496"
};
const fire = firebase.initializeApp(config);
export default firebase;
