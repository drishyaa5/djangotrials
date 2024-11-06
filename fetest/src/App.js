

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/todo/');
        setTodos(response.data);
        console.log(response.data); // For debugging
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);


  

  return (
    <div className="todo-list">
      <h1 className="todo-title">Todo List</h1>
      {todos.length === 0 ? (
        <p className="no-todos">No todos found</p>
      ) : (
        <ul className="todo-items">
          {todos.map((todo) => (
            <li key={todo._id} className="todo-item">
              <h3 className="todo-item-title">{todo.title}</h3>
              <p className="todo-item-description">{todo.description}</p>
              <p className="todo-item-status">
                Status: {todo.checked ? '✅ Completed' : '❌ Incomplete'}
              </p>
            </li>
          ))}
        </ul>
      )}

    </div>

  );
};

export default TodoList;

