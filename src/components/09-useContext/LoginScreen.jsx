import { useContext } from 'react';

import UserContext from './UserContext';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () =>
    setUser({
      id: 123,
      name: 'Nikola',
      email: 'nikola@gamil.com',
    });

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </>
  );
};

export default LoginScreen;
