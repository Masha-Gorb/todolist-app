import React from 'react';
import s from './GreetingPage.module.css'
import froggy1 from '../../asserts/froggyGIFs/froggy1.gif'

export const GreetingPage = () => {
  return (
    <div className={s.greetingPage}>
      {/*<h1 className={s.h1Text}>Hello there</h1>*/}
      <img alt='' className={s.img} src={froggy1}/>
      <div>
        <button>Log in</button>
        <button>Register</button>
      </div>
    </div>
  )
}
