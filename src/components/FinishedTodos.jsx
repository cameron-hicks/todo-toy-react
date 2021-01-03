import TodoItem from './TodoItem.jsx';

const FinishedTodos = ({ todos }) => {

  return ( 
    <div className="todo-list finished-todos">
      {todos.map( (value, index) => 
        <TodoItem 
          value={value} 
          key={`Finished#${index}`}
          index={index}/> )}
    </div> 
  )
}

export default FinishedTodos;