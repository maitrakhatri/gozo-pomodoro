import { useState } from "react";
import { useTask } from "../Context/TaskContext";

export function TaskContainer() {

  const { setNewTask, newTask, setList, list, setToBeEdited, toBeEdited, updateTodo, setEdit, edit, toggle, removeTask, editTodo } = useTask()

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
      </div>
    </div>
  );
}
