import React from 'react';
import { MyContext } from '../context';
import UserItem from './UserItem';

class User extends React.Component {
  static contextType = MyContext;

  render() {
    return (
      <div>
        <UserItem />
      </div>
    );
  }
}

export default User;
