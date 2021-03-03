import React, { useState, useCallback } from 'react';
import Age from './components/Age';
import AgeButton from './components/AgeButton';
import Count from './components/Count';
import CountButton from './components/CountButton';
import Title from './components/Title';

const App = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  return (
    <>
      <Title />
      <Count count={count} />
      <CountButton handleCount={incrementCount} />
      <Age age={age} />
      <AgeButton handleAge={incrementAge} />
    </>
  );
};

export default App;
