import axios from "axios";
import {FilterValuesType} from "../components/MainPage/MainPage";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ae6348c7-7f60-4884-bd61-0c5af5bc82ae'
  }
})

export const TodolistApiUI = {
  getTodos: () => {
    return instance.get<Array<TodolistApiGetType>>('todo-lists')
  },
  createTodos: () => {
    return instance.post<BasicResponseType<{ item: TodolistApiGetType }>>('todo-lists', {title: "SUPER NEW TODO"})
  },
  deleteTodos: () => {
    const todolistId = "de5a57b1-4765-44bf-9445-f73a1d9b2cb1";
    return instance.delete<BasicResponseType<{}>>(`todo-lists/${todolistId}`)
  },
  updateTodosTitle: (p: UpdateTodolistTitleType) => {
    return instance.put<BasicResponseType<{}>>(`todo-lists/${p.todolistId}`, {title: p.title})
  }
}

export type TodolistApiGetType = {
  id: string,
  title: string,
  addedDate: string,
  order: number,
  filter: FilterValuesType
}

export type BasicResponseType<T> = {
  data: T,
  messages: [],
  fieldsErrors: [],
  resultCode: number
}

export type UpdateTodolistTitleType = {
  todolistId: string,
  title: string
}

export const TodolistTasksApi = {
  getTasks: (todolistId: string) => {
    return instance.get(`todo-lists/${todolistId}/tasks`)
  },
  createTask: (title: string, todolistId: string) => {
    return instance.post(`todo-lists/${todolistId}/tasks`, {title: title})
  },
  deleteTask: (todolistId: string, taskId: string) => {
    return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
  }
}
