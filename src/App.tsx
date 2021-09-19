import React, {useState} from 'react'
import {TodoList} from "./TodoList";
import {Grosery} from "./Components/Grocery";
import {v1} from "uuid";
import {NewInput} from "./Components/NewInput";
import styles from './App.module.css'


export type filterType = "All" | "Active" | "Completed"
export type filterForProductsType = 'All' | 'Vegetables' | 'Fruits'

const App =() => {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "Bread", checked: true},
        {id: v1(), title: "Milk", checked: true},
        {id: v1(), title: "Oil", checked: false},
        {id: v1(), title: "Eggs", checked: false},
        {id: v1(), title: "Sausages", checked: false},
        {id: v1(), title: "Potato", checked: true}
    ])

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
    const changeFilter = (filterValue: filterType) => {
        setFilter(filterValue)
    }

    let filtredTasks = tasks
    if (filter === "Active") {
        filtredTasks = tasks.filter(f =>!f.checked)
    }
    if (filter === "Completed") {
        filtredTasks = tasks.filter(f =>f.checked)
    }

    //!! !!! ДОБАВЛЕНИЕ ТАСКИ !! !!
    //создали функцию (с каким угодно функционалом) и передали ее в коллбек
    //внутри создали переменную новаяТаска и засетали ее в стейт с помощью спред оператора
    //в JSX-верстке не должно быть логики - то есть ф-ций, которые принимают чото и вызываются
    //поэтому выносим ф-цию addTask в addTaskHandler - если выкидываем ф-цию - даем такое же название+Handler
    //у нас инпут? значит создаем стейт, где будет хранится вносимое пользователем значение - начальный стейт - пустая строка
    //у инпута создаем онЧендж - учим инпут ловить вносимое значение
    //онЧендж выносим в онЧенджХандлер - в него приходит ивент, который надо протипизировать(реакт сам подскажет)
    //тестим - заставляем в консоли показать ивент.кюрентТарджет.value


    const addTask = (newTaskTitle: string) => {
        if(newTaskTitle.trim()!=="") {
            let newTask = {id: v1(), title: newTaskTitle.trim(), checked: true}
            setTasks([newTask, ...tasks])
        }
    }

    const deleteTask = (taskId: string) => {
        console.log(taskId)
        let deleteTask1 = tasks.filter( f => f.id!==taskId )
        setTasks(deleteTask1)
    }

    const changeChekBox = (myEvent: boolean, newId : string) => {
        // let currentTask=tasks.find(ft => ft.id===id)
        // if(currentTask) {
        //     currentTask.checked=myEvent
        //     setTasks([...tasks])
        setTasks(tasks.map(mID => mID.id===newId ? {...mID, checked: myEvent} : mID))
    }

    return <div>
        <TodoList
            title="What to buy"
            tasks={filtredTasks}
            deleteTask={deleteTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeChekBox={changeChekBox}
            filter={filter}
            setTasks={setTasks}
        />

    </div>
}


export default App;
