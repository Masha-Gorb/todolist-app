import React, {useEffect, useState} from 'react'
import axios from "axios";

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': 'ae6348c7-7f60-4884-bd61-0c5af5bc82ae'
  }
}


export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: "rrrrrrr"}, settings).then( (res) => {
      setState(res.data);
    } )

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '629c15b7-a250-40d7-b1a2-9ab8c7122289';
    axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings).then( (res) => {
      setState(res.data);
    })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
  }, [])

  return <div> {JSON.stringify(state)}</div>
}
