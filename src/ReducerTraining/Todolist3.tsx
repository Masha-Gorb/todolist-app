import React, {useState} from 'react';
import {AddItemForm3} from "./AddItemForm3";
import {TasksPropsType} from "./App3";

export type TodolistPropsType = {
    key: string
    id: string
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (id: string) => void
    changeIsDone:() => void
    addTask:(title: string) => void
}
export const Todolist3 = (props: TodolistPropsType) => {

    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }

    const changeIsDoneHandler = () => {
        props.changeIsDone()
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <AddItemForm3
            callback={props.addTask}
            />
            {props.tasks.map( m => {
                return <li >
                    <input type='checkbox' checked={m.isDone} onClick={() => changeIsDoneHandler()}/>
                    {m.title}
                    <button onClick={() => removeTaskHandler(m.id)}>x</button>
                </li>
                }
            )}
        </div>
    )
}
