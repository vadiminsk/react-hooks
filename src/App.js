import React, { useRef } from 'react';

const App = () => {
  const inputText = useRef();

  const triggerHandler = () => {
    console.log(inputText.current.value);
  };

  return (
    <div>
      <h1>Form:</h1>
      <InputComponent ref={inputText} />
      <button onClick={triggerHandler}>Trigger</button>
    </div>
  );
};

const InputComponent = React.forwardRef((props, ref) => {
  return <input type='text' ref={ref} />;
});

export default App;
