import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, markDone, deleteItem }) => {

  return ( 
    <div className="todo-list">
      {todos.map( (value, index) => 
        <TodoItem 
          value={value} 
          markDone={markDone} 
          deleteItem={deleteItem} 
          key={`Todo#${index}`}
          index={index}/> )}
    </div> 
  )
}

export default TodoList;