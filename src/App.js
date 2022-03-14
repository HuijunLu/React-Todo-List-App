import React, { useState, useEffect } from 'react';
import "./App.css";
import Form from "./components/Form.js"
import TodoList from './components/TodoList'



function App() {
  // set initial state using useState method
  // (actual input, function that will change the state)
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect: a func and states (run the func when the states change)
  useEffect(() => {
    filterHander();
  }, [todos, status])


  // filter handler using JS switch statement
  const filterHander = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }
  // save todo data to local
  // so it won't disapear after refresh
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }

  return (
    <div className='App'>
      <header>
        <h1>Hailee's Todo List</h1>
      </header>
      {/* pass the setInputText func to form through props */}
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />
      {/* pass todo text down to todo component through TodoList */}
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>

    </div>
  )
}

export default App;