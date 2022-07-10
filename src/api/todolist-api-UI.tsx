import React, {useEffect, useState} from 'react'
import {TodolistApiUI, TodolistTasksApi} from "./todolist-api-";


export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TodolistApiUI.getTodos()
      .then((res) => {
        setState(res.data);
      })
  }, [])
  return <div> {JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TodolistApiUI.createTodos().then( (res) => {
      setState(res.data.data);
    })
  }, [])
  return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TodolistApiUI.deleteTodos().then( (res) => {
      setState(res.data);
    })
  }, [])
  return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId =  "089a1391-3854-45b8-b092-184ee43f5282";
    const title = 'ULTRA NEW TITLE'
    const payload = {
      title,
      todolistId
    }
    TodolistApiUI.updateTodosTitle(payload).then( (res) => {
      setState(res.data);
    })
  }, [])
  return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TodolistTasksApi.getTasks()
      .then((res) => {
        setState(res.data);
      })
  }, [])
  return <div> {JSON.stringify(state)}</div>
}

export const PostTasks = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TodolistTasksApi.createTask()
      .then((res) => {
        setState(res.data);
      })
  }, [])
  return <div> {JSON.stringify(state)}</div>
}
