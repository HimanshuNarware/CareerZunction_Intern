import React from 'react';
import "./Login.css";

const Login = () => {
  return (
    <>
    <div className='box'>
     <div className='container'>
<div>
  <h1>Login to join us....</h1>
  <label for="username" className='input-label'>Username</label>
  <input type="text" placeholder="USERNAME" />
  <label for="password" className='input-label'>Password</label>
  <input type="password" placeholder="PASSWORD" />
</div>
<button className='login-btn-btn'>Log In</button>
     </div></div>
    </>
  );
}

export default Login;

