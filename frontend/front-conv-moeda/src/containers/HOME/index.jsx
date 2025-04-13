import React, { useState } from 'react';

function App() {
  const [dolar, setDolar] = useState('');
  const [euro, setEuro] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [conversionResult, setConversionResult] = useState(null); // Alterado para armazenar o JSON como objeto

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    setRandomNumber(random);
  };

  const convertValue = async () => {
    if (randomNumber !== null) {
      try {
        const response = await fetch(
          `http://localhost:5000/converter-json?valor_orig=${randomNumber}`
        );
        const result = await response.json(); // Faz o parse do retorno para JSON
        setConversionResult(result);
      } catch (error) {
        console.error('Erro ao realizar a conversão:', error);
        setConversionResult({ error: 'Erro ao realizar a conversão.' });
      }
    } else {
      alert('Por favor, gere um número aleatório antes de converter.');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
      }}
    >
      <div style={{ flex: '1' }}>
        <button
          onClick={generateRandomNumber}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Gerar valor aleatório
        </button>
        <br></br>
        <br></br>
        <button
          onClick={convertValue}
          style={{
            padding: '10px 20px',
            marginLeft: '10px',
            cursor: 'pointer',
          }}
        >
          Converter
        </button>        
        <br />
        {randomNumber !== null && (
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              value={`Número gerado: ${randomNumber}`}
              readOnly
              style={{
                width: '200px',
                padding: '5px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
        )}
      </div>
      <div style={{ flex: '1', marginLeft: '20px' }}>
        <h2>Resultado da Conversão</h2>
        {conversionResult ? (
          <div
            style={{
              maxWidth: '500px',
              padding: '10px',
              backgroundColor: '#f8f8f8',
              border: '1px solid #ccc',
              borderRadius: '5px',
              whiteSpace: 'pre-wrap', // Permite que o texto quebre linhas
            }}
          >
            {conversionResult.error ? (
              <p>{conversionResult.error}</p>
            ) : (
              <>
                <p>Valor em Real: {conversionResult['Valor em Real']}</p>
                <p>Valor em Euro: {conversionResult['Valor em Euro']}</p>
                <p>Valor em Dólar: {conversionResult['Valor em Dólar']}</p>
              </>
            )}
          </div>
        ) : (
          <p>Nenhum resultado disponível.</p>
        )}
      </div>
    </div>
  );
}

export default App;
