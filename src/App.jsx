import "./App.css";
import { Navbar, Settings, TaskContainer, TimerContainer } from "./Components";
import { useTimer } from "./Context/TimerContext";
import { useUniCon } from "./Context/UniversalContext";

function App() {

  const { focus, shortBreak, longBreak } = useTimer();
  const { darkMode } = useUniCon();

  const setMode = () => {
    if(!darkMode) {
      if(focus) {
        return "focus"
      }
      if(shortBreak) {
        return "short-break"
      }
      if(longBreak) {
        return "long-break"
      }
    }
    if(darkMode) {
      return "dark-mode"
    }
    
  }

  return (
    <div id={setMode()} className="App">
      <Navbar />
      <main>
        <TimerContainer />
        <TaskContainer />
      </main>
      <Settings />
    </div>
  );
}

export default App;
