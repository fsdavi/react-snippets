import React from 'react'
import useInterval from './hooks/useInterval'
import useSearchParam from './hooks/useSearchParams'

function App() {
  const post = useSearchParam('post');

  const Timer = props => {
    const [seconds, setSeconds] = React.useState(0);
    useInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return <p>{seconds}</p>;
  };

  return (
    <div className="App">
      {/* {Timer()} */}

      {/* <p>Post param value: {post || 'null'}</p>
      <button
        onClick={() =>
          window.history.pushState({}, '', window.location.pathname + '?post=42')
        }
      >
        View post 42
      </button>
      <button onClick={() => window.history.pushState({}, '', window.location.pathname)}>
        Exit
      </button> */}
    </div>
  );
}

export default App;
