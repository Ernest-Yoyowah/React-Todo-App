import axios from 'axios';

const baseUrl = "http://localhost:5000"

const getAllToDo = (setTodos) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data---> ', data);
        setTodos(data)
    })
}

const addToDo = (text, setText, setTodos) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setTodos)
    })
    .catch((err) => console.log(err))
}

const updateEdit = (todoId, text, setText, setTodos, setEditTodo, completed) => {
    axios
    .post(`${baseUrl}/update`, {_id: todoId, text, completed})
    .then((data) => {
        setText("")
        setEditTodo(false)
        getAllToDo(setTodos)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setTodos) => {
    axios
    .post(`${baseUrl}/delete`, {_id: _id})
    .then((data) => {
        console.log(data)
        getAllToDo(setTodos)
    })
    .catch((err) => console.log(err))
}

export {getAllToDo, addToDo, updateEdit, deleteToDo};