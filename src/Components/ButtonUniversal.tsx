import React from 'react'
import {filterType} from "../App";


//! ! ! НЕЗАВИСИМЫЕ ПРАВИЛЬНЫЕ КНОПКИ ! ! !
//в кнопке не должно быть лишней инфы, в ней должно быть только то, что может пригодится абсолютно любой кнопке
//у любой кнопки будет тайтл и функция - callback
// логика коллбек ф-ции находится над return компоненты, где мы вызываем компоненту
//еще более логичная логика ф-ции, которую прокидываем - назодится еще выше ))
//App.tsx - логика функции
//Todolist.tsx - вызываем ф-цию через пропсы над return - под return - компонента кнопки
//ну и дальше замуты с хендлерами)

//такое же делаем для кнопок фильтрации
//три ф-ции решают одну задачу - западло - оптимизируем -
//

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