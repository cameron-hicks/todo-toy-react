const TodoInput = ({ input, changeHandler, clickHandler }) => {
  return ( <div className="todo-input">
    <form>
      <input
        type="text" 
        placeholder="New todo..." 
        value={input}
        onChange={changeHandler}>
      </input>
      <button
        onClick={clickHandler}>
        <i class="far fa-plus-square"></i> 
      </button>
    </form>
  </div> )
}

export default TodoInput;