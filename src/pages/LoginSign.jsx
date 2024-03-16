import React from 'react'
import './css/login.css'

const LoginSign = () => {
  return (
    <div className='login'>
      <div className="container">
        <h1>Sign up</h1>
        <div className="fields">
          <input type="text" name="name" id="name" placeholder='Your Name' />
          <input type="email" name="email" id="email" placeholder='Your Email' />
          <input type="password" name="password" id="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="choice">Already Have An Account ?<span> Login Here</span></p>
        <div className="agree">
          <input type="checkbox" name="agree" id="agree" />
          <p>By Continuing I Agree To The Terms Of Use And Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSign