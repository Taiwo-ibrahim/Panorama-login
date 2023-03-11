import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "./firebase-config"



function SignUp() {
  const [user, setUser] = useState({})
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
 
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  console.log(user)
  const navigate = useNavigate()

  const register =  async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      navigate("/Welcome")
      console.log(user)
    } catch (error) {
      alert(error.message)
    }
  }


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, registerEmail, registerPassword);
      navigate("/Welcome")
      console.log(user)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="container">
      <div className="container__image">
        <img src="./Glasses.jpg" alt="hero-pic"/>
      </div>
      <div className="form__container">
        <div className="form__container-text">
          <h1>Welcome to <span>Panorama</span>, <br/>Sign up to continue.</h1>
          <p>Don`t have an account? <a href="./">Create an account</a> <br /> It takes less than a minute.</p>
        </div>

        <div className="form__container-input">
          <p className="form__container-input-email_text">Email</p>
          <input type="email" placeholder="E-mail" className="form__container-input-email" onChange={(event) => {setRegisterEmail(event.target.value)}}></input>
          <p className="form__container-input-password_text">Password</p>
          <input type="password" placeholder="Password" className="form__container-input-password" onChange={(event) => {setRegisterPassword(event.target.value)}}></input>
          <button className="form__container-input_signup-btn" onClick={register}>Sign Up</button>
          <button className="form__container-login_btn" onClick={login}> Login </button>
        </div>

      </div>
    </div>
    
  )
}


export default SignUp