import React from 'react';

const TodoList = ({todo, setTodo, setEditTodo}) => {

    const handleComplete = (todoA) => {
        setTodo(
            todo.map((item) => {
                if (item.id === todoA.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todo.find((todoA) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodo(todo.filter((todoA) => todoA.id !== id));
    }
  return (
    <div>
        {todo.map((todoA) => (
            <li className='list-item' key={todoA.id}>
                <input
                type='text'
                value={todoA.title}
                className={`list ${todoA.completed ? "complete" : ""}`}
                onChange={(event) => event.preventDefault()}
            />
            <div>
                <button className='button-complete task-button' onClick={() => handleComplete(todoA)}>
                    <i className='fa fa-check-circle'></i>
                </button>
                <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                    <i className='fa fa-edit'></i>
                </button>
                <button className='button-delete task-button'
                    onClick={() => handleDelete(todoA)}>
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