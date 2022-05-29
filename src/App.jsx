import "./App.css";
import { Navbar, Settings, TaskContainer, TimerContainer } from "./Components";

function App() {
  return (
    <div className="App">
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
