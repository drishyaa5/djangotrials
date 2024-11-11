// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   // Fetch todos from the backend when the component mounts
//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/todo/');
//         setTodos(response.data);
//         console.log(response.data); // For debugging
//       } catch (error) {
//         console.error('Error fetching todos:', error);
//       }
//     };

//     fetchTodos();
//   }, []);

//   // Handle adding a new todo
//   const handleAddTodo = async () => {
//     try {
//       const newTodo = {
//         title,
//         description,
//         checked: false, // Default value
//       };

//       // Make the POST request to the backend to add the todo
//       const response = await axios.post('http://localhost:8000/todo/add', newTodo);
//       console.log('Todo added successfully:', response.data);

//       // Clear the form inputs
//       setTitle('');
//       setDescription('');

//       // Add the new todo to the local state to update the UI
//       setTodos((prevTodos) => [...prevTodos, { ...newTodo, _id: response.data.id }]);
//       alert('Todo added successfully!');
//     } catch (error) {
//       console.error('Error adding todo:', error);
//       alert('Failed to add todo. Please try again.');
//     }
//   };

//   return (
//     <div className="todo-list">
//       <h1 className="todo-title">Todo List</h1>
      
//       {/* Add Todo Form */}
//       <div className="add-todo-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button onClick={handleAddTodo}>Add Todo</button>
//       </div>
      
//       {/* Display Todo List */}
//       {todos.length === 0 ? (
//         <p className="no-todos">No todos found</p>
//       ) : (
//         <ul className="todo-items">
//           {todos.map((todo) => (
//             <li key={todo._id} className="todo-item">
//               <h3 className="todo-item-title">{todo.title}</h3>
//               <p className="todo-item-description">{todo.description}</p>
//               <p className="todo-item-status">
//                 Status: {todo.checked ? '✅ Completed' : '❌ Incomplete'}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoList;


import React from 'react'
import MyForm from './Form'
import TodoList from './Todo.js'
import Get from './Get.js'

const App = () => {
  return (
    <div>
      <TodoList/>
      <Get/>
    </div>
  )
}

export default App
