import { useState } from 'react';

import Small from './Small';
import useCounter from 'hooks/useCounter';

const Memorize = () => {
  const { counter, increment } = useCounter({ initialState: 10 });
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button className="btn btn-secondary" onClick={handleClick}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default Memorize;
