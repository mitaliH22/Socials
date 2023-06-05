import React, { useEffect, useState } from 'react'
import './../assets/login.scss';
import Loginform from './Loginform';
import Home from './Home';
import { Authcontext } from "./../firebase";

function Login() {  

  const auth = Authcontext();
  let user = auth.getUser();
  return user?.uid ? <Home /> : <Loginform />;}
export default Login
