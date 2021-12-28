import React, {useState} from 'react';
import {Todolist3} from "./Todolist3";
import {v1} from "uuid";

export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistPropsType = {
    key: string
    id: string
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (id: string) => void
    changeIsDone:() => void
    addTask:() => void
}

export const App3 = () => {
    let [tasks, setTasks] = useState([
        {id: v1(), title: 'Bread', isDone: true},
        {id: v1(), title: 'Milk', isDone: false},
        {id: v1(), title: 'Eggs', isDone: false},
        {id: v1(), title: 'Butter', isDone: false},
    ]);

const removeTask = (id: string) => {
        console.log('here will be remove task')
        setTasks(tasks.filter(f => f.id !== id))
    }

 const changeIsDone = () => {
    console.log('here will be change is done function')
 }

 const addTask = () => {
    console.log('here will be add task function')
 }

    return (
        <div>
            <Todolist3
            key={v1()}
            id={v1()}
            title="What to buy"
            tasks={tasks}
            removeTask={removeTask}
            addTask={addTask}
            changeIsDone={changeIsDone}
            />
        </div>
    )
}