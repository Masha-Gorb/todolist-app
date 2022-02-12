import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', {
            withCredentials: true
        })
            .then((res) => {
                setState(res.data);
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const settings = {
            withCredentials: true,
            headers: {
                'API-KEY': 'ae6348c7-7f60-4884-bd61-0c5af5bc82ae'
            }
        }
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: "newTodolist"}, settings).then( (res) => {
            setState(res.data);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const settings = {
            withCredentials: true,
            headers: {
                'API-KEY': 'ae6348c7-7f60-4884-bd61-0c5af5bc82ae'
            }
        }
        const todolistId = '';
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings).then( (res) => {
            setState(res.data);
        })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const settings = {
            withCredentials: true,
            headers: {
                'API-KEY': 'ae6348c7-7f60-4884-bd61-0c5af5bc82ae'
            }
        }
        const todolistId = '2ca46aee-f689-4c22-9d09-1c6e71b788a6'
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'REACT>>>>>>>>>'}, settings)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
