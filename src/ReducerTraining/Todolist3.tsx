import React from 'react';
import {TodolistPropsType} from "./App3";
import {AddItemForm3} from "./AddItemForm3";

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
