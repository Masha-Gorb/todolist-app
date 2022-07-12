import React, { useEffect} from 'react';
import './MainPage.css';
import {TaskType, Todolist} from '../Todolist/Todolist';
import {AddItemForm} from "../SmallComponents/AddItemForm";
import {
    addTodolistTC,
    changeTodolistFilterAC, fetchTodolistsTC, removeTodolistTC,
} from "../../BLL/todolist-reducer";
import {addTaskTC, changeTaskStatusTC, removeTaskTC} from "../../BLL/task-reducer";
import {useDispatch, useSelector} from "react-redux";
import {MainPageRootStateType} from "../../BLL/store";
import {LoadingFroggy} from "../SmallComponents/LoadingFroggy";
import {RequestStatusType} from "../../BLL/main-reducer";

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

    const status = useSelector<MainPageRootStateType, RequestStatusType>(state => state.main.status )

    useEffect(() => {
        dispatch(fetchTodolistsTC())
    }, [dispatch])

    function addTodolist(title: string) {
        dispatch(addTodolistTC(title))
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
        dispatch(changeTaskStatusTC(todolistId, id, isDone))

    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value)
        dispatch(action)
    }

    function removeTodolist(id: string) {
        const thunk = removeTodolistTC(id)
        dispatch(thunk)
    }

    return (
        <div className="App">

            <AddItemForm addItem={addTodolist}/>

            {status === 'loading' && <LoadingFroggy/>}

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
