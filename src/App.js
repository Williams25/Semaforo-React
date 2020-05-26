import React from 'react';
import Semafaro from './components/semafaro/Semaforo.jsx'

function App() {
  return (
    <div className="App">
      <Semafaro TempoVermelho={10} TempoVerde={15} TempoAmarelo={5}/>
    </div>
  );
}

export default App;
