import React, { useState } from 'react';

function App() {
  const [dolar, setDolar] = useState('');
  const [euro, setEuro] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    setRandomNumber(random);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Front - Conversão de Moedas</h1>
      <input
        type="text"
        placeholder="Preço do dólar"
        value={dolar}
        onChange={(e) => setDolar(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
      />
      <br />
      <input
        type="text"
        placeholder="Preço do euro"
        value={euro}
        onChange={(e) => setEuro(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
      />
      <br />
      <button onClick={generateRandomNumber} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Gerar número aleatório
      </button>
      <br />
      {randomNumber !== null && (
        <div style={{ marginTop: '20px' }}>
          <input
            type="text"
            value={`Número gerado: ${randomNumber}`}
            readOnly
            style={{ width: '200px', padding: '5px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
