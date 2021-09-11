import React from 'react'
import {filterType} from "../App";

type PropsType = {
    changeFilter: (filterValue: filterType) => void
}


export const Button = (props:PropsType) => {
    return (
        <div>
            <button onClick={() => props.changeFilter('All')}>All</button>
        </div>
    )
}