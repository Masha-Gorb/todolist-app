import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {addTodolistACType, removeTodolistACType} from "./todolists-reducer";
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
//

type ActionType = removeTaskACType
    | AddTaskACType
    | changeTaskStatusACType
    | changeTaskTitleACType
    | addTodolistACType
    | removeTodolistACType

export const tasksReducer = (state: TasksStateType, action: ActionType) : TasksStateType => {
    switch(action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.todolistID] : state[action.todolistID].filter(task => task.id !== action.taskID )}
        }
        //рубрика рефактор: переписать в кейсах после ретурна на map + тернарник
        case 'ADD-TASK' : {
            let task = {id: v1(), title: action.title, isDone: false};
            let todolistTasks = state[action.todolistID];
            state[action.todolistID] = [task, ...todolistTasks]
            return {task:state[action.todolistID], ...state}
        }
        case 'CHANGE-TASK-STATUS' : {
            let todoListsTasks = state[action.todolistID];
            let task = todoListsTasks.find(t => t.id === action.id)
            if (task) {
                task.isDone = action.isDone
            }
            return {task:state[action.todolistID], ...state}
        }
        case 'CHANGE-TASK-TITLE' : {
            let todoListsTasks = state[action.todolistID];
            let task = todoListsTasks.find(t => t.id === action.id)
            if (task) {
                task.title = action.newTitle;
            }
            return {task:state[action.todolistID], ...state}
        }
        case 'ADD-TODOLIST' : {
            return {
                ...state,
            [action.todolistID]:[] }
        }
        case 'REMOVE-TODOLIST' : {
            let newState = {...state};
            delete newState[action.id]
            return newState
        }
        default: return state
    }
}

type removeTaskACType = ReturnType<typeof removeTaskAC>
type AddTaskACType = ReturnType<typeof addTaskAC>
type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>

export const removeTaskAC = (taskID: string, todolistID: string) => {
    return {
        type: 'REMOVE-TASK',
        taskID,
        todolistID
    } as const
}
export const addTaskAC = (title: string, todolistID: string) => {
    return {
        type: 'ADD-TASK',
        title,
        todolistID
    } as const
}
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistID: string) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        id,
        isDone,
        todolistID
    } as const
}
export const changeTaskTitleAC = (id: string, newTitle: string, todolistID: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        id,
        newTitle,
        todolistID
    } as const
}

