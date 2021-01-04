const TodoList = ({ index, value, markDone, deleteItem }) => {
  return ( <div className="todo-item"> 
    <span className="todo-item-text">{value}</span>
    <div>
      {markDone && <button 
        className="mark-done" 
        onClick={() => markDone(index)}>
          <i className="far fa-check-square"></i>
        </button>}
      {deleteItem && <button 
        className="delete-item" 
        onClick={() => deleteItem(index)}>
          <i className="far fa-minus-square"></i>
        </button>}
    </div>
    </div> )
}

export default TodoList;