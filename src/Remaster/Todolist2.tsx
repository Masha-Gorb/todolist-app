import React, {MouseEventHandler} from 'react'

export type TasksPropsType = {
    taskID: string
    taskTitle: string
    isDone: boolean
}
export type PropsType = {
    key: string
    _id: string
    title: string
    tasks: Array<TasksPropsType>
    removeTodolist: (_id: string) => void
}


export const Todolist2 = (props: PropsType) => {
    const removeTodolistHandler = () => {
        props.removeTodolist(props._id)
    }
    return (
        <div>
            {props.title}
            <button onClick={removeTodolistHandler}>x</button>

            {props.tasks.map(m => {
                return <li>{m.taskTitle} <button >x</button></li>
            })}

        </div>
    )
}