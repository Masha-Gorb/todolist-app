import React, {KeyboardEvent, ChangeEvent, useState} from 'react'
import {Icon, IconButton} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm = (props:  AddItemFormPropsType) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter")
            addItem()
    }
    const addItem = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle){
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    const errorMessage = error
        ? <div className={"error-text"}>Title is required!</div>
        : null
    return(
        <div >
            <input
                value={title}
                onChange={onTitleChangeHandler}
                onKeyPress={onKeyHandler}
                className={error ? "error" : ""}
            />

            <IconButton onClick={addItem}>
                <AddBox/>
                </IconButton>
            {/*<button onClick={addItem}>+</button>*/}
            {errorMessage}
        </div>
    )
}

export default AddItemForm;