import React from 'react'
import styles from "../App.module.css";

export type PropsType = {
    checked: boolean
    title: string
}

export const EditableSpan = (props: PropsType) => {
    return (
        <div>
            <span className={props.checked ? styles.isDone : ''}>{props.title}</span>
        </div>
    )
}
