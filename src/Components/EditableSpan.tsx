import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import styles from "../App.module.css";

export type PropsType = {
    checked: boolean
    title: string
    // callBack: (todolistId: string, newTaskTitle: string) => void

}

export const EditableSpan = (props: PropsType) => {
    const[edit, setEdit] = useState(false)
    let [newTaskTitle, setNewTaskTitle] = useState(props.title)

    console.log(newTaskTitle)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }


    const editTrue = () => {
        setEdit(true)
    }

    const editFalse = () => {
        {
            setEdit(false)
        }

    }
    return (
        edit
        ? <input value={newTaskTitle}
                 onClick={editFalse}
                 autoFocus={true}
                 onChange={onChangeHandler}/>

        : <div>
            <span onDoubleClick={editTrue} className={props.checked ? styles.isDone : ''}>{props.title}</span>
        </div>
    )
}
