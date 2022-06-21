import React, {useState} from 'react';
type PropsType = {
  title: string
}

export const EditableSpan = (props: PropsType) => {
  const [editMode, setEditMode] = useState(false)
  const onDoubleClickHandler = () => {
    setEditMode(true)
  }
  return editMode
    ? <input value={props.title} autoFocus/>
    : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>

}
