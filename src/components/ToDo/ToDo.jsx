import React from 'react'
import { useDispatch } from 'react-redux'
import CheckList from '../CheckList/CheckList'
import { ToDoContext } from '../../context/ToDoContext/ToDoContext'
function ToDo({ todoItem }) {
    const dispatch = useDispatch()
    return (
        <ul>
            <li>
                <button
                    onClick={() =>
                        dispatch({ type: "remove_todo", payload: todoItem.id })
                    }
                >
                    remove
                </button>
                <h5>{todoItem.title}</h5>
                <p>{todoItem.description}</p>
                <ul>
                    {todoItem.checklist.map((checkItem) => (
                        <CheckList
                            toDoID={todoItem.id}
                            checkItem={checkItem}
                        />
                    ))}
                </ul>
            </li>
        </ul>
    )
}

export default ToDo
