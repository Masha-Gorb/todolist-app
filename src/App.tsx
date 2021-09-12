import React, {useState} from 'react'
import {TodoList} from "./TodoList";
import {Grosery} from "./Components/Grocery";
import {v1} from "uuid";

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

    //ДЛЯ ТРЕНИРОВОЧНОЙ КОМПОНЕНТЫ
    // let [products, setProduct] = useState([
    //         {id: 1, title: 'Potato', isVegetable: true},
    //         {id: 2, title: 'Tomato', isVegetable: true},
    //         {id: 3, title: 'Apple', isVegetable: false},
    //         {id: 4, title: 'Orange', isVegetable: false},
    //         {id: 6, title: 'Onion', isVegetable: true},
    //         {id: 7, title: 'Cabbage', isVegetable: true},
    //         {id: 8, title: 'Grape', isVegetable: false},
    //
    //     ]
    // )
    //
    // const deleteProduct = (productId: number) => {
    //     let actualProducts = products.filter(f => f.id!==productId)
    //     setProduct(actualProducts)
    // }
    //
    // let [filter, setFilter] = useState<filterForProductsType>('All')
    // const changeProductFilter = (filterProductsValue: filterForProductsType) => {
    //     setFilter(filterProductsValue)
    // }
    //
    // let filtredProducts = products
    // if (filter === 'Vegetables') {
    //     filtredProducts= products.filter(f => f.isVegetable)
    // }
    // if (filter === 'Fruits') {
    //     filtredProducts = products.filter(f => !f.isVegetable)
    // }

    //делаем удаление таски
    //передаем функции аргумент - в нашем случае найтись может по Id
    //в типизации в Todolist.tsx указываем какой тип получает функция
    //в Todolist.tsx этой функции в пропсах нужно тоже получить аргумент, но там id у нас отфильтровано
    //фильтр, отрисуй мне все айдишки кроме той которая в тебя пришла
    //запустить перерисовку можем только с помощью сетТаскс через юзСтейт

    //про фильтр: делетеТаск1 это результирующий массив который удовлетворяет условию
    const deleteTask = (taskId: string) => {
        console.log(taskId)
       let deleteTask1 = tasks.filter( f => f.id!==taskId )

        setTasks(deleteTask1)
    }



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


    const addTask = () => {
        let newTask = {id: v1(), title: "New Task", checked: true}
        setTasks([newTask, ...tasks])
    }

    return <div>
        <TodoList
            title="What to buy"
            tasks={filtredTasks}
            deleteTask={deleteTask}
            changeFilter={changeFilter}
            addTask={addTask}
        />

        {/*<Grosery*/}
        {/*    name={'Healthy list'}*/}
        {/*product={filtredProducts}*/}
        {/*    deleteProduct={deleteProduct}*/}
        {/*    changeProductFilter={changeProductFilter}*/}
        {/*/>*/}
    </div>
}


export default App;
