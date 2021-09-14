import React from 'react'
import {filterType} from "../App";


//! ! ! НЕЗАВИСИМЫЕ ПРАВИЛЬНЫЕ КНОПКИ ! ! !
//в кнопке не должно быть лишней инфы, в ней должно быть только то, что может пригодится абсолютно любой кнопке
//у любой кнопки будет тайтл и функция - callback

type PropsType = {
    title: string
    callBack: () => void
}

export const ButtonUniversal = (props: PropsType) => {

    const callBackHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={callBackHandler}>{props.title}</button>
        </div>
    )
}