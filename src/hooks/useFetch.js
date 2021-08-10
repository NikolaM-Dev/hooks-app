import { useEffect, useRef, useState } from 'react';

const useFetch = ({ url }) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      error: null,
      loading: true,
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current)
          setState({
            data,
            error: null,
            loading: false,
          });
      })
      .catch(() =>
        setState({
          data: null,
          error: 'The information could not be loaded',
          loading: false,
        })
      );
  }, [url]);

  return state;
};

export default useFetch;
