import { useEffect } from 'react';

import useForm from 'hooks/useForm';

const FormWithCustomHook = () => {
  const { values: formValues, handleInputChange } = useForm({
    initialState: {
      name: '',
      email: '',
      password: '',
    },
  });
  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('Email cambio');
  }, [email]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />

      <form onSubmit={handleSubmit} className="form-group">
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
        <input
          className="form-control mt-2"
          name="password"
          onChange={handleInputChange}
          placeholder="********"
          type="password"
          value={password}
        />

        <button type="submit" className="btn btn-primary mt-2">
          Guardar
        </button>
      </form>
    </>
  );
};

export default FormWithCustomHook;
