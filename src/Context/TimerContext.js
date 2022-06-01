import { createContext, useContext, useEffect, useState } from "react";
import { useUniCon } from "./UniversalContext";

const TimerContext = createContext()

function TimerProvider({children}) {

    var now = new Date()
    var pomoLocalData = JSON.parse(localStorage.getItem("gozoPomo"))

    const { customTime } = useUniCon()

    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(customTime.focus);

    const [isPause, setIsPause] = useState(true);
    const [reset, setReset] = useState(false);

    const [focus, setFocus] = useState(true);
    const [shortBreak, setShortBreak] = useState(false);
    const [longBreak, setLongBreak] = useState(false);

    const [pomoCounter, setPomoCounter] = useState( pomoLocalData.pomo ?? 0)

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
                        if(focus) {
                            setPomoCounter(() => pomoCounter + 1)
                            startShortBreak();
                        }
                        if(shortBreak) {
                            startFocus();
                        }
                    }
                } else {
                    setSecs(secs - 1);
                }
            }
        } else if (focus) {
            setSecs(0);
            setMins(customTime.focus);
        } else if (shortBreak) {
            setSecs(0);
            setMins(customTime.shortBreak);
        } else if (longBreak) {
            setSecs(0);
            setMins(customTime.longBreak);
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

    useEffect(() => {
        setReset(true)
    }, [customTime])

    useEffect(() => {
        localStorage.setItem("gozoPomo", JSON.stringify({
            pomo: pomoCounter,
            date: now.getDate()
        }))
    })

    useEffect(() => {
        if(now.getDate() !== pomoLocalData.date) {
            setPomoCounter(0)
        }
    })

    return <TimerContext.Provider value={{ focus, shortBreak, longBreak, startFocus, startLongBreak, startShortBreak, timerMins, timerSecs, isPause, setIsPause, setReset, pomoCounter }}>
        {children}
    </TimerContext.Provider>
}

const useTimer = () => useContext(TimerContext)

export { TimerProvider, useTimer }