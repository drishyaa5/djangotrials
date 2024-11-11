import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Function to fetch all tasks from the backend
  const  fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tasks/');
      setTodos(response.data.map(task => ({ text: task.task, completed: false })));
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Fetch tasks when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        // Send new task to the backend
        await axios.post('http://localhost:8000/api/add/', { task: newTodo });

        // Refetch tasks to update the list after adding
        fetchTodos();
        setNewTodo(''); // Clear the input field
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
  };

  const deleteTodo = async (index) => {
    try {
      // Assuming backend deletion by task text (you may need to adjust this based on actual data)
      await axios.delete(`http://localhost:8000/api/delete/${todos[index].text}`);

      // Refetch tasks to update the list after deletion
      fetchTodos();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearTodos = async () => {
    try {
      await axios.delete('http://localhost:8000/api/clear-todos');
      fetchTodos(); // Refresh task list
    } catch (error) {
      console.error('Error clearing tasks:', error);
    }
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {todos.length > 0 && (
        <button className="clear-all-btn" onClick={clearTodos}>
          Clear All
        </button>
      )}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleComplete(index)}
          >
            <span>{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
