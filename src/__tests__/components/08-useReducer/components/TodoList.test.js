import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import demoTodos from '__fixtures__/demoTodos';
import TodoList from 'components/08-useReducer/components/TodoList';

describe('Tests on <TodoList /> component', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  let wrapper = shallow(
    <TodoList
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      todos={demoTodos}
    />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <TodoList
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        todos={demoTodos}
      />
    );
  });

  it('should show <TodoList /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have two <TodoListItem />', () => {
    const todoListItems = wrapper.find('TodoListItem');
    const handleDelete = todoListItems.at(0).prop('handleDelete');
    const len = demoTodos.length;

    expect(todoListItems).toHaveLength(len);
    expect(handleDelete).toEqual(expect.any(Function));
  });
});
