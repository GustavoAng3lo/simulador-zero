import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora({ valor, setValor, odd, setOdd }) {
  const [historico, setHistorico] = useState([]);

  const retornoBruto = (valor * odd).toFixed(2);
  const lucroLiquido = (retornoBruto - valor).toFixed(2);

  const handleConfirmar = () => {
    if (valor <= 0) return;
    
    const novaEntrada = {
      id: Date.now(),
      v: valor.toFixed(2),
      l: lucroLiquido
    };
    
    setHistorico([novaEntrada, ...historico]);
  };

  const handleReset = () => {
    setValor(0);
    setOdd(1.50);
  };

  return (
    <div className="betpopov-container">
      <div className="betpopov-header">BETPOPOV</div>

      <div className="input-section">
        <label className="input-label">VALOR DA APOSTA (R$)</label>
        <input 
          type="number" 
          value={valor} 
          onChange={(e) => setValor(Number(e.target.value))} 
          className="input-field" 
        />
      </div>

      <div className="input-section">
        <label className="input-label">ODD (COEFICIENTE)</label>
        <input 
          type="number" 
          step="0.01" 
          value={odd} 
          onChange={(e) => setOdd(Number(e.target.value))} 
          className="input-field" 
        />
      </div>

      <div className="results-section">
        <div className="result-card card-green">
          <div className="result-header">RETORNO</div>
          <div className="result-value green-text">R$ {retornoBruto}</div>
        </div>
        <div className={`result-card ${lucroLiquido >= 0 ? 'card-green' : 'card-red'}`}>
          <div className="result-header">LUCRO LÍQUIDO</div>
          <div className={`result-value ${lucroLiquido >= 0 ? 'green-text' : 'red-text'}`}>R$ {lucroLiquido}</div>
        </div>
      </div>

      <div className="btn-group">
        <button className="btn-confirmar" onClick={handleConfirmar}>Confirmar</button>
        <button className="btn-reset" onClick={handleReset}>Reset</button>
      </div>

      {historico.length > 0 && (
        <div className="historico-section">
          <div className="historico-title">HISTÓRICO RECENTE</div>
          {historico.map(item => (
            <div key={item.id} className="historico-item">
              <span>Aposta: <b>R$ {item.v}</b></span>
              <span className={item.l >= 0 ? 'green-text' : 'red-text'}>
                Lucro: <b>R$ {item.l}</b>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Calculadora;