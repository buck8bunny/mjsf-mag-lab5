import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    //PASTE HERE YR CONFIG
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
