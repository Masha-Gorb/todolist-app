import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

type linesPropsType = {
    id: string
    title: string
}

type PropsType = {
    addNewLine: (newLineTitle: string) => void
    lines:Array<linesPropsType>
}

export const NewInput = (props: PropsType) => {

    let [newLineTitle, setNewLineTitle] = useState('')
    const addLineHandler = () => {
        props.addNewLine(newLineTitle)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewLineTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addNewLine(newLineTitle)
            setNewLineTitle('')
        }
    }

    return (
        <div>
            <input value={newLineTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addLineHandler}>Add</button>
            <ul>
                {props.lines.map(l => {
                    return <li key={l.id}>{l.title}</li>
                })}
            </ul>

        </div>
    )
}

