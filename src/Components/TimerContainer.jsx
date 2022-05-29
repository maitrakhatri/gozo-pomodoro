import { useState } from "react";

export function TimerContainer() {

  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(25);

  const [isPause, setIsPause] = useState(true);
  const [reset, setReset] = useState(false);

  const [focus, setFocus] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);

  let interval = setInterval(() => {
    clearInterval(interval);
    if (!reset) {
      if (!isPause) {
        if (secs === 0) {
          if (mins !== 0) {
            setSecs(59);
            setMins(mins - 1);
          } else {
            //end
          }
        } else {
          setSecs(secs - 1);
        }
      }
    } else if (focus) {
      setSecs(0);
      setMins(25);
    } else if (shortBreak) {
      setSecs(0);
      setMins(5);
    } else if (longBreak) {
      setSecs(0);
      setMins(20);
    }
  }, 1000);

  const startFocus = () => {
    setShortBreak(false);
    setLongBreak(false);
    setFocus(true);
    setIsPause(true);
    setReset(true);
  };

  const startShortBreak = () => {
    setFocus(false);
    setLongBreak(false);
    setShortBreak(true);
    setIsPause(true);
    setReset(true);
  };

  const startLongBreak = () => {
    setFocus(false);
    setShortBreak(false);
    setLongBreak(true);
    setIsPause(true);
    setReset(true);
  };

  const timerSecs = secs < 10 ? `0${secs}` : secs;
  const timerMins = mins < 10 ? `0${mins}` : mins;

  return (
    <div className="timer-container">

      <div className="modes">
        <span id={focus? "active" : ""} onClick={startFocus} >Focus</span>
        <span id={shortBreak? "active" : ""} onClick={startShortBreak}>Short Break</span>
        <span id={longBreak? "active" : ""} onClick={startLongBreak}>Long Break</span>
      </div>

      <div className="timer">
        <span>{`${timerMins}:${timerSecs}`}</span>
      </div>

      <div className="actions">
        <button id="primary" onClick={() => {
          setReset(false);
          setIsPause((isPause) => !isPause);
        }}> {isPause ? "Start" : "Pause"} </button>
      </div>
    </div>
  );
}
