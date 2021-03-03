import React from 'react';

const AgeButton = ({ handleAge }) => {
  return (
    <div>
      <button onClick={handleAge}>Increment the count</button>
    </div>
  );
};

export default React.memo(AgeButton);
