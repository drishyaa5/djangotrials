import axios from 'axios';

const API_URL = 'http://120.0.0.1:8000/todo/'; // Adjust this if your backend runs on a different port

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await axios.post(`add/`);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}delete/`, { data: { id } });
  return response.data;
};
