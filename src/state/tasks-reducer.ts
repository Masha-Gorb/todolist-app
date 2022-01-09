import {FilterValuesType, TasksStateType, TodolistType} from "../App";
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

type ActionType = removeTaskACType | AddTaskACType | changeTaskStatusACtype

export const tasksReducer = (state: TasksStateType, action: ActionType) : TasksStateType => {
    switch(action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.todolistID] : state[action.todolistID].filter(task => task.id !== action.taskID )}
        }
        case 'ADD-TASK' : {
            let task = {id: v1(), title: action.title, isDone: false};
            let todolistTasks = state[action.todolistID];
            state[action.todolistID] = [task, ...todolistTasks]
            return {task:state[action.todolistID], ...state}
        }
        case 'CHANGE-TASK-STATUS' : {
            // //достанем нужный массив по todolistId:
            // let todolistTasks = tasks[todolistId];
            // // найдём нужную таску:
            // let task = todolistTasks.find(t => t.id === id);
            // //изменим таску, если она нашлась
            // if (task) {
            //     task.isDone = isDone;
            //     // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            //     setTasks({...tasks});
            let todoListsTasks = state[action.todolistID];
            let task = todoListsTasks.find(t => t.id === action.id)
            if (task) {
                task.isDone = action.isDone
            }
            return {task:state[action.todolistID], ...state}
        }
        default: return state
    }
}

type removeTaskACType = ReturnType<typeof removeTaskAC>
type AddTaskACType = ReturnType<typeof addTaskAC>
type changeTaskStatusACtype = ReturnType<typeof changeTaskStatusAC>
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