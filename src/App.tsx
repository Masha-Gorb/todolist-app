import React from 'react'
import {TodoList} from "./TodoList";

const App =() => {
    return <div>
        <TodoList title="What to learn"/>
        <TodoList title="What to buy"/>
        <TodoList title="What to listen"/>
    </div>
}


export default App;
