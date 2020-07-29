import React from 'react';
import Home from './Home'
import Header from '../cadastro/Header'
import ListaCliente from '../lista/ListaCliente'
export default props => {
  return (
    <div>
      <Home />
      <Header title="Lista cliente" />
      <ListaCliente />
    </div>
  )
}