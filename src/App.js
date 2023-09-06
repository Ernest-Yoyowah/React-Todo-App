import React, { useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {

    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <div className='app-wrapper'>
       <div>
        <Header />
       </div>
      <div>
        <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        <div>
          <TodoList
            todo={todo}
            setTodo={setTodo}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
