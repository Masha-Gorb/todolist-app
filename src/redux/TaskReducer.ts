import {tasksPropsType} from "../TodoList";
import {TodolistsType} from "../App";

export const TodolistReducer = (state: Array<TodolistsType>, action: generalType) => {

    switch (action.type) {
        case 'ADD-TODOLIST' : {
            console.log('dzink!')
            return state
        }
        default: return state
    }
}
//общий тип для экшон криэйтора
type generalType = AddTodolistACType
//автоматическая типизация не функции а объекта внутри нее
type AddTodolistACType = ReturnType<typeof AddTodolistAC>

//создаем экшон обязательно пишет тип эз конст чтобы тайп был не стринга, а КОНКРЕТНО что написано
export const AddTodolistAC = (todolistId: string, newTodoListTitle: string) => {
    return {
        type: 'ADD-TODOLIST'
    } as const
}