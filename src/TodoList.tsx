import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Task} from "./Task";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
}

//замеморизируем тудулист. но это не поможет без использования useCallback на коллбеках
export const Todolist = React.memo((props: PropsType) => {
    //useCallback в параметрах - ф-ция которую надо запомнить и массив зависимостей - когда эту функцию запоминать не надо

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.addTask, props.id])

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title);
    }, [props.changeTodolistTitle, props.id])
//эти коллбеки уходят в кнопки
    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id), [props.changeFilter, props.id]);
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id), [props.changeFilter, props.id]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id), [props.changeFilter, props.id]);

    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            <button onClick={removeTodolist}>x</button>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul>
            {/*{*/}
            {/*    props.tasks.map(t => {*/}
            {/*        const onClickHandler = () => props.removeTask(t.id, props.id)*/}
            {/*        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {*/}
            {/*            let newIsDoneValue = e.currentTarget.checked;*/}
            {/*            props.changeTaskStatus(t.id, newIsDoneValue, props.id);*/}
            {/*        }*/}
            {/*        const onTitleChangeHandler = (newValue: string) => {*/}
            {/*            props.changeTaskTitle(t.id, newValue, props.id);*/}
            {/*        }*/}


            {/*        return <li key={t.id} className={t.isDone ? "is-done" : ""}>*/}
            {/*            <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>*/}
            {/*            <EditableSpan value={t.title} onChange={onTitleChangeHandler} />*/}
            {/*            <button onClick={onClickHandler}>x</button>*/}
            {/*        </li>*/}
            {/*    })*/}
            {/*}*/}

            {
                props.tasks.map(t => <Task
                        key={t.id}
                        task={t}
                        removeTask={props.removeTask}
                        changeTaskTitle={props.changeTaskTitle}
                        changeTaskStatus={props.changeTaskStatus}
                        todolistId={t.id}
                    />
                )
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
})

// type TaskPropsType = {
//     removeTask: (taskId: string, todolistId: string) => void
//     changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
//     changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
//     task: TaskType
//     todolistId: string
// }
//
// export const Task = (props: TaskPropsType) => {
//     const onClickHandler = () => props.removeTask(props.task.id, props.todolistId)
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         let newIsDoneValue = e.currentTarget.checked;
//         props.changeTaskStatus(props.task.id, newIsDoneValue, props.todolistId);
//     }
//     const onTitleChangeHandler = (newValue: string) => {
//         props.changeTaskTitle(props.task.id, newValue, props.todolistId);
//     }
//
//     return (
//         <div key={props.task.id} className={props.task.isDone ? "is-done" : ""}>
//             <input type="checkbox" onChange={onChangeHandler} checked={props.task.isDone}/>
//             <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
//             <button onClick={onClickHandler}>x</button>
//         </div>
//     )
// }


