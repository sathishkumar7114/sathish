import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <p>Roll Number: 2211CS010413</p>
        <p>Name: N SATHISH KUMAR</p>
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > -5) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={handleDecrement} disabled={count === -5}>Decrement</button>
        <button onClick={handleIncrement} disabled={count === 5}>Increment</button>
      </div>
      {count === -5 || count === 5 ? <p className="message">Counter cannot go beyond -5 and +5</p> : null}
    </div>
  );
}

export default App;