import { useState } from 'react';
import '../App.css';  
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';
import FinishedTodos from './FinishedTodos.jsx';

function App() {
  const [todos, setTodos] = useState(['Meal plan', 'Grocery shopping', 'Laundry']);
  const [finishedTodos, setFinishedTodos] = useState(['Work out', 'Put clothes away']);
  const [input, setInput] = useState('');
  console.log(todos, finishedTodos);

  const changeHandler = (event) => {
    setInput(event.target.value);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  // TODO: clicking delete on one to-do removes the first one
  const removeTodo = (index) => {
    const todosClone = [...todos];
    todosClone.splice(index, 1);
    return todosClone;
  }

  // extract index from key string of format 'Todo#<index>'
  // const getIndexFromKey = (key) => {
  //   const index = key.split('#')[1];
  //   // type-coerce to num and return
  //   return index - 0;
  // }

  const markDone = (index) => {
    // const index = getIndexFromKey(key);
    console.log(index);
    setFinishedTodos([...finishedTodos, todos[index]]);
    setTodos(removeTodo(index));
  }

  // TODO: clicking delete on one to-do removes the first one
  const deleteItem = (index) => {
    // const index = getIndexFromKey(key);
    setTodos(removeTodo(index));
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
        <TodoInput 
          input={input} 
          changeHandler={changeHandler} 
          clickHandler={clickHandler}
        />
      </header>
      <hr></hr>
      <TodoList 
        todos={todos}
        markDone={markDone}
        deleteItem={deleteItem}
      />
      <hr></hr>
      <h3>Done</h3>
      <FinishedTodos todos={finishedTodos} />
    </div>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/