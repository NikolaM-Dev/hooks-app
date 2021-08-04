import { useState } from 'react';

const useCounter = ({ initialState = 10 } = {}) => {
  const [counter, setCounter] = useState(initialState);

  const increment = ({ factor = 1 }) => setCounter((state) => state + factor);

  const decrement = ({ factor = 1 }) => setCounter((state) => state - factor);

  const reset = () => setCounter(initialState);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
