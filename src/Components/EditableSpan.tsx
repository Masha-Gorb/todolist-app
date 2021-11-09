import React, {useState} from 'react'
import styles from "../App.module.css";

export type PropsType = {
    checked: boolean
    title: string
}

export const EditableSpan = (props: PropsType) => {
    const[edit, setEdit] = useState(false)
    const editTrue = () => {
        setEdit(true)
    }
    return (
        edit
        ? <input value={props.title}/>
        : <div>
            <span onDoubleClick={editTrue} className={props.checked ? styles.isDone : ''}>{props.title}</span>
        </div>
    )
}
