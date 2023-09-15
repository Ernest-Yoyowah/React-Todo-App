import React from 'react';
import {deleteToDo} from '../utils/handelApi';

const TodoList = ({todos, setTodos, setEditTodo, setText, setTodoId}) => {

    const handleEdit = ({ _id }) => {
        const findTodo = todos.find((todo) => todo._id === _id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({_id}) => {
        setTodos(todos.filter((todo) => todo._id !== _id));
    }

    const updateMode = (_id, text) => {
        setEditTodo(true)
        setText(text)
        setTodoId(_id)
    }

  return (
    <div>
        <div className="no-todos">
            {todos.length === 0 && "No Todos"}
        </div>
        {todos.map((todo) => (
            <li className='list-item' key={todo._id}>
                <input
                type='text'
                value={todo.text}
                className={`list`}
                onChange={(event) => event.preventDefault()}
                updateMode = {() => updateMode(todo._id, todo.text)}
                deleteToDo = {() => deleteToDo(todo._id, setTodos)}
            />
            <div className='control-btn'>
                <button className='button-edit task-button'
                    onClick={() => handleEdit(todo)}>
                    <i className='fa fa-edit'></i>
                </button>
                <button className='button-delete task-button'
                    onClick={() => handleDelete(todo)}>
                    <i className='fa fa-trash'></i>
                </button>
            </div>
            </li>
            )
        )}
    </div>
  )
}

export default TodoList;