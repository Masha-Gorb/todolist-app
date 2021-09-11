import React from 'react'

type tasksPropsType = {
    id: number,
    title: string
    checked: boolean
}

type propsType = {
    title: string
    tasks: Array<tasksPropsType>
    deleteTask: (taskId: number) => void
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
                    // debugger
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


        <button>Active</button>
        <button>Completed</button>
        <button>All</button>

    </div>
    )
}
