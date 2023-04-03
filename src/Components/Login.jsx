import React from 'react'
import './../assets/login.scss';
import img from './../assets/img.png';

function Login() {
  return (
    <div className="wrapper">
      <h2>Socials UI</h2>
      <div className="login-form">
        <div className="login-data">
            <form action="">
              <label htmlFor="username">Username</label>
              <input type="text" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="pwd" />
              <button>Login</button>
              <p>Or</p>
              <h3>Login/Signup with Socials</h3>
            </form>
        </div>
        <div className="image">
          <img src={img} alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Login