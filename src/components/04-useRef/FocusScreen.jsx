import { useRef } from 'react';

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="your name"
      />

      <button onClick={handleClick} className="btn btn-primary mt-3">
        Focus
      </button>
    </>
  );
};

export default FocusScreen;
