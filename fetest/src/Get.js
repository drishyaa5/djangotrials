import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch all tasks from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tasks/');  // Ensure the endpoint is correct
      setTodos(response.data.map(task => ({ text: task.task, completed: false })));
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch tasks when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
