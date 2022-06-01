import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext()

function TaskProvider({ children }) {

    const [list, setList] = useState(JSON.parse(localStorage.getItem("gozoPomoTask")) ?? []);
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

    useEffect(() => {
        localStorage.setItem("gozoPomoTask", JSON.stringify(list))
    }, [list])

    return <TaskContext.Provider value={{ setNewTask, newTask, setList, list, setToBeEdited, toBeEdited, updateTodo, setEdit, edit, toggle, removeTask, editTodo }}>
        {children}
    </TaskContext.Provider>
}

const useTask = () => useContext(TaskContext)

export { useTask, TaskProvider }