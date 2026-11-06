import React, { useRef, useState } from 'react'
import './App.css'

const App = () => {

  const [time, setTime] = useState(0)

  const timeRef = useRef(null);

  function setTimer() {
    if (timeRef.current !== null) return;

    timeRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div className="container">
      <div className="stopwatch">

        <h1>Stopwatch</h1>

        <div className="timer">
          {String(Math.floor(time / 60)).padStart(2, '0')}:
          {String(time % 60).padStart(2, '0')}
        </div>

        <p className="subtitle">Track your time</p>

        <div className="buttons">
          <button className="start" onClick={setTimer}>Start</button>
          <button className="stop" onClick={stopTimer}>Stop</button>
          <button className="reset" onClick={resetTimer}>Reset</button>
        </div>

      </div>
    </div>
  )
}

export default App