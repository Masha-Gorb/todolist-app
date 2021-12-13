import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {filterType, TodolistsType} from "./App";
import {ButtonUniversal} from "./Components/ButtonUniversal";
import styles from './App.module.css'

type tasksPropsType = {
    id: string
    title: string
    checked: boolean
}

export type propsType = {
    //title=!string — значит что тайтл может прийти а может не прийти в компоненту
    todolistId: string
    title: string
    tasks: Array<tasksPropsType>
    deleteTask: (todolistId: string, taskId: string) => void //void потому что в функции нет return
    changeFilter: (filterValue: filterType, todolistId: string) => void
    addTask: (todolistId: string, newTaskTitle: string) => void
    changeChekBox: (todolistId: string, myEvent: boolean, newId: string) => void
    filter: filterType
    removeTodolist: (todolistId: string)=> void
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
            props.addTask(props.todolistId,newTaskTitle)
            setNewTaskTitle('')
            setError(false)
        }
    }

    // const generalChangeFilter = (filterValue: filterType) => {
    //     props.changeFilter(filterValue)
    // }
    // const onClickChangeFilterActive = () => {
    //     props.changeFilter('Active')
    // }
    // const onClickChangeFilterCompleted = () => {
    //     props.changeFilter('Completed')
    // }
    // const changeAllFilterHandler = () => {
    //     props.changeFilter('All')
    // }
    //
    // const changeActiveFilterHandler = () => {
    //     props.changeFilter('Active')
    // }
    //
    // const changeCompletedFilterHandler = () => {
    //     props.changeFilter('Completed')
    // }

    const changeFilterOptimusHandler = (filterValue: filterType,  todolistId: string) => {
        props.changeFilter(filterValue, todolistId)
    }

    const deleteTaskHandler = (tId: string) => {
        props.deleteTask(props.todolistId, tId)
    }

    const onChangeCheckBoxHandler = (event: ChangeEvent<HTMLInputElement>, newId: string) => {
        // console.log(event.currentTarget.checked)
        props.changeChekBox(props.todolistId, event.currentTarget.checked, newId)
    }

    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <button onClick={removeTodolistHandler}>x</button>

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


            <ButtonUniversal filter={props.filter} title={'All'} callBack={() => changeFilterOptimusHandler('All', props.todolistId)}/>
            <ButtonUniversal filter={props.filter} title={'Active'}
                             callBack={() => changeFilterOptimusHandler('Active', props.todolistId)}/>
            <ButtonUniversal filter={props.filter} title={'Completed'}
                             callBack={() => changeFilterOptimusHandler('Completed', props.todolistId)}/>

            {/*<ButtonUniversal title={'All'} callBack={changeAllFilterHandler} />*/}
            {/*<ButtonUniversal title={'Active'} callBack={changeActiveFilterHandler} />*/}
            {/*<ButtonUniversal title={'Completed'} callBack={changeCompletedFilterHandler} />*/}


            {/*<ButtonForChangeFilter title={"All"} changeFilter={props.changeFilter}/>*/}
            {/*<ButtonForChangeFilter title={"Active"} changeFilter={props.changeFilter}/>*/}
            {/*<ButtonForChangeFilter title={"Completed"} changeFilter={props.changeFilter}/>*/}

            {/*<button onClick={()=>generalChangeFilter('Active')}>Active</button>*/}
            {/*<button onClick={()=>generalChangeFilter('Completed')}>Completed</button>*/}
            {/*<Button changeFilter={props.changeFilter}/>*/}


            {/*у компоненты не может быть onClick*/}
            {/*<button onClick={() => props.changeFilter('All')}>All</button>*/}

        </div>
    )
}
