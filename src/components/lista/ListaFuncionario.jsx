import React, { useState } from 'react'
import Lista from './Lista'
import Button from '../cadastro/Button'

export default props => {

  const listaStorage = () => {
    try {
      if (!localStorage['funcionario']) localStorage['funcionario'] = '[]'
      return JSON.parse(localStorage['funcionario'])
    } catch (error) {
      return localStorage['funcionario'] = '[]'
    }
  }

  const [funcionario, setFuncionario] = useState(listaStorage() || [])

  const recuperaStorage = () => setFuncionario(listaStorage)

  const apagaStorage = index => {
    const funcionario = JSON.parse(localStorage['funcionario'])
    funcionario.splice(index, 1)
    localStorage['funcionario'] = JSON.stringify(funcionario)
    setFuncionario(funcionario)
  }

  const lista = funcionario.map((item, index) => {
    return (
      <li key={item.id}>
        E-mail: {item.email} - Nome: {item.nome} - Salario: {item.salario}
        <br />
        <Button type="button" title="Apagar"
          onclick={() => {
            apagaStorage(index)
          }}
        />
      </li>
    )
  })

  return (
    <Lista onchange={recuperaStorage}>
      {lista}
    </Lista>
  )
}