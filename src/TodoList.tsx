import React from 'react'
import {filterType} from "./App";
import {Button} from "./Components/Button";

type tasksPropsType = {
    id: number,
    title: string
    checked: boolean
}

type propsType = {
    //title=!string — значит что тайтл может прийти а может не прийти в компоненту
    title: string
    tasks: Array<tasksPropsType>
    deleteTask: (taskId: number) => void //void потому что в функции нет return
    changeFilter: (filterValue: filterType) => void
}

export const TodoList = (props:propsType) => {
    return (
        <div>


        <h2>{props.title}</h2>
        <input/>
        <button>+</button>
        <div>
            <ul>
                {props.tasks.map(m => {
                    return (
                        <li key={m.id}>
                            <button onClick={() => props.deleteTask(m.id)}>x</button>
                            <input type="checkbox" checked={m.checked}/>
                            <span>{m.title}</span>
                        </li>
                    )
                }
                )}
            </ul>
        </div>


        <button onClick={() => props.changeFilter('Active')}>Active</button>
        <button onClick={() => props.changeFilter('Completed')}>Completed</button>
            <Button changeFilter={props.changeFilter}/>
            {/*у компоненты не может быть onClick*/}
        {/*<button onClick={() => props.changeFilter('All')}>All</button>*/}

    </div>
    )
}
