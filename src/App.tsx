import React, {useState} from 'react'
import {TodoList} from "./TodoList";
import {v1} from "uuid";
import {NewInput} from "./Components/NewInput";
import {inspect} from "util";
import styles from './App.module.css'
export type filterType = "All" | "Active" | "Completed"
export type TodolistsType = {
    id: string
    title: string
    filter: filterType
}

const App =() => {

    let todolistID1=v1()
    let todolistID2=v1()

    let [todolists, setTodolists] = useState<Array<TodolistsType>>( [
        {id: todolistID1, title: 'What to learn', filter: 'All'},
        {id: todolistID2, title: 'What to buy', filter: 'All'}
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "Bread", checked: true},
            {id: v1(), title: "Milk", checked: true},
            {id: v1(), title: "Oil", checked: false},
            {id: v1(), title: "Eggs", checked: false},
            {id: v1(), title: "Sausages", checked: false},
            {id: v1(), title: "Potato", checked: true}
        ],

        [todolistID2]:[
        {id: v1(), title: "Bread", checked: true},
        {id: v1(), title: "Milk", checked: true},
        {id: v1(), title: "Oil", checked: false},
        {id: v1(), title: "Eggs", checked: false},
        {id: v1(), title: "Sausages", checked: false},
        {id: v1(), title: "Potato", checked: true}
    ]
    })

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "Bread", checked: true},
    //     {id: v1(), title: "Milk", checked: true},
    //     {id: v1(), title: "Oil", checked: false},
    //     {id: v1(), title: "Eggs", checked: false},
    //     {id: v1(), title: "Sausages", checked: false},
    //     {id: v1(), title: "Potato", checked: true}
    // ])

    //делаем удаление таски
    //передаем функции аргумент(как он найдет что удалять) - в нашем случае найтись может по Id
    //в типизации в Todolist.tsx указываем какой тип получает функция
    //в Todolist.tsx этой функции в пропсах нужно тоже получить аргумент, но там id у нас отфильтровано
    //фильтр, отрисуй мне все айдишки кроме той которая в тебя пришла
    //запустить перерисовку можем только с помощью сетТаскс через юзСтейт

    //про фильтр: делетеТаск1 это результирующий массив который удовлетворяет условию
    // const deleteTask = (taskId: string) => {
    //     console.log(taskId)
    //    let deleteTask1 = tasks.filter( f => f.id!==taskId )
    //
    //     setTasks(deleteTask1)
    // }

    //создали стейт чтобы хранить разные фильтры
    //написали типизацию для стейта - какого типа значения в него будут приходить (мутный момент)
    //эта типизация понадобиться когда значение(value) будет приходить в кач-ве аргумента в функцию
    //создаем функцию сменитьФильтр - она получает фильтрЗначение определенного типа и вызывает перерисовку стейта (сетФильтр)
    //в сетФильтр приходит ЗНАЧЕНИЕ ФИЛЬТРА
    //прописали логику: новый массив = профильтрованный под разными условиями старый массив
    //условия - если фильтр === такому-то значению, то новый массив равно отфильтрованый старый масив с таким то условием
    //создали функцию, которую передали в пропсах и повесили на кнопки
    //прописали этой функции логику
    //кинули эту функцию в сетФильтр

    let [filter, setFilter] = useState<filterType>("All")

    const changeFilter = (filterValue: filterType,todolistId: string) => {
        // setFilter(filterValue)
        console.log(todolistId)
        let currentTodolist = todolists.find(f=> f.id===todolistId)
        if(currentTodolist) {
            currentTodolist.filter=filterValue
            setTodolists([...todolists])
        }
    }

    // let filtredTasks = tasks
    // if (filter === "Active") {
    //     filtredTasks = tasks.filter(f =>!f.checked)
    // }
    // if (filter === "Completed") {
    //     filtredTasks = tasks.filter(f =>f.checked)
    // }

    //!! !!! ДОБАВЛЕНИЕ ТАСКИ !! !!
    //создали функцию (с каким угодно функционалом) и передали ее в коллбек
    //внутри создали переменную новаяТаска и засетали ее в стейт с помощью спред оператора
    //в JSX-верстке не должно быть логики - то есть ф-ций, которые принимают чото и вызываются
    //поэтому выносим ф-цию addTask в addTaskHandler - если выкидываем ф-цию - даем такое же название+Handler
    //у нас инпут? значит создаем стейт, где будет хранится вносимое пользователем значение - начальный стейт - пустая строка
    //у инпута создаем онЧендж - учим инпут ловить вносимое значение
    //онЧендж выносим в онЧенджХандлер - в него приходит ивент, который надо протипизировать(реакт сам подскажет)
    //тестим - заставляем в консоли показать ивент.кюрентТарджет.value

    const addTask = (todolistId: string, newTaskTitle: string) => {
        let currentTodolistId = tasks[todolistId]
        let newTask = {id: v1(), title: newTaskTitle.trim(), checked: false}
        tasks[todolistId]=[newTask, ...tasks[todolistId]]
        setTasks({...tasks})
        // if(newTaskTitle.trim()!=="") {
        //     let newTask = {id: v1(), title: newTaskTitle.trim(), checked: true}
        //     setTasks([newTask, ...tasks])
        // }
    }

    const deleteTask = (todolistId: string, taskId: string) => {
        let currentTodolistId = tasks[todolistId]
        tasks[todolistId] = currentTodolistId.filter(f=>f.id!==taskId)
        setTasks({...tasks})
    }

    const changeChekBox = (todolistId: string, myEvent: boolean, newId : string) => {
        let currentTodolistId = tasks[todolistId]
        let currentTask = tasks[todolistId].find(ft=> ft.id===newId)
        if(currentTask) {
            currentTask.checked=myEvent
                setTasks({...tasks})
        }

        // let currentTask=tasks.find(ft => ft.id===id)
        // if(currentTask) {
        //     currentTask.checked=myEvent
        //     setTasks([...tasks])
        // setTasks(tasks.map(mID => mID.id===newId ? {...mID, checked: myEvent} : mID))
    }

    return <div className={styles.todolists}>
        {todolists.map( (m) => {

            let filtredTasks = tasks[m.id]
            if (m.filter === "Active") {
                filtredTasks = tasks[m.id].filter(f =>!f.checked)
            }
            if (m.filter === "Completed") {
                filtredTasks = tasks[m.id].filter(f =>f.checked)
            }

            return (
                <TodoList
                    key={m.id}
                    todolistId={m.id}
                    title={m.title}
                    tasks={filtredTasks}
                    deleteTask={deleteTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeChekBox={changeChekBox}
                    filter={m.filter}
                    // setTasks={setTasks}
                />
            )
        })}



    </div>
}


export default App;
