import firebase from 'firebase';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLXlrLwrYxILVuveCZoloMRwVD-X4qPEI",
  authDomain: "travel-journal-app-592bf.firebaseapp.com",
  databaseURL: "https://travel-journal-app-592bf.firebaseio.com",
  projectId: "travel-journal-app-592bf",
  storageBucket: "travel-journal-app-592bf.appspot.com",
  messagingSenderId: "487084831222",
  appId: "1:487084831222:web:8a3ed52500c440eda197d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
