import React, { useState } from 'react';
import './App.css'; // Import stylesheet
import series from './math'

const isNaturalNumber = (n) => {
  let n1 = Math.abs(n),
      n2 = parseInt(n, 10);
  return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isNaturalNumber(number)) {
      setResult(series(parseInt(number)))
    }
  };

  return (
    <div className="container">
      <h1>Ejercicio</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Ingresa un número natural:</label>
        <input
          id="nameInput"
          type="text"
          value={number}
          onChange={(event) => setNumber(event.target.value)}          
        />
        <button type="submit">Calcular</button>
      </form>
      <p>{result ? `El resultado es ${result}` : ''}</p>
    </div>
  );
}

export default App;