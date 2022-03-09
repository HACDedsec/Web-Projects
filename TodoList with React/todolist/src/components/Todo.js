import React from 'react'

export const Todo = ({ todo, onDelete }) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.sno}</p>
            <button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete Task</button>

        </div>
    )
}
