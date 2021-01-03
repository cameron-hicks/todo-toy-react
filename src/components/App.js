import '../App.css';  
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
        <TodoInput />
      </header>
      <TodoList />
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