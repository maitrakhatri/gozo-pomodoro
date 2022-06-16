import "./App.css";
import { Navbar, Settings, TaskContainer, TimerContainer } from "./Components";
import { useTimer } from "./Context/TimerContext";
import { useUniCon } from "./Context/UniversalContext";
import { setMode } from "./Utils/mode"

function App() {

  const { focus, shortBreak, longBreak } = useTimer();
  const { darkMode } = useUniCon();

  return (
    <div id={setMode(darkMode, focus, shortBreak, longBreak)} className="App">
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
