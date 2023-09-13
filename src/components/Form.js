import React, { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
// import { addToDo } from '../utils/handelApi';
const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const updateTodo = (text, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? {text, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.text);
        }
        else {
            setInput("")
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, {id: uuidv4(), text: input, completed: false }]);
            setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };

  return (
    <form onSubmit={onFormSubmit}>
        <input
        type='text'
        placeholder='Enter a Todo...'
        className='task-input'
        value={input}
        required
        onChange={onInputChange}
        />
        <button className='button-add' type='submit'
        >
            {editTodo ? "OK" : "Add"}
        </button>
    </form>
  )
}

export default Form;