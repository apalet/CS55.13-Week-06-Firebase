// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import the geFirestore command which retrieves a connection to Google's Servers to connect to the DataBase 
import { getFirestore } from "firebase/firestore";

// We are not using google analytics for this assignment
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Don't leave these literal secret values in a file that you're managing with GitHub and Git.
// Instead, use environment variables referenced in the .env.local file.
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDB = getFirestore(firebaseApp);

// other files in the project could use import if they want to interact with the Firestore DataBase
export { firebaseDB };

// const analytics = getAnalytics(app);