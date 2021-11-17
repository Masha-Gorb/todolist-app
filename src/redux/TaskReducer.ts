import {tasksPropsType} from "../TodoList";
import {v1} from "uuid";
import {todolistID1, todolistID2} from "./TodolistReducer";

let initialState: Array<tasksPropsType> = [

]
export const TaskReducer = (state = initialState, action: GeneralTaskReducerType) => { //прописать типы
    switch (action.type) {
        case 'DELETE-TASK' : {
            //сюда вставить "тело" функции
            // setTasks({...tasks, [todolistId]: tasks[todolistId].filter(f=>f.id!==taskId)})
            return state
        }
    }
}

type GeneralTaskReducerType = DeleteTaskACType
type DeleteTaskACType = ReturnType<typeof DeleteTaskAC>

export const DeleteTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'DELETE-TASK',

    } as const
}