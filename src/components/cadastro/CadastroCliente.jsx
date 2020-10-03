import React, { useState } from 'react'

import Form from './Form'
import Header from './Header'
import Label from './Label'
import Input from './Input'
import Button from './Button'

export default props => {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [valida, setValida] = useState('')

  const Salvar = dados => {
    if (!localStorage['cliente']) localStorage['cliente'] = '[]'

    const cliente = JSON.parse(localStorage['cliente'])
    dados.id = new Date().getTime()

    if (dados?.email && dados?.nome) {
      cliente.push(dados)
      localStorage['cliente'] = JSON.stringify(cliente)
      return true
    }
    return false
  }

  const Submit = e => e.preventDefault()

  const cadastrar = () => {
    if (Salvar({ email, nome })) {
      setEmail('')
      setNome('')
      setValida('Cliente cadastrado com sucesso')
    } else {
      setValida('Preencha todos os campos')
    }
    setTimeout(() => {
      setValida('')
    }, 3000)
  }

  return (
    <div>
      <Header title="Cadastro de cliente" />
      <Form submit={Submit}>
        <Label input="email" text="Email">
          <Input type="email" label="email" value={email}
            onchange={e => setEmail(e.target.value)}
          />
        </Label> <br /> <br />

        <Label input="nome" text="Nome">
          <Input type="text" label="nome" value={nome}
            onchange={e => setNome(e.target.value)}
          />
        </Label> <br /> <br />

        <Button title="Cadastrar" type="button" onclick={cadastrar} />
      </Form>
      <span>{valida}</span>
    </div>
  )
}