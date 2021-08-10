import { useState, useCallback } from 'react';

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = useCallback(
    (factor = 1) => setCounter((prevCounter) => prevCounter + factor),
    []
  );

  const decrement = useCallback(
    (factor = 1) => setCounter((prevCounter) => prevCounter - factor),
    []
  );

  const reset = useCallback(() => setCounter(initialState), [initialState]);

  return { counter, increment, decrement, reset };
};

export default useCounter;
