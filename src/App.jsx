import React, { useState } from 'react';
import { Todos } from './components/Todos';

export function App() {

  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 
  const [showCompletedTodos, setShowCompletedTodos] = useState(true);
  const [editTodo, setEditTodo] = useState({ id: null, text: '' }); 


  function addNewTodo() {

    if (newTodo.trim() !== '') { 
      const novElement = {
        id: Math.floor(Math.random() * 1000), 
        text: newTodo,
        completed: false
      }

      setTodos([...todos, novElement]); 
      setNewTodo(''); 
    } else {
      alert("No value has been entered\nPlease enter a valid task before adding it to your list")
    }
  }

  function deleteTodo(todoId) {
    if (editTodo.id === todoId) cancelEdit(); 
    setTodos(todos.filter(todo => todo.id != todoId))
  }

  function markTodoAsDone(todo) {
    setTodos([...todos.map(item => 
      item.id === todo.id ?
       { ...item, completed:!item.completed }
      : item
    )])
  }

  function startEdit(todo) {
    setEditTodo({ id: todo.id, text: todo.text }); 
  }

  function handleEditChange(newText) {
    setEditTodo({ ...editTodo, text: newText });
  }

  function saveEdit() {
    if (editTodo.text.trim() === '') { 
      alert("Todo text cannot be empty");
      return;
    }
    setTodos(todos.map(item =>
      item.id === editTodo.id
        ? { ...item, text: editTodo.text.trim() }
        : item
    ));
    cancelEdit(); 
  }

  function cancelEdit() {
    setEditTodo({ id: null, text: '' });
  }

  const completedElements = todos.filter(todo => todo.completed).length

  return (
    <div id='app'>
      <input
        type="text"
        placeholder='Enter New TODO'
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      <button onClick={addNewTodo}>Add Todo</button>
    <br/>
    <br/>
    <br/>
      {todos.length >0 && <h3>Number of completed Items: {completedElements}</h3>}
    
    <button onClick={() => setShowCompletedTodos(!showCompletedTodos)}>
            {showCompletedTodos ? "Hide Completed" : "Show Completed"}
    </button>
      <Todos
        listOfTodos={showCompletedTodos ? todos : todos.filter((todo) => !todo.completed)}
        deleteTodo={deleteTodo}
        markTodoAsDone={markTodoAsDone}
        editTodo={editTodo}
        startEdit={startEdit}
        handleEditChange={handleEditChange}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  )
}
