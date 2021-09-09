import React from 'react'

export const TodoList = () => {
    return <div>


        <h2>Here will be title of Todo List</h2>

        <div>
            <ul>
                <li><input type="checkbox" checked={true}/>task 1</li>
                <li><input type="checkbox" checked={true}/>task 3</li>
                <li><input type="checkbox" checked={false}/>task 4</li>
                <li><input type="checkbox" checked={false}/>task 5</li>
            </ul>
        </div>


        <button>Active</button>
        <button>Completed</button>
        <button>All</button>

    </div>
}