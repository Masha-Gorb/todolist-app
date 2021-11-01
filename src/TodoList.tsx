import React, {ChangeEvent, KeyboardEvent, MouseEventHandler, useState} from 'react'
import {filterType} from "./App";
import {ButtonUniversal} from "./Components/ButtonUniversal";
import styles from './App.module.css'

export type tasksPropsType = {
    id: string
    title: string
    checked: boolean
}

type propsType = {
    //title=!string — значит что тайтл может прийти а может не прийти в компоненту
    todolistId: string
    title: string
    tasks: Array<tasksPropsType>
    deleteTask: (todolistId: string, taskId: string) => void //void потому что в функции нет return
    changeFilter: (filterValue: filterType, todolistId: string) => void
    addTask: (todolistId: string, newTaskTitle: string) => void
    changeChekBox: (todolistId: string, myEvent: boolean, newId: string) => void
    filter: filterType
    deleteWholeList: (todolistId: string) => void
    // setTasks: (tasks: Array<tasksPropsType>) => void
}

export const TodoList = (props: propsType) => {

    let [newTaskTitle, setNewTaskTitle] = useState('')
    let [error, setError] = useState(true)

    const addTaskHandler = () => {
        props.addTask(props.todolistId, newTaskTitle)
        setNewTaskTitle('')
        setError(false)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setNewTaskTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTask(props.todolistId, newTaskTitle)
            setNewTaskTitle('')
            setError(false)
        }
    }

    const changeFilterOptimusHandler = (filterValue: filterType, todolistId: string) => {
        props.changeFilter(filterValue, todolistId)
    }

    const deleteTaskHandler = (tId: string) => {
        props.deleteTask(props.todolistId, tId)
    }

    const onChangeCheckBoxHandler = (event: ChangeEvent<HTMLInputElement>, newId: string) => {
        // console.log(event.currentTarget.checked)
        props.changeChekBox(props.todolistId, event.currentTarget.checked, newId)
    }

    const deleteWholeListHandler = () => {
        props.deleteWholeList(props.todolistId)
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <button onClick={deleteWholeListHandler}> delete </button>

            <input className={error ? styles.error : ''} value={newTaskTitle} onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>

            <button onClick={addTaskHandler}>+</button>
            {error && <div className={styles.errorMessage}>Title is required</div>}

            <div>
                <ul>
                    {props.tasks.map(m => {
                            return (
                                <li key={m.id}>
                                    <ButtonUniversal filter={props.filter} title={"x"}
                                                     callBack={() => deleteTaskHandler(m.id)}/>
                                    {/*<button onClick={ () => onChangeDeleteTaskHandler(m.id)}>x</button>*/}
                                    <input type="checkbox" onChange={(event) => onChangeCheckBoxHandler(event, m.id)}
                                           checked={m.checked}/>
                                    <span className={m.checked ? styles.isDone : ''}>{m.title}</span>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>

            <ButtonUniversal filter={props.filter} title={'All'}
                             callBack={() => changeFilterOptimusHandler('All', props.todolistId)}/>
            <ButtonUniversal filter={props.filter} title={'Active'}
                             callBack={() => changeFilterOptimusHandler('Active', props.todolistId)}/>
            <ButtonUniversal filter={props.filter} title={'Completed'}
                             callBack={() => changeFilterOptimusHandler('Completed', props.todolistId)}/>

        </div>
    )
}
