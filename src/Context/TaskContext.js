import { createContext, useContext, useState } from "react";

const TaskContext = createContext()

function TaskProvider({ children }) {

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

    return <TaskContext.Provider value={{ setNewTask, newTask, setList, list, setToBeEdited, toBeEdited, updateTodo, setEdit, edit, toggle, removeTask, editTodo }}>
        {children}
    </TaskContext.Provider>
}

const useTask = () => useContext(TaskContext)

export { useTask, TaskProvider }