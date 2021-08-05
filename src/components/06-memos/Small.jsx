import React from 'react';

const Small = ({ value }) => {
  console.log('Me volvi a llamar :C');
  return <small>{value}</small>;
};

export default React.memo(Small);
