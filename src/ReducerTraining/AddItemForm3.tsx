import React, {useState} from 'react';
export type PropsType = {
    callback: () => void
}

export const AddItemForm3 = (props: PropsType) => {

    let [title, setTitle] = useState('')

    return (
        <div>
            <input value={title} onChange={(e) => {setTitle(e.currentTarget.value)}}/>
            <button onClick={() => props.callback()}>+</button>
        </div>
    )
}