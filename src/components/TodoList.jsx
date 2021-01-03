import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos }) => {

  return ( 
    <div className="todo-list">
      {todos.map( value => <TodoItem value={value} /> )}
    </div> 
  )
}

export default TodoList;