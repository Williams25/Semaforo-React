import React from 'react';
import Home from './Home'
import Header from '../cadastro/Header'
import ListaFuncionario from '../lista/ListaFuncionario'
export default props => {
  return (
    <div>
      <Home />
      <Header title="Lista funcionario" />
      <ListaFuncionario />
    </div>
  )
}