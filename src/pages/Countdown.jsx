import React, { useState, useEffect } from 'react'
import './Countdown.css'
import * as utilz from './CountdownUtilz'
import santaSleigh from '../assets/sleigh.png'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}

function Countdown() {

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime(utilz.xmasMillisecondsTimestamp);
    }, 1000);
    return () => clearInterval(intervalId)
  }, [utilz.xmasMillisecondsTimestamp])

  function updateTime(countdown) {
    setRemainingTime(utilz.timestampCountdown(countdown))
  }

  return (
    <div className='countdown-container flex justify-center w-screen font-bold'>
      <div className='countdown-display shadow-lg rounded-xl p-7'>
        <h1 className='countdown-header p-3'>Countdown until <span className='text-red-800'>Christmas</span>!</h1>
        <div className="timer-box flex p-2 justify-center">
          <div>
            <p id='days' className='px-5 m-2'>{remainingTime.days}</p>
            <span>Days</span>
          </div>
          <div>
            <p id='hours' className='px-5 m-2'>{remainingTime.hours}</p>
            <span>Hours</span>
          </div>
          <div>
            <p id='minutes' className='px-5 m-2'>{remainingTime.minutes}</p>
            <span>Minutes</span>
          </div>
          <div>
            <p id='seconds' className='px-5 m-2'>{remainingTime.seconds}</p>
            <span>Seconds</span>
          </div>
        </div>
        <img src={santaSleigh} className='sleigh'/>
      </div>
    </div>
  )
}

export default Countdown
