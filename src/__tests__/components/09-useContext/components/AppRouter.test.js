import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import AppRouter from 'components/09-useContext/components/AppRouter';
import UserContext from 'components/09-useContext/UserContext';

describe('Tests on <AppRouter /> component', () => {
  const USER = {
    id: 1,
    name: 'Nikola',
    email: 'nikola@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user: USER }}>
      <AppRouter />
    </UserContext.Provider>
  );

  it('should show <AppRouter /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should ', () => {});
});
