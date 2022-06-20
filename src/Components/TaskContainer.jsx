import { useTask } from "../Context/TaskContext";

export function TaskContainer() {
  const {
    newTask,
    list,
    toBeEdited,
    updateTodo,
    setEdit,
    edit,
    toggle,
    removeTask,
    editTodo,
    settingNewTask,
    addingNewTask,
    updatingTodo,
  } = useTask();

  return (
    <div class="task-container">
      {!edit && (
        <div className="new-task">
          <input
            type="text"
            id="add-new-task"
            placeholder="add new task"
            value={newTask.task}
            onChange={(e) => settingNewTask(e)}
          />{" "}
          <button onClick={() => addingNewTask(list)}>Add</button>
        </div>
      )}

      <div className="update new-task">
        {edit && (
          <>
            <input
              type="text"
              id="add-new-task"
              value={toBeEdited.task}
              onChange={(e) => updatingTodo(e)}
            />{" "}
            <button
              onClick={() => {
                updateTodo(list);
                setEdit(false);
              }}
            >
              Update
            </button>{" "}
          </>
        )}
      </div>

      <div class="task-list">
        <ol>
          {list.map((item) => {
            return (
              <span class="task">
                <li key={item.id} className={item.done ? "done" : ""}>
                  {item.task}
                </li>
                <input
                  type="checkbox"
                  checked={item.done ? "checked" : ""}
                  onChange={() => toggle(item, list)}
                />
                <img
                  src="assets/edit-64.png"
                  alt="edit"
                  onClick={() => {
                    editTodo(item);
                    setEdit(true);
                  }}
                />{" "}
                <img
                  src="assets/delete.svg"
                  alt="delete"
                  onClick={() => removeTask(item, list)}
                />
              </span>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
