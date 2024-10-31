import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAEgQXYYAZq5hoGEouetyJVIZPH5K4iCVE",
    authDomain: "testlab-bd97b.firebaseapp.com",
    databaseURL: "https://testlab-bd97b-default-rtdb.firebaseio.com",
    projectId: "testlab-bd97b",
    storageBucket: "testlab-bd97b.appspot.com",
    messagingSenderId: "579300222770",
    appId: "1:579300222770:web:17aa6ea9ea30d5ee7e592b",
    measurementId: "G-4D1T1FKTNZ"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
