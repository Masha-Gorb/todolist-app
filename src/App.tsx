import React, {useState} from 'react'
import {TodoList} from "./TodoList";
import {Grosery} from "./Components/Grocery";

export type filterType = "All" | "Active" | "Completed"
export type filterForProductsType = 'All' | 'Vegetables' | 'Fruits'

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
            {id: 1, title: 'Potato', isVegetable: true},
            {id: 2, title: 'Tomato', isVegetable: true},
            {id: 3, title: 'Apple', isVegetable: false},
            {id: 4, title: 'Orange', isVegetable: false},
            {id: 6, title: 'Onion', isVegetable: true},
            {id: 7, title: 'Cabbage', isVegetable: true},
            {id: 8, title: 'Grape', isVegetable: false},

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
    // const deleteTask = (taskId: number) => {
    //    let deleteTask1 = tasks.filter( f => f.id!==taskId )
    //     setTasks(deleteTask1)
    // }

    let [filter, setFilter] = useState<filterForProductsType>('All')
    const changeProductFilter = (filterProductsValue: filterForProductsType) => {
        setFilter(filterProductsValue)
    }

    let filtredProducts = products
    if (filter === 'Vegetables') {
        filtredProducts= products.filter(f => f.isVegetable)
    }
    if (filter === 'Fruits') {
        filtredProducts = products.filter(f => !f.isVegetable)
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

    // let [filter, setFilter] = useState<filterType>("All")
    // const changeFilter = (filterValue: filterType) => {
    //     setFilter(filterValue)
    // }
    //
    // let filtredTasks = tasks
    // if (filter === "Active") {
    //     filtredTasks = tasks.filter(f =>!f.checked)
    // }
    // if (filter === "Completed") {
    //     filtredTasks = tasks.filter(f =>f.checked)
    // }


    return <div>
        {/*<TodoList*/}
        {/*    title="What to buy"*/}
        {/*    tasks={filtredTasks}*/}
        {/*    deleteTask={deleteTask}*/}
        {/*    changeFilter={changeFilter}*/}
        {/*/>*/}

        <Grosery
            name={'Healthy list'}
        product={filtredProducts}
            deleteProduct={deleteProduct}
            changeProductFilter={changeProductFilter}
        />
    </div>
}


export default App;
