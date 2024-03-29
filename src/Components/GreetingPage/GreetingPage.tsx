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
        <span>Привет!</span>
        <br/>
        <span>Это незамысловатое приложение для составления тудулистов. </span>
        <span>Тык на лотос и погнали!</span>
      </div>
      <LotusButton/>
    </div>
  )
}
