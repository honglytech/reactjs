import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCU12aX4cMSVDBe6x7p6PHiX_h2cSyRHkI",
  authDomain: "fir-react-image-uploads.firebaseapp.com",
  databaseURL: "gs://fir-react-image-uploads.appspot.com",
  projectId: "fir-react-image-uploads",
  storageBucket: "fir-react-image-uploads.appspot.com",
  messagingSenderId: "514360265964",
  appId: "1:514360265964:web:8e6201279b65d6362ce9c9",
  measurementId: "G-BWJQPEKDQ5",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
