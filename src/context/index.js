import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    users: [
      { id: 1, name: 'Vadim' },
      { id: 2, name: 'David' },
      { id: 3, name: 'Luke' },
    ],
    active: true,
  };

  toggleActive = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          users: this.state.users,
          active: this.state.active,
          toggleActive: this.toggleActive,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
