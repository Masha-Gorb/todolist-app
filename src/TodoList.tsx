import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {filterType} from "./App";
import {Button} from "./Components/Button";
import {ButtonUniversal} from "./Components/ButtonUniversal";
import styles from './App.module.css'

type tasksPropsType = {
    id: string
    title: string
    checked: boolean
}

type propsType = {
    //title=!string — значит что тайтл может прийти а может не прийти в компоненту
    title: string
    tasks: Array<tasksPropsType>
    deleteTask: (taskId: string) => void //void потому что в функции нет return
    changeFilter: (filterValue: filterType) => void
    addTask: (newTaskTitle: string) => void
    changeChekBox: (myEvent: boolean, newId: string) => void
    filter: filterType
}

export const TodoList = (props: propsType) => {

    let [newTaskTitle, setNewTaskTitle] = useState('')
    let [error, setError] = useState(true)

    const addTaskHandler = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
        setError(false)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setNewTaskTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTask(newTaskTitle)
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

    const changeFilterOptimusHandler = (filterValue: filterType) => {
        props.changeFilter(filterValue)
    }

    const deleteTaskHandler = (tId: string) => {
        props.deleteTask(tId)
    }

    const onChangeCheckBoxHandler = (event: ChangeEvent<HTMLInputElement>, newId: string) => {
        // console.log(event.currentTarget.checked)
        props.changeChekBox(event.currentTarget.checked, newId)
    }
    return (
        <div>
            <h2>{props.title}</h2>

            <input className={error ? styles.error : ''} value={newTaskTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>


            <button onClick={addTaskHandler}>+</button>
            {error && <div className={styles.errorMessage}>Title is required</div>}
            {/*не забывать вызывать функцию кога тут пишем*/}

            <div>
                <ul>
                    {props.tasks.map(m => {

                            return (
                                <li key={m.id}>
                                    <ButtonUniversal filter={props.filter} title={"x"} callBack={() => deleteTaskHandler(m.id)}/>
                                    {/*<button onClick={ () => onChangeDeleteTaskHandler(m.id)}>x</button>*/}
                                    <input type="checkbox" onChange={(event) => onChangeCheckBoxHandler(event, m.id)} checked={m.checked}/>
                                    <span>{m.title}</span>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>


            <ButtonUniversal filter={props.filter} title={'All'} callBack={() => changeFilterOptimusHandler('All')}/>
            <ButtonUniversal filter={props.filter}  title={'Active'} callBack={() => changeFilterOptimusHandler('Active')}/>
            <ButtonUniversal filter={props.filter} title={'Completed'} callBack={() => changeFilterOptimusHandler('Completed')}/>

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
