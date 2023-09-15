import React from 'react';
import { deleteToDo } from '../utils/handelApi';

const TodoList = ({ todos, setTodos, setEditTodo, setText, setTodoId }) => {
  const handleEdit = (_id) => {
    const findTodo = todos.find((todo) => todo._id === _id);
    setEditTodo(findTodo);
  };

  const handleDelete = (_id) => {
    setTodos(todos.filter((todo) => todo._id !== _id));
  };

  return (
    <div>
      <div className="no-todos">{todos.length === 0 && "No Todos"}</div>
      <ul>
        {todos.map((todo) => (
          <li className="list-item" key={todo._id}>
            <input
              type="text"
              value={todo.text}
              className={`list`}
              onChange={(event) => event.preventDefault()}
            />
            <div className="control-btn">
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(todo._id)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => {
                  handleDelete(todo._id);
                  deleteToDo(todo._id, setTodos);
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
