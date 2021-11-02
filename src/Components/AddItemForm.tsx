import React from 'react'
import styles from "../App.module.css";

export const AddItemForm = () => {
    return (
        <div>
            <input className={error ? styles.error : ''} value={newTaskTitle} onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
        </div>
    )
}