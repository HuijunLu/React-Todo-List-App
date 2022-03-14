import React from 'react';
// same thing as passing props and access it at props.setInputText
const Form = ({setInputText, setTodos, todos, inputText, status, setStatus}) => {

  // create an handle input text function
  const inputTextHandler = (e) => {
    // log the input text string
    // console.log(e.target.value);
    setInputText(e.target.value);
  }
  // create an handle todo submit button click function
  const submitTodoHandle = (e) => {
    // console.log(e)
    e.preventDefault();
    setTodos([...todos,
    {text: inputText, completed: false, id: Math.random() *1000}
    ])
    // set inputText state to empty string,
    // in order for the entry bar to empty itself, change the value to the state so it matches
    setInputText('');
  }
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }


  return (

    <form>
      {/* change value to match the state so the enter bar will empty after each submit  */}
      <input onChange = {inputTextHandler} value = {inputText} type="text" className="todo-input" />
      <button onClick = {submitTodoHandle} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange = {statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

  );
}

export default Form;