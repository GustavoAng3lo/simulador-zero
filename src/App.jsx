import React, { useState } from 'react';
import Calculadora from './components/Calculadora';

function App() {
  const [valorAposta, setValorAposta] = useState(0);
  const [oddEvento, setOddEvento] = useState(1.50);

  return (
    <div style={{ 
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
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