import React, { useState } from 'react'
import Lista from './Lista'
import Button from '../cadastro/Button'

export default props => {

  const listaStorage = () => {
    try {
      if (!localStorage['cliente']) localStorage['cliente'] = '[]'
      return JSON.parse(localStorage['cliente'])
    } catch (error) {
      return localStorage['cliente'] = '[]'
    }
  }
  
  const [cliente, setCliente] = useState(listaStorage() || [])

  const recuperaStorage = () => setCliente(listaStorage)

  const apagaStorage = index => {
    const cliente = JSON.parse(localStorage['cliente'])
    cliente.splice(index, 1)
    localStorage['cliente'] = JSON.stringify(cliente)
    setCliente(cliente)
  }

  const lista = cliente.map((item, index) => {
    return (
      <li key={item.id}>
        E-mail: {item.email} - Nome: {item.nome}
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