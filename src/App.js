import React from 'react';
import User from './components/User';
import { MyProvider } from './context';

const App = () => {
  return (
    <div>
      <MyProvider>
        <User />
      </MyProvider>
    </div>
  );
};

export default App;
