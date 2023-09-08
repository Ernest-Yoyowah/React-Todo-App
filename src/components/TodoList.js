import React from 'react';

const TodoList = ({todos, setTodos, setEditTodo}) => {

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div>
        {todos.map((todo) => (
            <li className='list-item' key={todo.id}>
                <input
                type='text'
                value={todo.title}
                className={`list ${todo.completed ? "complete" : ''}`}
                onChange={(event) => event.preventDefault()}
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