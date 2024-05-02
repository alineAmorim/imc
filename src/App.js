import { useState } from 'react';
import './app.css'


function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
    const alt = altura / 100;
    const imc = (peso / (alt * alt)).toFixed(2);

    if(imc < 18.5){
      setMensagem("IMC: "+imc+ " (Abaixo do peso)");
    }else if(imc >= 18.5 && imc < 25){
      setMensagem("IMC: "+imc+ " (Peso normal)");
    }else if(imc >= 25 && imc < 29.99){
      setMensagem("IMC: "+imc+ " (Pré-Obesidade)");
    }else if(imc >= 30 && imc < 34.99){
      setMensagem("IMC: "+imc+ " (Obesidade Grau I)");
    }else if(imc >= 35 && imc < 39.99){
      setMensagem("IMC: "+imc+ " (Obesidade Grau II)");
    }else if(imc >= 40){
      setMensagem("IMC: "+imc+ " (Obesidade Grau III)");
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-input">
        <input 
          type="number" 
          placeholder="Informe o peso em (kg) Ex: 90" 
          value={peso}
          onChange={ (e) => setPeso(e.target.value) }
        />
        <input 
          type="number" 
          placeholder="Informe a altura em (cm) Ex: 180" 
          value={altura}
          onChange={ (e) => setAltura(e.target.value) }
          />
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  );
}

export default App;
