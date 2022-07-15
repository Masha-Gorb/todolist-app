import React from 'react';
import FrogLogo from '../../asserts/froggyICONS/FrogLogo.svg'
import LotusLogo from '../../asserts/froggyICONS/Lotus.svg'
import s from './Header.module.css'
import {Link} from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';
import Button from '@mui/material/Button/Button';


export const Header = () => {
  return (
    <div className={s.header}>
        <img alt='' className={s.logo} src={FrogLogo}/>
        <h1 className={s.headerLogoText}>EAT THE FROG</h1>
        <img alt='' className={s.logo} src={LotusLogo}/>

      <div className={s.headerLinkGroup}>
        <ButtonGroup variant="contained" aria-label="text button group" color="secondary">
          <Button>
            <Link className={s.headerText} to="/login">Login Page</Link>
          </Button>
          <Button>
            <Link className={s.headerText} to="/main">Main Page</Link>
          </Button>
          <Button>
            <Link className={s.headerText} to="/timer">Timer Page</Link>
          </Button>
        </ButtonGroup>
      </div>

    </div>
  )
}