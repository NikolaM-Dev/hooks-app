import useCounter from 'hooks/useCounter';
import useFetch from 'hooks/useFetch';
// import useFetch from 'hooks/useFetch';

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter({ initialState: 1 });
  const { data, loading } = useFetch({
    url: `https://www.breakingbadapi.com/api/quotes/${counter}`,
  });

  const { quote, author } =
    !loading && data.length > 0
      ? data[0]
      : { quote: 'Quote not found', author: 'NN' };

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading && (
        <div className="alet alert-info text-center py-3">Loading...</div>
      )}

      {!loading && (
        <section>
          <blockquote className="blockquote text-end">
            <p className="mb-3">{quote}</p>
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
        </section>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
