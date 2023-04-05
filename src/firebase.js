import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYF1i7X4Xr-FsMWxsAoHRIfkxsijmPAGM",
  authDomain: "arched-osprey-382610.firebaseapp.com",
  projectId: "arched-osprey-382610",
  storageBucket: "arched-osprey-382610.appspot.com",
  messagingSenderId: "604098145073",
  appId: "1:604098145073:web:552bd1c636cf2dc0eade10",
  measurementId: "G-Z7PLW6VKG0",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const signIn =  (callback) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        callback(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
}
