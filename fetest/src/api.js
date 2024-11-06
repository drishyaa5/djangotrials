import axios from 'axios';

const API_URL = 'http://120.0.0.1:8000/todo/'; // Adjust this if your backend runs on a different port

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
