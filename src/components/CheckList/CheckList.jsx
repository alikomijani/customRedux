import React, { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoContext/ToDoContext'
function CheckList({ checkItem, toDoID }) {
    const {dispatch } =  useContext(ToDoContext)
    
    return (
        <li>
            <input
                onChange={() => dispatch({
                    type: 'change_isDone_status',
                    payload: { toDoID: toDoID, checkId: checkItem.id }
                })}
                type="checkbox"
                id={checkItem.id.toString() + toDoID.toString()}
                name="checkItem.title"
                checked={checkItem.isDone} />
            <label htmlFor={checkItem.id.toString() + toDoID.toString()}>
                {checkItem.title}
            </label>
        </li>
    )
}

export default CheckList
