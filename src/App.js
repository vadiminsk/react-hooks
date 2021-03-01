import React, { useState } from 'react';

const App = ({ initialCount }) => {
  let [count, setCount] = useState(initialCount);

  const addOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={addOne}>Add one</button>
      <button onClick={minusOne}>Minus one</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
};

export default App;
