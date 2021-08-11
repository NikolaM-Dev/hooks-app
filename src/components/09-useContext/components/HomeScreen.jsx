import { useContext } from 'react';

import UserContext from '../UserContext';

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Home Screen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};

export default HomeScreen;
