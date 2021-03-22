import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    users: [
      { id: 1, name: 'Vadim' },
      { id: 2, name: 'David' },
      { id: 3, name: 'Luke' },
    ],
  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
