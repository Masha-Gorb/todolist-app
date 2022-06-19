import React from 'react';
import FrogLogo from '../../asserts/froggyICONS/FrogLogo.svg'
import LotusLogo from '../../asserts/froggyICONS/Lotus.svg'
import s from './Header.module.css'


export const Header = () => {
  return (
    <div className={s.header}>
        <img alt='' className={s.logo} src={FrogLogo}/>
        <h1 className={s.headerText}>EAT THE FROG</h1>
        <img alt='' className={s.logo} src={LotusLogo}/>
    </div>
  )
}