import PropTypes from 'prop-types';

import useForm from 'hooks/useForm';

const AddTodo = ({ handleAddTodo }) => {
  const { values, handleInputChange, reset } = useForm({ description: '' });
  const { description } = values;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h2 className="text-center">Add Todo</h2>
      <hr />

      <form onSubmit={handleSubmit} className="d-grid">
        <input
          autoComplete="off"
          className="form-control"
          name="description"
          onChange={handleInputChange}
          placeholder="Learn ..."
          type="text"
          value={description}
        />
        <button type="submit" className="btn btn-success mt-1">
          Add
        </button>
      </form>
    </>
  );
};

AddTodo.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
