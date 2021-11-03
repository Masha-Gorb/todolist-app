import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import styles from "../App.module.css";

type PropsType = {
    callBack: (todolistId: string, newTaskTitle: string) => void
    todolistId: string
}

export const AddItemForm = (props: PropsType) => {
    let [newTaskTitle, setNewTaskTitle] = useState('')
    let [error, setError] = useState(true)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setNewTaskTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.callBack(props.todolistId, newTaskTitle)
            setNewTaskTitle('')
            setError(false)
        }
    }
    const addTaskHandler = () => {
        props.callBack(props.todolistId, newTaskTitle)
        setNewTaskTitle('')
        setError(false)
    }
    return (
        <div>
            <input className={error ? styles.error : ''}
                   value={newTaskTitle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>

            <button onClick={addTaskHandler}>+</button>
            {error && <div className={styles.errorMessage}>Title is required</div>}
        </div>
    )
}