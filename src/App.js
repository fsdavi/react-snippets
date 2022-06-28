import React from 'react';
import useInterval from './hooks/useInterval'

function App() {

  const Timer = props => {
    const [seconds, setSeconds] = React.useState(0);
    useInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return <p>{seconds}</p>;
  };

  return (
    <div className="App">
      {Timer()}
    </div>
  );
}

export default App;
