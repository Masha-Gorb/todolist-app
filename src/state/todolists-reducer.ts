import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";
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

type ActionType = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeTodolistFilterACType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch(action.type) {
        case 'REMOVE-TODOLIST': {
            // setTodolists(todolists.filter(tl => tl.id != id));
            return state.filter(f => f.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            let newTodolistId = v1();
            // let newTodolist: TodolistType = {id: newTodolistId, title: title, filter: 'all'};
            // setTodolists([newTodolist, ...todolists]);
            // setTasks({
            //     ...tasks,
            //     [newTodolistId]: []
            // })
            return [... state, {id: action.todolistID, title: action.title, filter: "all"}]
        }
        case 'CHANGE-TODOLIST-TITLE' : {
            return state.map(m => m.id === action.id ? {...m, title: action.title} : m)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(m => m.id === action.id ? {...m, filter: action.filter} : m)
        }
        default: return state
    }
}

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export type addTodolistACType = ReturnType<typeof addTodolistAC>
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        id: id
    } as const
}

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        todolistID: v1(),
        title: title
    } as const
}

export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id: id,
        title: title
    } as const
}

export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        id: id,
        filter: filter
    } as const
}