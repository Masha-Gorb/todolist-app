import React from 'react';
import s from './LoginPage.module.css'
import {useNavigate} from "react-router-dom";


export const LoginPage = () => {
  const navigate = useNavigate()
  const toMainPage = () => navigate("/main")
  return (
    <div className={s.login}>
      <h1>LOGIN</h1>
      <input/>
      <span>enter your mail</span>
      <input/>
      <span>enter your password</span>
      <button onClick={toMainPage}>Submit</button>

    </div>
  )
}