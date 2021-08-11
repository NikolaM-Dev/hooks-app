import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import demoTodos from '__fixtures__/demoTodos';
import TodoListItem from 'components/08-useReducer/components/TodoListItem';

describe('Tests on <TodoListItem /> component', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const index = 0;
  const todo = demoTodos[0];

  let wrapper = shallow(
    <TodoListItem
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      index={index}
      todo={todo}
    />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <TodoListItem
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        index={index}
        todo={todo}
      />
    );
  });

  it('should show <TodoListItem /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the handleDelete function', () => {
    wrapper.find('button').simulate('click');

    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });

  it('should call the handleToggle function', () => {
    wrapper.find('p').simulate('click');

    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
  });

  it('should show the text correctly', () => {
    const text = wrapper.find('p').text().trim();
    const correctlyText = `${index + 1}. ${todo.desc}`;

    expect(text).toBe(correctlyText);
  });

  it('should have the complete class if todo.done is true', () => {
    const todo = demoTodos[1];

    const wrapper = shallow(
      <TodoListItem
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        index={index}
        todo={todo}
      />
    );

    const haveCompleteClass = wrapper.find('p').hasClass('complete');

    expect(haveCompleteClass).toBeTruthy();
  });
});
