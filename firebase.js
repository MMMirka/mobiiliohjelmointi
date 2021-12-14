// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfXUUKQxmAvBK3eWLBggLRTWeE7tCyaFc",
  authDomain: "mobiiliohjelmointi-41a71.firebaseapp.com",
  projectId: "mobiiliohjelmointi-41a71",
  storageBucket: "mobiiliohjelmointi-41a71.appspot.com",
  messagingSenderId: "845225746296",
  appId: "1:845225746296:web:668a53ab51813cc44fb28d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };