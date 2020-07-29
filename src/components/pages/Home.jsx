import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div>
      <Link to="/semaforo" className="button">Semaforo</Link> <br />
      <Link to="/contador" className="button">Contador</Link> <br />
      <Link to="/cadastrocliente" className="button">Cadastro cliente</Link> <br />
      <Link to="/cadastrofuncionario" className="button">Cadastro funcionario</Link> <br />
      <Link to="/listaCliente" className="button">Lista cliente</Link> <br />
      <Link to="/listaFuncionario" className="button">Lista funcionario</Link> <br />
    </div>
  )
}