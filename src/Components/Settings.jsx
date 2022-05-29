export function Settings() {
  return (
    <section class="hide" id="settings-section">
      <div id="settings">
        <h1>Settings</h1>

        <label for="name">Name</label>
        <input type="text" placeholder="Enter your name" />

        <label for="focus">Focus Time</label>
        <input type="number" name="focus" id="focus" />

        <label for="short-break">Short Break Time</label>
        <input type="number" name="short-break" id="short-break" />

        <label for="long-break">Long Break Time</label>
        <input type="number" name="long-break" id="long-break" />

        <button id="save" type="submit">
          Save
        </button>
      </div>
    </section>
  );
}
