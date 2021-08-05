import React from 'react';

const Son = ({ number, increment }) => {
  console.log('  Me volví a generar :(  ');

  return (
    <button className="btn btn-primary mx-2" onClick={() => increment(number)}>
      {number}
    </button>
  );
};

export default React.memo(Son);
