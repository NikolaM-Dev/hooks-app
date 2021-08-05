import { useMemo, useState } from 'react';

import heavyProcess from 'helpers/heavyProcess';
import useCounter from 'hooks/useCounter';

const MemoHook = () => {
  const { counter, increment } = useCounter({ initialState: 500 });
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <>
      <h1>Memo Hook</h1>
      <h2>Counter: {counter}</h2>
      <hr />

      <p>{memoHeavyProcess}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button className="btn btn-secondary" onClick={handleClick}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
