import React from 'react';

function Calculadora({ valor, setValor, odd, setOdd }) {
  const retornoBruto = (valor * odd).toFixed(2);
  const lucroLiquido = (retornoBruto - valor).toFixed(2);

  return (
    <div style={{ backgroundColor: '#1e1e1e', padding: '25px', borderRadius: '10px', width: '300px' }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block' }}>Valor da Aposta (R$):</label>
        <input 
          type="number" 
          value={valor} 
          onChange={(e) => setValor(Number(e.target.value))} 
          style={{ width: '100%', padding: '8px', backgroundColor: '#2c2c2c', color: 'white', border: '1px solid #333' }} 
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block' }}>Odd:</label>
        <input 
          type="number" 
          step="0.01" 
          value={odd} 
          onChange={(e) => setOdd(Number(e.target.value))} 
          style={{ width: '100%', padding: '8px', backgroundColor: '#2c2c2c', color: 'white', border: '1px solid #333' }} 
        />
      </div>
      <div style={{ borderTop: '1px solid #444', paddingTop: '15px' }}>
        <p>Retorno: <span style={{ color: '#00e676' }}>R$ {retornoBruto}</span></p>
        <p>Lucro: <span style={{ color: lucroLiquido > 0 ? '#00e676' : '#ff5252' }}>R$ {lucroLiquido}</span></p>
      </div>
    </div>
  );
}

export default Calculadora;