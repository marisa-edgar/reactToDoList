import React, { useState } from 'react';
import '../App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Header from "./Header";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){

  const [todos, setTodos] = useState([
    { complete: false, task: "Read about MongoDb" },
    { complete: false, task: "Create a React ToDo App" },
    { complete: false, task: "Find my key" },
  ]);
  return (
    // <Router>
    //   <Header />
    // </Router>
    <div className="App">
      <Header />
      <TodoForm
        addTodo={(todo) => {
          if (todo.task.trim().length > 0) {
            setTodos([...todos, todo]);
          }
        }}
      />
      <TodoList
        todos={todos}
        updateTodos={(list) => {
          setTodos(list);
        }}
      ></TodoList>
    </div>
  );
}

export default App;
