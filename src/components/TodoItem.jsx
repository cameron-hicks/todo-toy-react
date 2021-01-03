const TodoList = ({ id, value, markDone, deleteItem }) => {
  return ( <div className="todo-item" key={id}> 
    <span className="todo-item-text">{value}</span>
    <div>
      {markDone && <button className="mark-done" onClick={markDone}>Mark Done</button>}
      {deleteItem && <button className="delete-item" onClick={deleteItem}>Delete</button>}
    </div>
    </div> )
}

export default TodoList;