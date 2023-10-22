import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCkgVrCsehnMDWyyjjGjNXIfBQ4fu24w-0",
    authDomain: "vue-mag.firebaseapp.com",
    databaseURL: "https://vue-mag.firebaseio.com",
    projectId: "vue-mag",
    storageBucket: "vue-mag.appspot.com",
    messagingSenderId: "732633263029",
    appId: "1:732633263029:web:7242685f3bbadc3545c7fc"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
