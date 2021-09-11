import React, {useState} from 'react'
import {TodoList} from "./TodoList";

export type filterType = "All" | "Active" | "Completed"

const App =() => {

    let [tasks, setTasks] = useState([
        {id: 1, title: "Bread", checked: true},
        {id: 2, title: "Milk", checked: true},
        {id: 3, title: "Oil", checked: false},
        {id: 4, title: "Eggs", checked: false},
        {id: 5, title: "Sausages", checked: false},
        {id: 6, title: "Potato", checked: true}
    ])

    //делаем удаление таски
    //передаем функции аргумент - в нашем случае найтись может по Id
    //в типизации в Todolist.tsx указываем какой тип получает функция
    //в Todolist.tsx этой функции в пропсах нужно тоже получить аргумент, но там id у нас отфильтровано
    //фильтр, отрисуй мне все айдишки кроме той которая в тебя пришла
    //запустить перерисовку можем только с помощью сетТаскс через юзСтейт

    //про фильтр: делетеТаск1 это результирующий массив который удовлетворяет условию
    const deleteTask = (taskId: number) => {
       let deleteTask1 = tasks.filter( f => f.id!==taskId )
        setTasks(deleteTask1)
    }


    //создали стейт чтобы хранить разные фильтры
    //написали типизацию для стейта - какого типа значения в него будут приходить (мутный момент)
    //эта типизация понадобиться когда значение(value) будет приходить в кач-ве аргумента в функцию
    //прописали логику: новый массив = профильтрованный под разными условиями старый массив
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


    return <div>
        <TodoList
            title="What to buy"
            tasks={filtredTasks}
            deleteTask={deleteTask}
            changeFilter={changeFilter}
        />
    </div>
}


export default App;
