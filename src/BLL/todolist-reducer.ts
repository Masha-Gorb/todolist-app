import {FilterValuesType, TodolistType} from "../components/MainPage/MainPage";
import {v1} from "uuid";

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

export type TodolistActionType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistFilterType;

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописаному type в этом action (инструкции) я поменяю state
export const todolistsReducer = (state: Array<TodolistType>, action: TodolistActionType): Array<TodolistType> => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      return state.filter(tl => tl.id !== action.id);
    }
    case 'ADD-TODOLIST': {
      let newTodolist: TodolistType = {id: action.todolistId, title: action.title, filter: 'all'}
      return [...state, newTodolist];
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
  return { type: 'REMOVE-TODOLIST', id: todolistId}
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
    type:'CHANGE-TODOLIST-FILTER',
    id,
    filter
  } as const
}
