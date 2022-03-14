import React from 'react';

const Todo = ({todos, todo, text, setTodos}) => {

  // delete todo event handler
  const deleteHandler = (e) => {
    // update the todos array to only the ones I didn't click on
    setTodos(todos.filter(
      (el) => el.id !== todo.id))
  };

  // complete todo event handler
  const completeHandler = () => {
    setTodos(todos.map((el) => {
      if (el.id === todo.id) {
        return {
          ...el, completed: !el.completed
        };
      }
      return el;

    }))
  }

  return (
    <div className = 'todo'>
    {/* update the className depends on the value of todo status*/}
      <li className = {`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className = 'complete-btn' onClick = {completeHandler}>
      <i className = 'fas fa-check'></i>
      </button>
      <button className = 'trash-btn' onClick = {deleteHandler}>
      <i className = 'fas fa-trash'></i>
      </button>
    </div>
  );
}

export default Todo;