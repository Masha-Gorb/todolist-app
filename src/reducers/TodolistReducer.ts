//Редьюсер - чистая функция которая принимает state и action (как преобразовать state или вернуть без изменений)
//Разметки нет
//Сколько state столько редьюсеров
//по дефолту возвращаем стейт без изменений чтобы не рухнула прилка
//action прописываем общий тип, куда входят все типы action creator через вертикальную линию
//типизируем стейт - испортируем старый откуда-то там
//дальше идем в место, где у нас стейт

import {propsType} from "../TodoList";

export const TodolistReducer = (state: Array<propsType>, action: generalType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' : {
            console.log('jjjj')
            return state
        }
        default: return state
    }
}

//автоматическая типизация action creator - не функции, а объекта!
type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
type generalType = RemoveTodolistACType

//создаем action creator
//возвращает не ВЫЗОВ а ОБЪЕКТ
// ACTION CREATOR это функция которая возвращает объект (экшон - это объект)
//type это тот необходимый ключ, без которого редьюсер не имеет смысла
//type обяз прописываем as const чтобы автоматическая типизация не брала его стрингой
export const removeTodolistAC = (todolistID: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        todolistID: todolistID
    } as const
}