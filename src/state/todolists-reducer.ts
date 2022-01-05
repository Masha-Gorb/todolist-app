import {TodolistType} from "../App";
//создаем функцию тудулист редьюсер - принимает стейт и экшон. типы пока пишем any
//хардкодим кейс и дефолтный ретурн
//перекидываем функционал кек функции removeTodolist
//разводим колхоз - пишем экшон
//пишем экшон криэйтор. он возвращает объект с обяз св-вом type
//св-во type - это стринга которая ключ котоая в редьюсере кейс
//после св-ва обяз as const - чтобы в типе была не абы какая строка а именно эта
//экшон приэйтер принимает то, что принимала функция, которая в кейс свой функционал отдала
//помимо тайп, надо указать то, что туда приходит - дать ключ к значению
//подставляем type экшона в кейс
//типизируем экшон, но пишем дескать римувТудулистАК - но помним что типизируем объект
//типизируем автоматической типизацией и полученный тип бац в ActionType
//правим функционал в кейсе
//стейт теперь = массив с данными
//экшон и его свойства как то что приходит извне
//как в экшон криэйтор попадает айдишка - загадка

type ActionType = removeTodolistACType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch(action.type) {
        case 'REMOVE-TODOLIST': {
            // setTodolists(todolists.filter(tl => tl.id != id));
            return state.filter(f => f.id !== action.id)
        }
        default: return state
    }
}

type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        id: id
    } as const
}