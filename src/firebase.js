import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";

const AuthContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCYF1i7X4Xr-FsMWxsAoHRIfkxsijmPAGM",
  authDomain: "arched-osprey-382610.firebaseapp.com",
  projectId: "arched-osprey-382610",
  storageBucket: "arched-osprey-382610.appspot.com",
  messagingSenderId: "604098145073",
  appId: "1:604098145073:web:552bd1c636cf2dc0eade10",
  measurementId: "G-Z7PLW6VKG0",
};

export const AuthProvider = ({children}) =>{
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );


  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };

  const getUser = () =>{
      return user;
  }

  const logout = () =>{
    signOut(auth)
      .then(() => {
        console.log('logged out');
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <AuthContext.Provider value={{ signIn, getUser , logout }}>
      {children}
    </AuthContext.Provider>
  ); 
}

export const Authcontext = () => {
  return useContext(AuthContext);
};