import React, {useState} from 'react'
import {Todolist2} from "./Todolist2";
import {v1} from "uuid";

export type Todolist2Type = {
    _id: string
    title: string
}

export type Task2Type = {
    taskID: string
    taskTitle: string
    isDone: boolean
}

export const App2 = () => {

    let todolist2ID1 = v1()
    let todolist2ID2 = v1()

    let [todolists2, setTodolists2] = useState([
        {_id: todolist2ID1, title: 'What to learn'},
        {_id: todolist2ID2, title: 'What to buy'},
    ]);

    let [tasks2, setTasks2] = useState({
    [todolist2ID1] : [
        {taskID: v1(), taskTitle: 'html', isDone: true},
        {taskID: v1(), taskTitle: 'css', isDone: false},
        {taskID: v1(), taskTitle: 'js', isDone: false},
    ],
        [todolist2ID2] : [
        {taskID: v1(), taskTitle: 'milk', isDone: true},
        {taskID: v1(), taskTitle: 'bread', isDone: false},
        {taskID: v1(), taskTitle: 'eggs', isDone: false},
    ]
    });

    const removeTodolist2 = (_id:string) => {
        setTodolists2(todolists2.filter(f=> f._id !== _id))
    }
    const addTodolist2 = () => {
        console.log('hey')
    }

    const removeTask = (_id: string, taskID: string) => {
        console.log('here will be remove task')
        let todolistTasks = tasks2[_id]
        tasks2[_id] = todolistTasks.filter(f => f.taskID !== taskID)
        setTasks2({...tasks2})

    }


    return (
        <div>
            {todolists2.map(m => {
                let tasksForTodolist2 = tasks2[m._id]
                return <Todolist2
                key={m._id}
                _id={m._id}
                title={m.title}
                tasks={tasksForTodolist2}
                removeTodolist={removeTodolist2}
                addTodolist={addTodolist2}
                removeTask={removeTask}
                />

            })}
        </div>
    )
}