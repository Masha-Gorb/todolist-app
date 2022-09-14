import axios, {AxiosResponse} from "axios";
import {FilterValuesType} from "../components/MainPage/MainPage";
import {TaskType} from "../components/Todolist/Todolist";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ae6348c7-7f60-4884-bd61-0c5af5bc82ae'
  }
})
export type FieldErrorType = {
  field: string
  error: string
}
export type ResponseType<D = {}> = {
  data: D
  messages: string[]
  fieldsErrors: FieldErrorType[]
  resultCode: number
}

export const TodolistApiUI = {
  getTodos: () => {
    return instance.get<Array<TodolistApiGetType>>('todo-lists')
  },
  createTodos: (title: string) => {
    return instance.post<BasicResponseType<{ item: TodolistApiGetType }>>('todo-lists', {title: title})
  },
  deleteTodos: (todolistId: string) => {
    return instance.delete<BasicResponseType<{}>>(`todo-lists/${todolistId}`)
  },
  updateTodosTitle: (p: UpdateTodolistTitleType) => {
    return instance.put<BasicResponseType<{}>>(`todo-lists/${p.todolistId}`, {title: p.title})
  }
}

export const TodolistTasksApi = {
  getTasks: (todolistId: string) => {
    return instance.get(`todo-lists/${todolistId}/tasks`)
  },
  createTask: (title: string, todolistId: string) => {
    return instance.post(`todo-lists/${todolistId}/tasks`, {title})
  },
  deleteTask: (todolistId: string, taskId: string) => {
    return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
  },
  updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
    return instance.put<any, AxiosResponse<ResponseType<{item: TaskType}>>, UpdateTaskModelType>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
  },
}

export const authApi = {
  login: (data: LoginParamsType) => {
    return instance.post('/auth/login', data)
  }
}

export type LoginParamsType = {
  email: string,
  password: string,
  rememberMe: boolean,
}

export type LoginResponseType = {
  resultCode: number,
  messages: [],
  data: {
    userId: number
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

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4
}
// export enum TaskStatuses {
//   New = 0,
//   InProgress = 1,
//   Completed = 2,
//   Draft = 3
// }
export type TaskTypeRes = {
  id: string
  title: string
  description: string
  todoListId: string
  order: number
  status: boolean
  priority: TaskPriorities
  startDate: string
  deadline: string
  addedDate: string
  isDone?: boolean
}
export type GetTasksResponse = {
  items: TaskTypeRes[]
  totalCount: number
  error: null | string
}
export type UpdateTaskModelType = {
  title: string
  description: string
  status: boolean
  priority: TaskPriorities
  startDate: string
  deadline: string
}

