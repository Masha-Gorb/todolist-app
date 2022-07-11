import React, { useEffect} from 'react';
import './MainPage.css';
import {TaskType, Todolist} from '../Todolist/Todolist';
import {AddItemForm} from "../SmallComponents/AddItemForm";
import {
    addTodolistAC,
    changeTodolistFilterAC, fetchTodolistsTC,
    removeTodolistAC,
} from "../../BLL/todolist-reducer";
import { addTaskTC, changeTaskStatusAC, removeTaskTC} from "../../BLL/task-reducer";
import {useDispatch, useSelector} from "react-redux";
import {MainPageRootStateType} from "../../BLL/store";

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

    const todolists = useSelector<MainPageRootStateType, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<MainPageRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodolistsTC())
    }, [dispatch])

    function addTodolist(title: string) {
        const action = addTodolistAC(title)
        dispatch(action)
    }

    function removeTask (id: string, todolistId: string) {
        const thunk = removeTaskTC(id, todolistId)
        dispatch(thunk)
    }

    function addTask(title: string, todolistId: string) {
        const thunk = addTaskTC(title, todolistId)
        dispatch(thunk)
    }


    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        const action = changeTaskStatusAC(id, isDone, todolistId)
        dispatch(action)
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value)
        dispatch(action)
    }

    function removeTodolist(id: string) {
        const action = removeTodolistAC(id)
        dispatch(action)
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
