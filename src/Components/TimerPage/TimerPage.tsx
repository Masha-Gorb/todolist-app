import React, {useEffect, useState} from 'react'
import s from './TimerPage.module.css'


export const TimerPage = () => {
  let [seconds, setSeconds] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [hours, setHours] = useState(0)

  useEffect(() => {
    setInterval(() => {
      let date = new Date()
      setSeconds(date.getSeconds())
    }, 1000)
  }, [seconds])

  useEffect(() => {
    setInterval(() => {
      let date = new Date()
      setMinutes(date.getMinutes())
    }, 1000)
  }, [minutes])

  useEffect(() => {
    setInterval(() => {
      let date = new Date()
      setHours(date.getHours())
      console.log('hours')
    }, 1000)
  }, [hours])

  return (
    <div className={s.timerPageContainer}>
      <h3>Set timer!</h3>
      {hours} : {minutes}: {seconds}
    </div>
  )
}
