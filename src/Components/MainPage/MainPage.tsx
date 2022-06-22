import React, {useReducer} from 'react';
import './MainPage.css';
import {TaskType, Todolist} from '../Todolist/Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "../SmallComponents/AddItemForm";
import {addTodolistAC, changeTodolistFilterAC, removeTodolistAC, todolistsReducer} from "../../BLL/todolist-reducer";
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer} from "../../BLL/task-reducer";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function MainPage() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, dispatchToTodolist] = useReducer(todolistsReducer, [
        {id: todolistId1, title: "TODAY", filter: "all"},
        {id: todolistId2, title: "TOMORROW", filter: "all"}
    ])

    let [tasks, dispatchToTasks] = useReducer(tasksReducer, {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });


    function addTodolist(title: string) {
        const action = addTodolistAC(title)
        dispatchToTodolist(action)
        dispatchToTasks(action)
    }

    function removeTask(id: string, todolistId: string) {
        const action = removeTaskAC(id, todolistId)
        dispatchToTasks(action)
    }

    function addTask(title: string, todolistId: string) {
        const action = addTaskAC(title, todolistId)
        dispatchToTasks(action)
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        const action = changeTaskStatusAC(id, isDone, todolistId)
        dispatchToTasks(action)
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value)
        dispatchToTodolist(action)
    }

    function removeTodolist(id: string) {
        const action = removeTodolistAC(id)
        dispatchToTodolist(action)
        dispatchToTasks(action)
    }

    return (
        <div className="App">

            <AddItemForm addItem={addTodolist}/>

            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
                    }

                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                    />
                })
            }

        </div>
    );
}

export default MainPage;
