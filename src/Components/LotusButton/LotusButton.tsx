import React from 'react';
import s from './LotusButton.module.css'
import LotusLogo from "../../asserts/froggyICONS/Lotus.svg";
import {useNavigate} from "react-router-dom";


type PropsType = {
  buttonName: string
}

export const LotusButton = (props: PropsType) => {
const navigate = useNavigate()
  const toLoginPage = () => navigate("/login")
  return (
    <div>
      <button className={s.LotusButton} onClick={toLoginPage}>
        <img alt='' className={s.lotusButtonLogo} src={LotusLogo}/>
        <span className={s.LotusButtonName}>{props.buttonName}</span>
      </button>
    </div>
  )
}