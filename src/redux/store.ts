import {combineReducers, createStore} from "redux";
import {TodolistReducer} from "./TodolistReducer";
import {TaskReducer} from "./TaskReducer";

//перечисляем все редьюсеры которые у нас есть
let rootReducer = combineReducers( {
    todolist: TodolistReducer,
    tasks: TaskReducer,
    })

//типизируем корневой редьюсер
export type rootReducerType = ReturnType<typeof rootReducer>

//создаем объект стор
//один и тот же экшен можно использовать в разных редьюсерах, не имеет конкретной "прописки"
export  let store = createStore(rootReducer)
