import { useUniCon } from "../Context/UniversalContext";

export function Settings() {

  const { settings, setSettings, customTime, setCustomTime, name, setName } = useUniCon()

  return (
    <section class={settings? "" : "hide"} id="settings-section">
      <div id="settings">
        <h1>Settings</h1>

        <label for="name">Name</label>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>

        <label for="focus">Focus Time</label>
        <input type="number" name="focus" id="focus" value={customTime.focus} onChange={(e) => setCustomTime(() => {
          return {
            ...customTime,
            ...customTime.focus,
            focus: e.target.value
          }
        })} />

        <label for="short-break">Short Break Time</label>
        <input type="number" name="short-break" id="short-break" value={customTime.shortBreak} onChange={(e) => setCustomTime(() => {
          return {
            ...customTime,
            ...customTime.shortBreak,
            shortBreak: e.target.value
          }
        })} />

        <label for="long-break">Long Break Time</label>
        <input type="number" name="long-break" id="long-break" value={customTime.longBreak} onChange={(e) => setCustomTime(() => {
          return {
            ...customTime,
            ...customTime.longBreak,
            longBreak: e.target.value
          }
        })}/>

        <button id="save" type="submit" onClick={() => {
          setSettings(false);
          setCustomTime(customTime);
          localStorage.setItem("gozoPomoTimer", JSON.stringify(customTime))
          localStorage.setItem("gozoPomoName", name)
          }}>
          Done
        </button>
      </div>
    </section>
  );
}
