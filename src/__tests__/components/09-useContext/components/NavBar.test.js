import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import NavBar from 'components/09-useContext/components/NavBar';

describe('Tests on <NavBar /> component', () => {
  it('should show <NavBar /> correclty', () => {
    const wrapper = shallow(<NavBar />);
    const navLinks = wrapper.find('NavLink');

    expect(wrapper).toMatchSnapshot();
    expect(navLinks).toHaveLength(3);
  });
});
