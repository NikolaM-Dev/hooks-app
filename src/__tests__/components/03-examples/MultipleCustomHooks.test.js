import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import MultipleCustomHooks from 'components/03-examples/MultipleCustomHooks';
import useFetch from 'hooks/useFetch';
import useCounter from 'hooks/useCounter';

jest.mock('hooks/useFetch');
jest.mock('hooks/useCounter');

describe('Tests on <MultipleCustomHooks /> component', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {},
    });
  });

  it('should show <MultipleCustomHooks /> correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show the information', () => {
    const dataInfo = { author: 'Nikola', quote: 'Hello World!' };
    useFetch.mockReturnValue({
      data: [dataInfo],
      error: null,
      loading: false,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    const isLoading = wrapper.find('.alert').exists();
    const author = wrapper.find('.blockquote-footer').text().trim();
    const quote = wrapper.find('.mb-3').text().trim();

    expect(isLoading).toBeFalsy();
    expect(author).toBe(dataInfo.author);
    expect(quote).toBe(dataInfo.quote);
  });
});
