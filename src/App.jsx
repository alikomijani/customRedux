import React, { useContext } from "react";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";
import{ ToDoContext } from "./context/ToDoContext/ToDoContext";


function App() {
  const { state, dispatch } = useContext(ToDoContext)
  const addTodo = () => {
    const id = new Date().getTime();
    const title = prompt("enter the title");
    const description = prompt("enter the description");
    let checklist = [
      {id:1 ,title: "check 1", isDone: false },
      {id:2 ,title: "check 2", isDone: false },
      {id:3 ,title: "check 3", isDone: false },
    ];
    dispatch({
      type: "add_todo",
      payload: { id, title, description, checklist },
    });
  };

  return (
      <div className="App">
        <button onClick={addTodo}>create a new task</button>
        {state.todoList.map((item) => (
          <ToDo todoItem={item} />
        ))}
      </div>
  );
}

export default App;
