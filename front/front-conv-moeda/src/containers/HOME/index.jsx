import React, { useState } from 'react';

function App() {
  const [dolar, setDolar] = useState('');
  const [euro, setEuro] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [conversionResult, setConversionResult] = useState('');

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    setRandomNumber(random);
  };

  const convertValue = async () => {
    if (randomNumber !== null) {
      try {
        const response = await fetch(`http://localhost:5000/converter-json?valor_orig=${randomNumber}`);
        const result = await response.text(); // Obtém o texto puro do retorno do endpoint
        setConversionResult(result);
      } catch (error) {
        console.error('Erro ao realizar a conversão:', error);
        setConversionResult('Erro ao realizar a conversão.');
      }
    } else {
      alert('Por favor, gere um número aleatório antes de converter.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', display: 'flex' }}>
      <div style={{ flex: '1' }}>
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
        <button onClick={convertValue} style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>
          Converter
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
      <div style={{ flex: '1', marginLeft: '20px' }}>
        <h2>Resultado da Conversão</h2>
        {conversionResult ? (
          <input
            type="text"
            value={conversionResult}
            readOnly
            style={{
              width: '200px',
              padding: '5px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        ) : (
          <p>Nenhum resultado disponível.</p>
        )}
      </div>
    </div>
  );
}

export default App;
