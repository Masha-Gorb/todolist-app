import {TasksPropsType} from "../App3";

//Редьюсер - функция которая принимает всегда стейт и экшон
//Внутри свич кейсы
//Action - объект, минимум у котороего есть свойство type
//сколько функций работает со стейтом - столько case будет - в конце default, который отображает просто state
//определяем редьюсер - пишем экшон приейтор - идем в App.tsx
export const TaskReducer = (state: Array<TasksPropsType>, action: GeneralType) => {
    switch(action.type) {
        case "REMOVE-TASK": {
            console.log('dispatch call')
            //let filtredTask = tasks.filter(f => f.id !== id)
           const newState = [...state]
            return newState.filter(f => f.id !== action.id)
        }
        default : return state
    }
}
//Экшон криейтор - возвращает не вызов(как компонента), а объект (после ретурна квадратные скобки)
//делаем автоматическую типизацию - типизирует не ФУНКЦИЮ а объект
//в каждом экшонкриейтере ВСЕГДА ПИСАТЬ as const (чтобы не строка, а КОНКРЕТНАЯ строка)
//потом создаем общий тип, куда через | добавлять разные типы
type removeTaskACType = ReturnType<typeof removeTaskAC>
type GeneralType = removeTaskACType
export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        id: id
    } as const
}