import {tasksPropsType} from "../TodoList";

export const TaskReducer = (state: Array<tasksPropsType>, action: GeneralTaskReducerType) => { //прописать типы
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