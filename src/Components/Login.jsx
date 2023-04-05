import React, { useState } from 'react'
import './../assets/login.scss';
import Loginform from './Loginform';
import Home from './Home';

function Login() {  
  const [isLoggedIn , setLoggedIn] =useState(false || localStorage.getItem('loggedIn'));
  return !isLoggedIn ? (
    <div className="wrapper">
      <Loginform setLoggedIn={setLoggedIn} />
    </div>
  ) : (
    <Home isLoggedIn={isLoggedIn} />
  );
}

export default Login