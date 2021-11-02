import React from 'react'

export const AddItemForm = () => {
    return (
        <div>
            <input type="checkbox" onChange={(event) => onChangeCheckBoxHandler(event, m.id)}
                   checked={m.checked}/>
        </div>
    )
}