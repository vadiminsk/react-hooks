import React, { useContext } from 'react';
import { MyContext } from '../context';

const UserItem = () => {
  const context = useContext(MyContext);

  return (
    <div>
      {context.active
        ? context.users.map((item) => <div key={item.id}>{item.name}</div>)
        : 'Users not found'}
      <hr />
      <button onClick={context.toggleActive}>Toggle</button>
    </div>
  );
};

export default UserItem;
