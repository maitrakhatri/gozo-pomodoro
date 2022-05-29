import { useState } from "react";

export function TaskContainer() {

  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [edit, setEdit] = useState(false);
  const [toBeEdited, setToBeEdited] = useState({});

  const editTodo = (item) => {
    setToBeEdited(item);
  };

  const updateTodo = () => {
    setList(() =>
      list.map((item) => (item.id === toBeEdited.id ? toBeEdited : item))
    );
  };

  const toggle = (item) => {
    setList((todos) =>
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, done: !item.done } : todo
      )
    );
  };

  const removeTask = (item) => {
    setList((list) => list.filter((todo) => todo.id !== item.id));
  };

  return (
    <div class="task-container">
      {!edit && (
        <div className="new-task">
          <input
            type="text"
            id="add-new-task"
            placeholder="add new task"
            value={newTask.task}
            onChange={(e) =>
              setNewTask({
                id: Math.random(),
                task: e.target.value,
                done: false,
              })
            }
          />{" "}
          <button onClick={() => {
            setList(() => list.concat(newTask));
            setNewTask((todo) => {
              return {
                ...todo,
                task: ""
              }
            })
          }}>
            Add
          </button>
        </div>
      )}

      {/* <div class="new-task">
        <input type="text" id="add-new-task" placeholder="add new task" />{" "}
        <button>Add</button>
      </div> */}

      <div className="update new-task">
        {edit && (
          <>
            <input
              type="text"
              id="add-new-task"
              value={toBeEdited.task}
              onChange={(e) =>
                setToBeEdited((item) => {
                  return {
                    ...item,
                    task: e.target.value,
                  };
                })
              }
            />{" "}
            <button
              onClick={() => {
                updateTodo();
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
                  onChange={() => toggle(item)}
                />
                <img src="assets/edit-64.png" alt="edit"
                  onClick={() => {
                    editTodo(item);
                    setEdit(true);
                  }}
                />{" "}
                <img src="assets/delete.svg" alt="delete" onClick={() => removeTask(item)} />
              </span>
            );
          })}
        </ol>

        {/* <ol>
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
        </ol> */}
      </div>
    </div>
  );
}
