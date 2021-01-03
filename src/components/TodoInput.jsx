const TodoInput = ({ input, setInput, clickHandler }) => {
  return ( <div>
    <form>
      <input id="todo-input" 
        type="text" 
        placeholder="New todo..." 
        value={input} 
        onChange={(value) => setInput(value)}>
      </input>
      <button
        onClick={clickHandler}>
          Add 
      </button>
    </form>
  </div> )
}

export default TodoInput;