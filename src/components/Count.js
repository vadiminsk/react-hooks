import React from 'react';

const Count = ({ count }) => {
  return (
    <div>
      <h3>The count is: {count}</h3>
    </div>
  );
};

export default React.memo(Count);
