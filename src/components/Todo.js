import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Todo = ({ task, deleteTodo, editTodo }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='Todo'>
            <p onClick={() => {setToggle(!toggle)}} style={{ textDecoration: toggle ? "line-through" : "none" }}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)} />
            </div>
        </div>
    )
}
