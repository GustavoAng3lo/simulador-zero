import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
  // 1. ESTADOS: Variáveis que o React monitora (Input e Lista)
  const [valor, setValor] = useState(0);
  const [odd, setOdd] = useState(1.50);
  const [historico, setHistorico] = useState([]);

  // 2. CÁLCULOS: Matemática simples
  const retorno = (valor * odd).toFixed(2);
  const lucro = (retorno - valor).toFixed(2);

  // 3. AÇÕES: O que os botões fazem
  function salvarAposta() {
    if (valor > 0) {
      // Cria um objeto simples e joga na lista
      const novaAposta = { id: Date.now(), v: valor, l: lucro };
      setHistorico([novaAposta, ...historico]);
    }
  }

  function limpar() {
    setValor(0);
    setOdd(1.50);
  }

  return (
    <div className="betpopov-container">
      <h1 className="betpopov-header">BETPOPOV</h1>

      {/* ENTRADAS */}
      <div className="input-section">
        <label className="input-label">VALOR (R$)</label>
        <input 
          type="number" 
          value={valor} 
          onChange={(e) => setValor(Number(e.target.value))} 
          className="input-field" 
        />
      </div>

      <div className="input-section">
        <label className="input-label">ODD</label>
        <input 
          type="number" 
          value={odd} 
          onChange={(e) => setOdd(Number(e.target.value))} 
          className="input-field" 
        />
      </div>

      {/* RESULTADOS VISUAIS */}
      <div className="results-section">
        <div className="result-card card-green">
          <span>RETORNO: R$ {retorno}</span>
        </div>
        <div className={`result-card ${lucro >= 0 ? 'card-green' : 'card-red'}`}>
          <span>LUCRO: R$ {lucro}</span>
        </div>
      </div>

      {/* BOTÕES */}
      <div className="btn-group">
        <button className="btn-confirmar" onClick={salvarAposta}>Confirmar</button>
        <button className="btn-reset" onClick={limpar}>Reset</button>
      </div>

      {/* HISTÓRICO (LISTA) */}
      <div className="historico-section">
        <p className="historico-title">HISTÓRICO</p>
        {historico.map(item => (
          <div key={item.id} className="historico-item">
            <span>R$ {item.v}</span>
            <span className={item.l >= 0 ? 'green-text' : 'red-text'}>
              R$ {item.l}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculadora;