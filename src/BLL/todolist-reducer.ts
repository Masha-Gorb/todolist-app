import {FilterValuesType, TodolistType} from "../components/MainPage/MainPage";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {TodolistApiUI} from "../api/todolist-api-";
import {setMainErrorAC, setMainStatusAC} from "./main-reducer";

export type RemoveTodolistActionType = {
  type: 'REMOVE-TODOLIST'
  id: string
}
export type AddTodolistActionType = {
  type: 'ADD-TODOLIST'
  title: string
  todolistId: string
}
export type ChangeTodolistFilterType = {
  type: 'CHANGE-TODOLIST-FILTER'
  id: string
  filter: FilterValuesType
}
export type SetTodolistsActionType = {
  type: 'SET-TODOLISTS'
  todolists: Array<TodolistType>
}
export type setTodolistsACType = ReturnType<typeof setTodolistsAC>

const initialState: Array<TodolistDomainType> = []
export type TodolistDomainType = TodolistType & {
  filter: FilterValuesType
}

export type TodolistActionType = RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistFilterType
  | setTodolistsACType;

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: TodolistActionType): Array<TodolistDomainType> => {
  switch (action.type) {
    case 'SET-TODOLISTS': {
      return action.todolists.map(tl => ({
        ...tl,
        filter: 'all'
      }))
    }

    case 'REMOVE-TODOLIST': {
      return state.filter(tl => tl.id !== action.id);
    }
    case 'ADD-TODOLIST': {
      let newTodolist: TodolistType = {id: action.todolistId, title: action.title, filter: 'all'}
      return [newTodolist, ...state];
    }
    case 'CHANGE-TODOLIST-FILTER': {
      let todolist = state.find(tl => tl.id === action.id);
      if (todolist) {
        todolist.filter = action.filter;
        return ([...state])
      }
    }
      return [...state]
    default:
      return state
  }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
  return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const addTodolistAC = (title: string): AddTodolistActionType => {
  return {
    type: "ADD-TODOLIST",
    title: title,
    todolistId: v1()
  } as const
}

export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    id,
    filter
  } as const
}

export const setTodolistsAC = (todolists: TodolistDomainType[]) => {
  return {
    type: 'SET-TODOLISTS',
    todolists
  } as const
}

export const fetchTodolistsTC = () => {
  return (dispatch: Dispatch) => {
    dispatch(setMainStatusAC('loading'))
    TodolistApiUI.getTodos()
      .then((res) => {
        let todos = res.data
        dispatch(setTodolistsAC(todos))
        dispatch(setMainStatusAC('succeeded'))
      })
  }
}

export const addTodolistTC = (title: string) => (dispatch: Dispatch) => {
  dispatch(setMainStatusAC('loading'))
  return TodolistApiUI.createTodos(title)
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(addTodolistAC(title))
        dispatch(setMainErrorAC(null))
        dispatch(setMainStatusAC('succeeded'))
      } else {
        // @ts-ignore
        dispatch(setMainErrorAC(res.data.messages[0]))
        dispatch(setMainStatusAC('failed'))
      }


    })
}

export const removeTodolistTC = (todolistId: string) => (dispatch: Dispatch) => {
  dispatch(setMainStatusAC('loading'))
  return TodolistApiUI.deleteTodos(todolistId)
    .then(res => {
    dispatch(removeTodolistAC(todolistId))
      dispatch(setMainStatusAC('succeeded'))

    })
}