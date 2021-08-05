import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          i={i}
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
