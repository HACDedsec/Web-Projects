import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        <div className="container">
            <h2 className='text-center'> Todos list</h2>
            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }




        </div>
    )
}
