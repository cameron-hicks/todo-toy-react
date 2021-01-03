const TodoInput = ({ input, changeHandler, clickHandler }) => {
  return ( <div>
    <form>
      <input id="todo-input" 
        type="text" 
        placeholder="New todo..." 
        onChange={changeHandler}>
      </input>
      <button
        onClick={clickHandler}>
          Add 
      </button>
    </form>
  </div> )
}

export default TodoInput;