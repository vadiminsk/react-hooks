import React, { useContext } from 'react';
import { MyContext } from '../context';

const UserItem = () => {
  const context = useContext(MyContext);

  return <div>User item</div>;
};

export default UserItem;
