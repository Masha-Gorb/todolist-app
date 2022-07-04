import React, {useEffect, useState} from 'react'
import s from './TimerPage.module.css'
import froggyT3 from "../../asserts/froggyGIFs/froggyT3.gif";
import sleepFroggy from "../../asserts/froggyGIFs/sleepFroggy.gif";


export const TimerPage = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: number | NodeJS.Timeout | null | undefined = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      if (seconds === 61) {
        setSeconds(0)
      }
    } else if (!isActive && seconds !== 0) {
      // @ts-ignore
      clearInterval(interval);
    }
    return () => clearInterval(interval as NodeJS.Timeout);
  }, [isActive, seconds]);

  useEffect(() => {
    let intervalMinutes: number | NodeJS.Timeout | null | undefined = null;
    if (isActive) {
      intervalMinutes = setInterval(() => {
        setMinutes(minutes => minutes + 1);
      }, 10000);
    } else if (!isActive && minutes !== 0) {
      // @ts-ignore
      clearInterval(intervalMinutes);
    }
    return () => clearInterval(intervalMinutes as NodeJS.Timeout);
  }, [isActive, minutes]);

  return (
    <div className={s.timerPageContainer}>
      {isActive ? <div>
        <img alt='' className={s.img} src={froggyT3}/>
      </div> : <div>
        <img alt='' className={s.sleepFroggy} src={sleepFroggy}/>
      </div>}

      <div className="time">
        {minutes}m
        {seconds}s
      </div>
      <div>
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
