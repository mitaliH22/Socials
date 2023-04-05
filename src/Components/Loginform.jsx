import React from 'react'
import img from "./../assets/img.png";
import { signIn } from "../firebase";
import logo from "./../assets/google.png";

function Loginform(props) {
  return (
    <div>
      <div className="login-form">
        <div className="login-data">
          <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" />
            <label htmlFor="password">Password</label>
            <input type="password" id="pwd" />
            <button>Login</button>
            <p>Or</p>
            <button
              className="googleLogin"
              onClick={(e) => {
                e.preventDefault();
                signIn(props.setLoggedIn);
              }}
            >
              <img src={logo} alt="google" />
              Sign in with Google
            </button>
          </form>
        </div>
        <div className="image">
          <img src={img} alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Loginform