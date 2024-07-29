import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState ==="Login"?<></>: <input type="text" placeholder='Your Name'  required />}
           
            <input type="email" placeholder='You email'  required />
            <input type="password" placeholder='Password'  required />

        </div>
        <button>{currState === "Sign up"?"Create account":"Login"}</button>

        <div className="login-popup-condition">
            <input type="checkbox"  required/>
            <p>By Continueing, i agree to the terms and condition of use & privacy polic</p>
        </div>
        {currState === "Login"? 
        <p>Create a new Account? <span   onClick={()=>setCurrState("Sign up")}>Click here</span></p>:
        <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      
      
      </form>
    </div>
  )
}

export default LoginPopUp
