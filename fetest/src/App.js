import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // Fetch todos from the backend
    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:8000/todo/');
            setTodos(response.data); // Ensure this is an array
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <h2>Your Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}> {/* Use the unique ID from MongoDB */}
                        <strong>{todo.title}</strong>: {todo.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
