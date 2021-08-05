import React from 'react';

const ShowIncrement = ({ increment }) => {
  console.log('Me volvi a generar');

  return (
    <button onClick={() => increment()} className="btn btn-primary">
      increment
    </button>
  );
};

export default React.memo(ShowIncrement);
