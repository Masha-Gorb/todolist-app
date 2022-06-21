import React from 'react';
import FrogLogo from '../../asserts/froggyICONS/FrogLogo.svg'
import LotusLogo from '../../asserts/froggyICONS/Lotus.svg'
import s from './Header.module.css'
import {Link} from "react-router-dom";


export const Header = () => {
  return (
    <div className={s.header}>
        <img alt='' className={s.logo} src={FrogLogo}/>
        <h1 className={s.headerText}>EAT THE FROG</h1>
        <img alt='' className={s.logo} src={LotusLogo}/>
      <div>
        <Link className={s.headerText} to="/greetings">--Start Page--</Link>
        <Link className={s.headerText} to="/login">Login Page--</Link>
        <Link className={s.headerText} to="/main">Main Page</Link>
      </div>

    </div>
  )
}