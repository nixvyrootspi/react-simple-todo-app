import React, { useState } from 'react'
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {

        setInput(event.target.value);
    };

    const handleAddTodo = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <h3>React Simple Todo App - logic only</h3>
            <input type='text' value={input} onChange={handleInputChange} placeholder='add a new todo' />
            <button onClick={handleAddTodo}>Add Todo</button>
            <p>Your Todos...</p>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>{todo}
                            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo