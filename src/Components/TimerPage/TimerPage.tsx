import React, {useEffect, useState} from 'react'
import s from './TimerPage.module.css'
import froggyT3 from "../../asserts/froggyGIFs/froggyT3.gif";
import sleepFroggy from "../../asserts/froggyGIFs/sleepFroggy.gif";
import useSound from 'use-sound';
import SingleFroggySing from '../../asserts/froggySOUNDS/SingleFroggySing.mp3';

export const TimerPage = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [play] = useSound(SingleFroggySing);

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
      if (seconds === 61 && minutes === 10) {
        setSeconds(0)
        clearInterval(interval)
        setIsActive(false)
      }
    } else if (!isActive && seconds !== 0) {
      // @ts-ignore
      clearInterval(interval);
    }
    return () => clearInterval(interval as NodeJS.Timeout);
  }, [isActive, seconds, minutes]);

  useEffect(() => {
    let intervalMinutes: number | NodeJS.Timeout | null | undefined = null;
    if (isActive) {
      intervalMinutes = setInterval(() => {
        setMinutes(minutes => minutes + 1);
      }, 60000);
      if (minutes === 10) {
        setSeconds(0);
        setMinutes(0);
        clearInterval(intervalMinutes)
        setIsActive(false)
      }
    } else if (!isActive && minutes !== 0) {
      // @ts-ignore
      clearInterval(intervalMinutes);
    }
    return () => clearInterval(intervalMinutes as NodeJS.Timeout);
  }, [isActive, minutes]);

  return (
    <div className={s.timerPageContainer}>
      {isActive ? <div>
        <img alt='' src={froggyT3}/>
      </div> : <div>
        <img alt='' className={s.sleepFroggy} src={sleepFroggy}/>
      </div>}

      <div className={s.display}>
        {minutes}m:
        {seconds}s
      </div>
      <div>
        <button className={s.button} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className={s.button} onClick={reset}>
          Reset
        </button>
      </div>
      <button className={s.button} onClick={() => play()}>КВА</button>
      <br/>
        <span>This is a timer, which you cat turn on when you start to do tasks.</span>
      <br/>
      <span>It should be kinda Pomidorro stuff, but I still working on it </span>
    </div>
  );
};
