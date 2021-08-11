import '@testing-library/jest-dom';

import demoTodos from '__fixtures__/demoTodos';
import todoReducer from 'components/08-useReducer/todoReducer';

describe('Tests on todoReducer', () => {
  const todoID = 1;

  it('should return the default state', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  it('should add a new to-do', () => {
    const newTodo = { id: 3, desc: 'Learn Redux', done: false };
    const action = { type: 'add', payload: newTodo };
    const state = todoReducer(demoTodos, action);

    expect(state).toHaveLength(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  it('should delete a to-do', () => {
    const action = { type: 'delete', payload: todoID };
    const state = todoReducer(demoTodos, action);
    const restTodos = demoTodos[1];

    expect(state).toHaveLength(1);
    expect(state).toEqual([restTodos]);
  });

  it('should do the toggle of the to-do', () => {
    const action = { type: 'toggle', payload: todoID };
    const state = todoReducer(demoTodos, action);
    const isDoneTodo = state[0].done;

    expect(isDoneTodo).toBeTruthy();
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
