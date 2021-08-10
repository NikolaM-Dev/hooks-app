import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import RealExampleRef from 'components/04-useRef/RealExampleRef';

describe('Test on <RealExampleRef /> component', () => {
  let wrapper = shallow(<RealExampleRef />);

  beforeEach(() => {
    wrapper = shallow(<RealExampleRef />);
  });

  it('should show <RealExampleRef /> correctly', () => {
    const multipleCustomHooksExists = wrapper
      .find('MultipleCustomHooks')
      .exists();

    expect(wrapper).toMatchSnapshot();
    expect(multipleCustomHooksExists).toBeFalsy();
  });

  it('should show the <MultipleCustomHooks /> component', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    const isMultipleCustomHooks = wrapper.find('MultipleCustomHooks').exists();

    expect(isMultipleCustomHooks).toBeTruthy();
  });
});
