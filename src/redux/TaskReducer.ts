import {tasksPropsType} from "../TodoList";
import {v1} from "uuid";
import {todolistID1, todolistID2} from "./TodolistReducer";

let initialState: Array<tasksPropsType> = {
    [todolistID1]:[
        {id: v1(), title: "react", checked: false},
        {id: v1(), title: "angular", checked: true},
        {id: v1(), title: "vue", checked: false},
    ],

    [todolistID2]:[
        {id: v1(), title: "Bread", checked: false},
        {id: v1(), title: "Milk", checked: true},
        {id: v1(), title: "Oil", checked: false}
    ]
}
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
        todolistId,
        taskId,
    } as const
}