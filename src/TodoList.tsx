import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {filterType} from "./App";
import {Button} from "./Components/Button";
import {ButtonUniversal} from "./Components/ButtonUniversal";

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
}

export const TodoList = (props: propsType) => {

    let [newTaskTitle, setNewTaskTitle] = useState('')
    const addTaskHandler = () => {
        props.addTask(newTaskTitle)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
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

    const onChangeDeleteTaskHandler = (id: string) => {
        props.deleteTask(id)
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <input value={newTaskTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>

            <button onClick={addTaskHandler}>+</button>
            {/*не забывать вызывать функцию кога тут пишем*/}

            <div>
                <ul>
                    {props.tasks.map(m => {

                        const deleteTaskHandler = () => {
                            props.deleteTask(m.id)
                        }
                            return (
                                <li key={m.id}>
                                    <ButtonUniversal title={"x"} callBack={deleteTaskHandler}/>
                                    {/*<button onClick={ () => onChangeDeleteTaskHandler(m.id)}>x</button>*/}
                                    <input type="checkbox" checked={m.checked}/>
                                    <span>{m.title}</span>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>




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
