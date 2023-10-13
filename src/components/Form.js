import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { addToDo, updateEdit } from "../utils/handelApi";

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  text,
  setText,
  todoId,
  ,
}) => {
  const updateTodo = (text, _id, completed) => {
    const newTodo = todos.map((todo) =>
      todo._id === _id ? { text, _id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    } else {
      setText("");
    }
  }, [setText, editTodo]);

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), text: text, completed: false }]);
      setInput("");
    } else {
      updateTodo(text, editTodo._id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={text}
        required
        onChange={onInputChange}
      />
      <button
        className="button-add"
        type="submit"
        onClick={
          editTodo
            ? () => updateEdit(todoId, text, setTodos, setText, setEditTodo)
            : () => addToDo(text, setText, setTodos)
        }
      >
        {editTodo ? "Save Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;
