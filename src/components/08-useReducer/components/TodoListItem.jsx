import PropTypes from 'prop-types';

const TodoListItem = ({ todo, handleToggle, handleDelete, index }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done ? 'complete ' : ''}text-center`}
      >
        {index + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoListItem;
