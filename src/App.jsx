import React, { useContext } from "react";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";
// import { ToDoContext } from "./context/ToDoContext/ToDoContext";
import { connect, useSelector } from 'react-redux'
function App({ todoList, addTodo }) {
  // const todoList = useSelector(state=>state.todo.todoList )
  // const { state, dispatch } = useContext(ToDoContext)
  const addItem = () => {
    const id = new Date().getTime();
    const title = prompt("enter the title");
    const description = prompt("enter the description");
    let checklist = [
      { id: 1, title: "check 1", isDone: false },
      { id: 2, title: "check 2", isDone: false },
      { id: 3, title: "check 3", isDone: false },
    ];
    addTodo(id, title, description, checklist)
  }
  return (
    <div className="App">
      <button onClick={addItem}>create a new task</button>
      {todoList.map((item) => (
        <ToDo todoItem={item} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const { todo } = state
  return { todoList: todo.todoList }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (id, title, description, checklist) => {
      dispatch({
        type: "add_todo",
        payload: { id, title, description, checklist },
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
