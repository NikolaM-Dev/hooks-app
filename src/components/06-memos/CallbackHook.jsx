import { useCallback, useEffect, useState } from 'react';

import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num = 1) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {
    // ????
  }, [increment]);

  return (
    <>
      <h1>useCallback Hook</h1>
      <hr />
      <p>{counter}</p>
      <ShowIncrement increment={increment} />
    </>
  );
};

export default CallbackHook;
