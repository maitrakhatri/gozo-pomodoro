import { useTimer } from "../Context/TimerContext";

export function TimerContainer() {

  const { focus, shortBreak, longBreak, startFocus, startLongBreak, startShortBreak, timerMins, timerSecs, isPause, setIsPause, setReset } = useTimer()

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
