import React, {ChangeEvent, useEffect} from 'react';
import {FilterValuesType} from '../MainPage/MainPage';
import {AddItemForm} from "../SmallComponents/AddItemForm";
import {EditableSpan} from "../SmallComponents/EditableSpan";
import {fetchTasksTC} from "../../BLL/task-reducer";
import {useDispatch} from "react-redux";
import {TaskTypeRes} from "../../api/todolist-api-";


export type TaskType = TaskTypeRes

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(fetchTasksTC(props.id))
    }, [dispatch, props.id])


    const addTask = (title: string) => {
        props.addTask(title, props.id)}

    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    const divStyle = {
        display: 'flex',
    };

    return <div>
        <h3> {props.title}
            <button onClick={removeTodolist}>x</button>
        </h3>
        <div>
            <AddItemForm
              addItem={addTask}/>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    return <li style={divStyle} key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <EditableSpan title={t.title}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


