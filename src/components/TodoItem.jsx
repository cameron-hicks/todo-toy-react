const TodoList = ({ index, value, markDone, deleteItem }) => {
  return ( <div className="todo-item"> 
    <span className="todo-item-text">{value}</span>
    <div>
      {markDone && <button 
        className="mark-done" 
        onClick={(index) => markDone(index)}>Mark Done</button>}
      {deleteItem && <button 
        className="delete-item" 
        onClick={(index) => deleteItem(index)}>Delete</button>}
    </div>
    </div> )
}

export default TodoList;