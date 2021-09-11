import React, {useState} from 'react'
import {TodoList} from "./TodoList";

const App =() => {

    const [tasks, setTasks] = useState([
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
    const deleteTask = (taskId: number) => {
       let deleteTask1 = tasks.filter( f => f.id!==taskId )
        setTasks(deleteTask1)
    }


    return <div>
        <TodoList
            title="What to buy"
            tasks={tasks}
            deleteTask={deleteTask}
        />
    </div>
}


export default App;
