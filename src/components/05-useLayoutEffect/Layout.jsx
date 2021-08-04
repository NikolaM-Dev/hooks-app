import useCounter from 'hooks/useCounter';
import useFetch from 'hooks/useFetch';
import { useLayoutEffect, useRef, useState } from 'react';
// import useFetch from 'hooks/useFetch';

import './Layout.css';

const Layout = () => {
  const { counter, increment, decrement } = useCounter({ initialState: 1 });
  const { data } = useFetch({
    url: `https://www.breakingbadapi.com/api/quotes/${counter}`,
  });

  const { quote, author } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <section>
        <blockquote className="blockquote text-end">
          <p ref={pTag} className="mb-3">
            {quote}
          </p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
        <div className="d-flex justify-content-between">
          <button onClick={decrement} className="btn btn-primary">
            Previus quote
          </button>
          <button onClick={increment} className="btn btn-primary">
            Next quote
          </button>
        </div>

        <pre className="mt-3">{JSON.stringify(boxSize, null, 3)}</pre>
      </section>
    </>
  );
};

export default Layout;
