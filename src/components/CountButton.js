import React from 'react';

const CountButton = ({ handleCount }) => {
  return (
    <div>
      <button onClick={handleCount}>Increment the count</button>
    </div>
  );
};

export default React.memo(CountButton);
