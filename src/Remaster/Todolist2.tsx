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
    addTodolist:() => void
    removeTask: (_id: string, taskID: string) => void
}


export const Todolist2 = (props: PropsType) => {
    const removeTodolistHandler = () => {
        props.removeTodolist(props._id)
    }
    const addTodolistHandler = () => {
        props.addTodolist()
    }

    const removeTaskHandler = (taskID: string) => {
        props.removeTask(props._id, taskID)
    }
    return (
        <div>
            <input />
            <button onClick={addTodolistHandler}>+</button>
            <h3>{props.title}</h3>
            <button onClick={removeTodolistHandler}>x</button>


            {props.tasks.map(m => {
                return <li>{m.taskTitle} <button onClick={() => removeTaskHandler(m.taskID)}>x</button></li>
            })}

        </div>
    )
}