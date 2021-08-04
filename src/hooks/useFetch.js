import { useEffect, useState } from 'react';

const useFetch = ({ url }) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    setState({
      data: null,
      error: null,
      loading: true,
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setState({
          data,
          error: null,
          loading: false,
        })
      )
      .catch({
        data: null,
        error: true,
        loading: false,
      });
  }, [url]);

  return state;
};

export default useFetch;
