import TodoItem from './TodoItem.jsx';

const TodoList = () => {

  const todos = [<TodoItem itemText="Do Me ;)"/>];

  return ( <div>
    {todos}
  </div> )
}

export default TodoList;