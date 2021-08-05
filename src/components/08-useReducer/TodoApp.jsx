import { useEffect, useReducer } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import todoReducer from './todoReducer';

import './TodoApp.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    dispatch({ type: 'delete', payload: todoId });
  };

  const handleToggle = (todoId) => {
    dispatch({ type: 'toggle', payload: todoId });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'add', payload: newTodo });
  };

  return (
    <>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            todos={todos}
          />
        </div>
        <div className="col">
          <AddTodo handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
