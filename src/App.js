import React from 'react';
import Semafaro from './components/semafaro/Semaforo.jsx'
import AcionaContador from './components/contador/AcionaContador'
function App() {
  return (
    <div className="App">
      <Semafaro TempoVermelho={10} TempoVerde={15} TempoAmarelo={5}/>
      <AcionaContador contador={0}/>
      <AcionaContador contador={5}/>
      <AcionaContador contador={10}/>
    </div>
  );
}

export default App;
