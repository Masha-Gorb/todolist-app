import React, {KeyboardEvent, ChangeEvent, useState} from 'react'
import {FilterValuesType} from "./App";
import AddItemForm from "./AddItemForm";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TodoListPropsType = {
    id: string
    filter: FilterValuesType
    title: string
    tasks: Array<TaskType>
    addTask: (title: string, todoListID: string) => void
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskStatus:(taskID: string, isDone: boolean, todoListID: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {

    const tasksJSXElements = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id, props.id)
        const changeTaskStatus = (event: ChangeEvent<HTMLInputElement>)=>
            props.changeTaskStatus(t.id, event.currentTarget.checked, props.id)
        return (
            <li key={t.id}>
                <input
                    type="checkbox"
                    checked={t.isDone}
                    onChange={changeTaskStatus}
                />
                <span>{t.title}</span>
                <IconButton onClick={removeTask}>
                    <Delete/>
                </IconButton>
                {/*<Button onClick={removeTask}>х</Button>*/}
            </li>
        )
    })

    const onAllClickHandler = () => props.changeFilter("all", props.id)
    const onActiveClickHandler = () => props.changeFilter("active", props.id)
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id)
    const removeTodoList = () => props.removeTodoList(props.id)
    const addTask = (title: string) => props.addTask(title, props.id)

    return (
        <div>
            <h3>{props.title}
                <IconButton
                    color={"primary"}
                    size={"medium"}
                    onClick={removeTodoList}>
                    <Delete/>
                </IconButton>
                {/*<button onClick={removeTodoList}>x</button>*/}

            </h3>
            <AddItemForm addItem={addTask} />
            <ul>
                {tasksJSXElements}
            </ul>
            <div>
                <Button
                    size={"small"}
                    variant={"contained"}
                    color={props.filter === "all" ? "secondary" : "primary"}
                    // className={props.filter === "all" ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</Button>
                <Button
                    size={"small"}
                    variant={"contained"}
                    color={props.filter === "all" ? "primary" : "secondary"}
                    // className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active</Button>
                <Button
                    size={"small"}
                    variant={"contained"}
                    color={props.filter === "all" ? "secondary" : "primary"}
                    // className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed</Button>
                <button>create new public repository</button>
            </div>
        </div>
    )
}

export default TodoList

