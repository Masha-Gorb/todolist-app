import TextField from '@mui/material/TextField/TextField';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './../Todolist/Todolist.module.css'


type PropsType = {
  addItem: (title: string) => void
}

export const AddItemForm = (props: PropsType) => {
  let [title, setTitle] = useState("")
  let [error, setError] = useState<string | null>(null)

  const addTask = () => {
    let newTitle = title.trim();
    if (newTitle !== "") {
      props.addItem(title);
      setTitle("");
    } else {
      setError("Title is required");
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      addTask();
    }
  }
  return (
    <div>
      <TextField id="filled-basic" label=" " variant="filled"
                 defaultValue=" "
                 size="small"
                 value={title}
                 onChange={onChangeHandler}
                 onKeyPress={onKeyPressHandler}
                 className={error ? "error" : ""}
                 sx={{
                   width: 200,
                   paddingTop: 1,
                   borderRadius: 5,
                   marginLeft: 3,
                 }}
      />
      <button className={s.button} onClick={addTask}>+</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  )
}
