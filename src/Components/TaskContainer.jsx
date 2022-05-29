export function TaskContainer() {
  return (
    <div class="task-container">
      <div class="new-task">
        <input type="text" id="add-new-task" placeholder="add new task" />{" "}
        <button>Add</button>
      </div>
      <div class="task-list">
        <ol>
          <span class="task">
            <li class="done">Design this</li>
            <input type="checkbox" />{" "}
            <img src="assets/edit-64.png" alt="edit" />
          </span>

          <span class="task">
            <li>Complete this</li>
            <input type="checkbox" />{" "}
            <img src="assets/edit-64.png" alt="edit" />
          </span>

          <span class="task">
            <li>Deploy this</li>
            <input type="checkbox" />{" "}
            <img src="assets/edit-64.png" alt="edit" />
          </span>
        </ol>
      </div>
    </div>
  );
}
