import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^[0-9+\-*/.]*$/.test(value)) {
      setNumber(value);
    }
  };

  const handleEqual = () => {
    try {
      setNumber(eval(number).toString());
    } catch (error) {
      setNumber('Error');
    }
  };

  const handleClear = () => {
    setNumber('');
  };

  return (
    <div>
      <h1>Calculator</h1>
      <p>Please Make your calculations here:</p>
      <input
        type="text"
        value={number}
        onChange={handleInputChange}
        className="display"
      />
      <button onClick={() => handleEqual()}>Calculate</button>
      <button onClick={() => setNumber(number.slice(0, -1))}>Delete</button>
      <button onClick={handleClear}>Clear</button>
      <h1 className="answer"></h1>
    </div>
  );
}

export default App;
