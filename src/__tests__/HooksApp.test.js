import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import HooksApp from 'HooksApp';

describe('Tests on <HooksApp />', () => {
  it('should show <HooksApp /> correctly', () => {
    const wrapper = shallow(<HooksApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
