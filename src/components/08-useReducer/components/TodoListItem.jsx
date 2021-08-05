const TodoListItem = ({ todo, handleToggle, handleDelete, i }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && 'complete'} text-center`}
      >
        {i + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;
