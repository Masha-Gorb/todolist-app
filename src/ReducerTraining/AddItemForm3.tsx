import React from 'react';
export type PropsType = {
    callback: () => void
}

export const AddItemForm3 = (props: PropsType) => {
    return (
        <div>
            <input/>
            <button onClick={() => props.callback()}>+</button>
        </div>
    )
}