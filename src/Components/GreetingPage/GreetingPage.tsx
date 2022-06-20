import React from 'react';
import s from './GreetingPage.module.css'
import froggy1 from '../../asserts/froggyGIFs/froggy1.gif'
import {LotusButton} from "../LotusButton/LotusButton";

export const GreetingPage = () => {
  return (
    <div className={s.greetingPage}>
      {/*<h1 className={s.h1Text}>Hello there</h1>*/}
      <img alt='' className={s.img} src={froggy1}/>
      <div className={s.greetingText}>
        <span>Hello!
          This is a simple planner, where you can write your todos!
        </span>
      </div>
      <LotusButton
        buttonName='Lets GO'
      />
    </div>
  )
}
