import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext()

function TaskProvider({ children }) {

    const [list, setList] = useState(JSON.parse(localStorage.getItem("gozoPomoTask")) ?? []);
    const [newTask, setNewTask] = useState({});
    const [edit, setEdit] = useState(false);
    const [toBeEdited, setToBeEdited] = useState({});

    const settingNewTask = (e) => {
        setNewTask({
            id: Math.random(),
            task: e.target.value,
            done: false,
        })
    }

    const addingNewTask = (list) => {
        setList(() => list.concat(newTask));
        setNewTask((todo) => {
            return {
                ...todo,
                task: ""
            }
        })
    }

    const editTodo = (item) => {
        setToBeEdited(item);
    };

    const updatingTodo = (e) => {
        setToBeEdited((item) => {
            return {
                ...item,
                task: e.target.value,
            };
        })
    }

    const updateTodo = (list) => {
        setList(() =>
            list.map((item) => (item.id === toBeEdited.id ? toBeEdited : item))
        );
    };

    const toggle = (item, list) => {
        setList(() =>
            list.map((todo) =>
                todo.id === item.id ? { ...todo, done: !item.done } : todo
            )
        );
    };

    const removeTask = (item, list) => {
        setList(() => list.filter((todo) => todo.id !== item.id));
    };

    useEffect(() => {
        localStorage.setItem("gozoPomoTask", JSON.stringify(list))
    }, [list])

    return <TaskContext.Provider value={{ setNewTask, newTask, setList, list, setToBeEdited, toBeEdited, updateTodo, setEdit, edit, toggle, removeTask, editTodo, settingNewTask, addingNewTask, updatingTodo }}>
        {children}
    </TaskContext.Provider>
}

const useTask = () => useContext(TaskContext)

export { useTask, TaskProvider }