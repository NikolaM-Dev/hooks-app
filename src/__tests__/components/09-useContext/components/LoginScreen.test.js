import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import LoginScreen from 'components/09-useContext/components/LoginScreen';
import UserContext from 'components/09-useContext/UserContext';

describe('Tests on <LoginScreen /> component', () => {
  const setUser = jest.fn();

  let wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(
      <UserContext.Provider value={{ setUser }}>
        <LoginScreen />
      </UserContext.Provider>
    );
  });

  it('should show <LoginScreen /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should execute the setUser function with the expected argument', () => {
    wrapper.find('button').simulate('click');

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'Nikola',
      email: 'nikola@gamil.com',
    }); // User
    expect(setUser).toHaveBeenCalledTimes(1);
  });
});
