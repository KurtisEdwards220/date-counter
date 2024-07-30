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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ marginRight: '10px', width: '300px', height: '10px' }}
        />
        <span style={{ fontSize: '20px' }}>{step}</span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <button
          onClick={() => setCount(count - step)}
          style={{ fontSize: '20px', padding: '10px 20px' }}
        >
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          style={{ margin: '0 10px', width: '100px', fontSize: '20px' }}
        />
        <button
          onClick={() => setCount(count + step)}
          style={{ fontSize: '20px', padding: '10px 20px' }}
        >
          +
        </button>
      </div>

      <div
        style={{
          textAlign: 'center',
          fontSize: '26px',
          fontWeight: 'bold',
          marginTop: '20px',
        }}
      >
        {count} days from today is{' '}
        {new Date(Date.now() + count * 24 * 60 * 60 * 1000).toDateString()}
      </div>
      <div>
        <button
          onClick={handleReset}
          style={{ fontSize: '20px', padding: '10px 20px', marginTop: '20px' }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
