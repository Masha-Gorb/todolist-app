import React, {useState} from 'react'
import {TodoList} from "./TodoList";
import {Grosery} from "./Components/Grocery";

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

    let [products, setProduct] = useState([
            {id: 1, title: 'Potato', isBought: true},
            {id: 2, title: 'Tomato', isBought: true},
            {id: 3, title: 'Apple', isBought: false},
            {id: 4, title: 'Orange', isBought: true},
            {id: 6, title: 'Onion', isBought: false},
            {id: 7, title: 'Cabbage', isBought: false},
            {id: 8, title: 'Grape', isBought: true},

        ]
    )

    const deleteProduct = (productId: number) => {
        let actualProducts = products.filter(f => f.id!==productId)
        setProduct(actualProducts)
    }

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

        <Grosery
            name={'Healthy list'}
        product={products}
            deleteProduct={deleteProduct}
        />
    </div>
}


export default App;
