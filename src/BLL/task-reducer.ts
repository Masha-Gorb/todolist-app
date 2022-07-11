import {TasksStateType} from "../components/MainPage/MainPage";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType, setTodolistsACType} from "./todolist-reducer";
import {Dispatch} from "redux";
import {TodolistTasksApi} from "../api/todolist-api-";
import {TaskType} from "../components/Todolist/Todolist";

export type removeTaskActionType = {
  type: 'REMOVE-TASK'
  id: string
  todolistId: string
}
export type addTaskActionType = {
  type: 'ADD-TASK'
  title: string
  todolistId: string
}
export type changeTaskStatusActionType = {
  type: 'CHANGE-TASK-STATUS',
  id: string,
  isDone: boolean,
  todolistId: string
}
export type setTasksThunkType = {
  type: 'SET-TASKS',
  tasks: Array<TaskType>,
  todolistId: string
}
const initialState: TasksStateType = {}
export type TaskActionType = removeTaskActionType
  | addTaskActionType
  | changeTaskStatusActionType
  | AddTodolistActionType
  | RemoveTodolistActionType
  | setTodolistsACType
  | setTasksThunkType
//state = {[]:[]}
export const tasksReducer = (state: TasksStateType = initialState, action: TaskActionType) => {
  switch (action.type) {
    case "SET-TASKS": {
      const stateCopy = {...state}
      stateCopy[action.todolistId] = action.tasks
      return stateCopy
    }

    case "SET-TODOLISTS": {
      const stateCopy = {...state}
      action.todolists.forEach((tl) => {
        stateCopy[tl.id] = []
      })
      return stateCopy;
    }

    case 'REMOVE-TASK' : {
      let newState = state[action.todolistId];
      state[action.todolistId] = newState.filter(t => t.id !== action.id);
      return {...state}
    }
    case 'ADD-TASK': {
      let task = {id: v1(), title: action.title, isDone: false};
      let todolistTasks = state[action.todolistId];
      state[action.todolistId] = [task, ...todolistTasks];
      return {...state}
    }
    case 'CHANGE-TASK-STATUS': {
      let todolistTasks = state[action.todolistId];
              let task = todolistTasks.find(t => t.id === action.id);
              if (task) {
                  task.isDone = action.isDone;
                  return {...state}}
      return {...state}
    }
    case 'ADD-TODOLIST' : {
      return {...state, [action.todolistId]:[]}
    }
    case 'REMOVE-TODOLIST' :{
      let newState = {...state};
      delete newState[action.id]
      return newState
    }
    default:
      return state
  }
}

export const removeTaskAC = (id: string, todolistId: string) => {
  return {
    type: 'REMOVE-TASK',
    id,
    todolistId
  } as const
}

export const addTaskAC = (title: string, todolistId: string) => {
  return {
    type: 'ADD-TASK',
    title,
    todolistId
  } as const
}

export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
  return {
    type: 'CHANGE-TASK-STATUS',
    id,
    isDone,
    todolistId
  } as const
}

export const fetchTasksAC = ( tasks: Array<TaskType>, todolistId: string) => {
  return {
    type: 'SET-TASKS',
    todolistId,
    tasks
  } as const
}

export const fetchTasksTC = (todolistId: string) => {
  return (dispatch: Dispatch) => {
    TodolistTasksApi.getTasks(todolistId)
      .then((res) => {
        const tasks = res.data.items
        const action = fetchTasksAC(tasks, todolistId)
        dispatch(action)
      })
  }
}

export const removeTaskTC = (id: string, todolistId: string) => (dispatch: Dispatch) => {
  return TodolistTasksApi.deleteTask(todolistId, id)
    .then(() => {
      const action = removeTaskAC(id, todolistId)
      dispatch(action)
    })
}

export const addTaskTC = (title: string, todolistId: string) => (dispatch: Dispatch) => {
  return TodolistTasksApi.createTask(title, todolistId)
    .then(() => {
    const action = addTaskAC(title, todolistId)
      dispatch(action)
  })
}

