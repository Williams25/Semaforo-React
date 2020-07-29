import React from 'react';
import Home from './Home'
import Semafaro from '../semafaro/Semaforo.jsx'
export default props => {
  return (
    <div>
      <Home />
      <Semafaro TempoVermelho={10} TempoVerde={15} TempoAmarelo={5} />
    </div>
  )
}