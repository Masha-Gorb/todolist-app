import React from 'react'
import {filterType} from "../App";

type PropsType = {
    title: filterType
    changeFilter: (filterValue: filterType) => void
}

export const ButtonForChangeFilter = (props: PropsType) => {

    const changeFilterHandler = () => {
        props.changeFilter(props.title)
    }

    return (
        <div>
            <button onClick={changeFilterHandler}>{props.title}</button>
        </div>
    )
}