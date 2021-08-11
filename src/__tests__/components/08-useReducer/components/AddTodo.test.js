import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import AddTodo from 'components/08-useReducer/components/AddTodo';

describe('Tests on <AddTodo /> component', () => {
  const handleAddTodo = jest.fn();

  let wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
  });

  it('should show <AddTodo /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("shouldn't call handleAddTodo function", () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).not.toHaveBeenCalled();
  });

  it('should call handleAddTodo', () => {
    const value = 'Learn React';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value, name: 'description' } });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
  });

  it('should call reset', () => {
    const value = 'Learn React';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value, name: 'description' } });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    const isEmptyInput = !wrapper.find('input').prop('value');

    expect(isEmptyInput).toBeTruthy();
  });
});
