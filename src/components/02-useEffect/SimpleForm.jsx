import { useEffect, useState } from 'react';

import Message from './Message';

const SimpleForm = () => {
  const [formState, setFromState] = useState({ name: '', email: '' });
  const { name, email } = formState;

  useEffect(() => {
    return () => {
      console.log('me fui');
    };
  }, []);

  useEffect(() => {}, [formState]);

  useEffect(() => {}, [email]);

  const handleInputChange = ({ target }) => {
    setFromState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <form className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="name"
          onChange={handleInputChange}
          placeholder="Your Name"
          type="text"
          value={name}
        />
        <input
          autoComplete="off"
          className="form-control mt-2"
          name="email"
          onChange={handleInputChange}
          placeholder="name@gmail.com"
          type="email"
          value={email}
        />
      </form>

      {name === '123' && <Message />}
    </>
  );
};

export default SimpleForm;
