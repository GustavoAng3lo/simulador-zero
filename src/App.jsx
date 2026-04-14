import React, { useState } from 'react';
import Calculadora from './components/Calculadora';

function App() {
  const [valorAposta, setValorAposta] = useState(0);
  const [oddEvento, setOddEvento] = useState(1.50);

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: '#00e676', marginBottom: '20px' }}>Bet Simulator 📊</h1>
      <Calculadora 
        valor={valorAposta} 
        setValor={setValorAposta} 
        odd={oddEvento} 
        setOdd={setOddEvento} 
      />
    </div>
  );
}

export default App;
