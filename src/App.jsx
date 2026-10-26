import React, { useState, useEffect } from 'react';
import { Todos } from './components/Todos';

export function App() {

  const [car, setCar] = useState({ model: 'Yugo', year: 2010 });
  const [days, setDays] = useState(["Monday", 'Tuesday', 'Wednesday']);
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Eat Dinner', done: false },
    { id: 3, text: 'Go to Sleep', done: false },
  ])


  useEffect(() => {
    console.log(person)
  }, [person])

  function newCar() {
    setCar({
      // model: 'Yugo',
      ...car,
      year: 2016
    })
  }

  function addDays() {
    setDays(['Sunday', ...days, 'Thursday'])
  }

  function validateTodo(text) {
    if (text === "") return "TODO ne smee da bide prazno!";
    if (text.length < 3) return "TODO mora da ima barem 3 karakteri!";
    if (text.length > 50) return "TODO moze da ima najmnogu 50 karakteri!";
    const exists = todos.some(t => t.text.toLowerCase() === text.toLowerCase());
    if (exists) return "Vekje postoi takov TODO!";
    return "";
  }

  function addNewTodo() {
    const text = newTodo.trim(); 

    const validationError = validateTodo(text);
    if (validationError) {
      setError(validationError);
      return; 
    }

    let newObject = {
      id: crypto.randomUUID(), 
      text: text,
      done: false
    }
    setTodos([...todos, newObject]);
    setNewTodo('');
    setError('');
  }

  function deleteTodo(id) {
    setTodos(todos.filter(item => item.id !== id));
  }

  function markTodoAsDone(todo) {
    setTodos([...todos.map(item => (item.id === todo.id) ? 
      { ...item, done: !item.done } 
      : item 
    )]);
  }

  return (
    <div id='app'>

      <input
        type="text"
        placeholder='Enter TODO'
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value); setError(''); }}
        onKeyDown={(e) => { if (e.key === 'Enter') addNewTodo() }}
      />
      <button onClick={addNewTodo}>Add Todo</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Todos
        listOfTodos={todos}
        markTodoAsDone={markTodoAsDone}
        deleteTodo={deleteTodo}
      />
      <h2>Car:</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year} </p>
      <button onClick={newCar}>Buy New Car</button>
      <hr />
      <ul>
        {days.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
      <button onClick={addDays}>Add Days</button>
      <hr />
      <input
        type="text"
        placeholder='Enter First Name'
        value={person.firstName}
        onChange={(e) => { setPerson({ ...person, firstName: e.target.value }) }}
      />
      <br />
      <br />
      <input
        type='text'
        placeholder='Enter Last Name'
        value={person.lastName}
        onChange={(e) => { setPerson({ ...person, lastName: e.target.value }) }}
      />
    </div>
  )
}