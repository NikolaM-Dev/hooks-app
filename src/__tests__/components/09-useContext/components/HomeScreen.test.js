import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import HomeScreen from 'components/09-useContext/components/HomeScreen';
import UserContext from 'components/09-useContext/UserContext';

describe('Tests on <HomeScreen />', () => {
  const USER = {
    name: 'Nikola',
    email: 'nikola@gmail.com',
  };

  it('should show <HomeScreen /> correctly', () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user: USER }}>
        <HomeScreen />
      </UserContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
