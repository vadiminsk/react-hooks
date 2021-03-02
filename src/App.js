import React, { useState } from 'react';

const App = ({ initialCount }) => {
  // let [count, setCount] = useState(initialCount);
  const [state, setState] = useState({
    count: initialCount,
    user: 'Vadim',
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'First post',
    },
    {
      id: 2,
      name: 'Second post',
    },
  ]);

  const addOne = () => {
    setState({
      ...state,
      count: state.count + 1,
    });
  };

  const minusOne = () => {
    setState({
      ...state,
      count: state.count - 1,
    });
  };

  const addOnePost = () => {
    let newPost = {
      id: 3,
      name: 'Third post',
    };

    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h3>{state.user}</h3>
      <h3>Count : {state.count}</h3>
      <button onClick={addOne}>Add one</button>
      <button onClick={minusOne}>Minus one</button>
      {/* <button onClick={() => setCount(initialCount)}>Reset</button> */}
      <hr />
      {posts.map((post) => {
        return <div key={post.id}>{post.name}</div>;
      })}
      <button onClick={addOnePost}>Add one more post</button>
    </div>
  );
};

export default App;
