import useCounter from 'hooks/useCounter';

import './CounterApp.css';

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter({
    initialState: 100,
  });

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />

      <button
        onClick={() => increment({ factor: 2 })}
        className="btn btn-primary "
      >
        + 1
      </button>
      <button
        onClick={() => decrement({ factor: 2 })}
        className="btn btn-secondary"
      >
        - 1
      </button>
      <button onClick={reset} className="btn">
        Reset
      </button>
    </>
  );
};

export default CounterWithCustomHook;
