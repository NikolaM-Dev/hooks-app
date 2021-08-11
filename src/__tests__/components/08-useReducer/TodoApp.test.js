import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';

import { act } from 'react-dom/test-utils';
import demoTodos from '__fixtures__/demoTodos';
import TodoApp from 'components/08-useReducer/TodoApp';

describe('Test en <TodoApp />', () => {
  Storage.prototype.setItem = jest.fn();

  let wrapper = shallow(<TodoApp />);

  beforeEach(() => {
    wrapper = shallow(<TodoApp />);
  });

  it('should show <TodoApp /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a to-do', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find('AddTodo').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('AddTodo').prop('handleAddTodo')(demoTodos[1]);
    });

    const title = wrapper.find('h1').text().trim();

    expect(title).toBe('Todo App (2)');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  it('should delete a to-do', () => {
    wrapper.find('AddTodo').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    const title = wrapper.find('h1').text().trim();

    expect(title).toBe('Todo App');
  });
});
