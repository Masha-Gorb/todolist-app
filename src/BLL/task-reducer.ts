import {TasksStateType} from "../components/MainPage/MainPage";
import {AddTodolistActionType, RemoveTodolistActionType, setTodolistsACType} from "./todolist-reducer";
import {Dispatch} from "redux";
import {TaskTypeRes, TodolistTasksApi} from "../api/todolist-api-";
import {TaskType} from "../components/Todolist/Todolist";
import {MainPageRootStateType} from "./store";
import {setMainStatusAC} from "./main-reducer";

export type removeTaskActionType = {
  type: 'REMOVE-TASK'
  id: string
  todolistId: string
}
export type addTaskActionType = {
  type: 'ADD-TASK'
  task: TaskTypeRes
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
      const stateCopy = {...state}
      const tasks = stateCopy[action.task.todoListId];
      stateCopy[action.task.todoListId] = [action.task, ...tasks];
      return stateCopy;
    }

    case 'CHANGE-TASK-STATUS': {
      let todolistTasks = state[action.todolistId];
      let task = todolistTasks.find(t => t.id === action.id);
      if (task) {
        task.isDone = action.isDone;
        return {...state}
      }
      return {...state}
    }
    case 'ADD-TODOLIST' : {
      return {...state, [action.todolistId]: []}
    }
    case 'REMOVE-TODOLIST' : {
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

export const addTaskAC = (task: TaskTypeRes) => {
  return {
    type: 'ADD-TASK',
    task
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

export const fetchTasksAC = (tasks: Array<TaskType>, todolistId: string) => {
  return {
    type: 'SET-TASKS',
    todolistId,
    tasks
  } as const
}

export const fetchTasksTC = (todolistId: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setMainStatusAC('loading'))
    TodolistTasksApi.getTasks(todolistId)
      .then((res) => {
        const tasks = res.data.items
        const action = fetchTasksAC(tasks, todolistId)
        dispatch(action)
        dispatch(setMainStatusAC('succeeded'))

      })
  }
}

export const removeTaskTC = (id: string, todolistId: string) => (dispatch: Dispatch) => {
  dispatch(setMainStatusAC('loading'))
  return TodolistTasksApi.deleteTask(todolistId, id)
    .then(res => {
      dispatch(removeTaskAC(id, todolistId))
      dispatch(setMainStatusAC('succeeded'))

    })
}

export const addTaskTC = (title: string, todolistId: string) => (dispatch: Dispatch) => {
  dispatch(setMainStatusAC('loading'))
  return TodolistTasksApi.createTask(title, todolistId)
    .then((res) => {
      dispatch(addTaskAC(res.data.data.item))
      dispatch(setMainStatusAC('succeeded'))

    })
}
export const changeTaskStatusTC = (todolistId: string, taskId: string, isDone: boolean) =>
  (dispatch: Dispatch, getState: () => MainPageRootStateType) => {
    dispatch(setMainStatusAC('loading'))
    const allTasksFromState = getState().tasks;
    const tasksForCurrentTodolist = allTasksFromState[todolistId]
    const task = tasksForCurrentTodolist.find(t => {
      return t.id === taskId
    })

    if (task) {
      TodolistTasksApi.updateTask(todolistId, taskId, {
        title: task.title,
        startDate: task.startDate,
        priority: task.priority,
        description: task.description,
        deadline: task.deadline,
        status: isDone
      })
        .then(() => {
          dispatch(changeTaskStatusAC(taskId, isDone, todolistId))
          dispatch(setMainStatusAC('succeeded'))

        })
    }
  }
