import {TasksPropsType} from "../App3";
import {v1} from "uuid";

//Редьюсер - функция которая принимает всегда стейт и экшон
//Внутри свич кейсы
//Action - объект, минимум у котороего есть свойство type
//сколько функций работает со стейтом - столько case будет - в конце default, который отображает просто state
//определяем редьюсер - пишем экшон приейтор - идем в App.tsx
export const TaskReducer = (state: Array<TasksPropsType>, action: GeneralType) => {
    switch(action.type) {
        case "REMOVE-TASK": {
           const newState = [...state]
            return newState.filter(f => f.id !== action.id)
        }
        case "ADD-TASK" : {
            return ([{id: v1(), title: action.title, isDone: false}, ...state])
        }
        default : return state
    }
}
//Экшон криейтор - возвращает не вызов(как компонента), а объект (после ретурна квадратные скобки)
//делаем автоматическую типизацию - типизирует не ФУНКЦИЮ а объект
//в каждом экшонкриейтере ВСЕГДА ПИСАТЬ as const (чтобы не строка, а КОНКРЕТНАЯ строка)
//потом создаем общий тип, куда через | добавлять разные типы
type removeTaskACType = ReturnType<typeof removeTaskAC>
type addTaskACType = ReturnType<typeof addTaskAC>
type GeneralType = removeTaskACType | addTaskACType
export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        id: id
    } as const
}

export const addTaskAC = (title: string) => {
    return {
        type: "ADD-TASK",
        title: title
    } as const
}