import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { getAllToDo } from "./utils/handelApi";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [text, setText] = useState("");
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllToDo(setTodos);
  }, []);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            text={text}
            setText={setText}
            todoId={todoId}
            setTodoId={setTodoId}
          />
          <div>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
