import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button onClick={() => setStep(step > 1 ? step - 1 : 1)}>-</button>
        <div>Step: {step}</div>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button onClick={() => setCount(count - step)}>-</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>

      <div>
        {count} days from today is{' '}
        {new Date(Date.now() + count * 24 * 60 * 60 * 1000).toDateString()}
      </div>
    </>
  );
}

export default App;
