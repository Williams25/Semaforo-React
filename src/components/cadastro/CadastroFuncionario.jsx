import React, { useState } from 'react'

import Form from './Form'
import Header from './Header'
import Label from './Label'
import Input from './Input'
import Button from './Button'

export default props => {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [salario, setSalario] = useState('')
  const [valida, setValida] = useState('')
  const [error, setError] = useState([])

  const Salvar = dados => {
    if (!localStorage['funcionario']) localStorage['funcionario'] = '[]'

    const funcionario = JSON.parse(localStorage['funcionario'])

    if (dados.email && dados.nome && dados.salario) {
      dados.id = new Date().getTime()
      funcionario.push(dados)
      localStorage['funcionario'] = JSON.stringify(funcionario)
      return true
    }
    return false
  }

  const validateNome = nome => {
    return nome.length !== 0 && nome.length <= 100;
  }

  const validateEmail = email => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
  }

  const validate = dados => {
    let errors = []
    if (!validateNome(dados.nome))
      errors.push("Nome inválido!");

    if (!validateEmail(dados.email)) {
      errors.push(" E-mail inválido!");
    }
    return errors;
  }

  const Submit = e => e.preventDefault()

  return (
    <div>
      <Header title="Cadastro de Funcionario" />
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

        <Label input="salario" text="Salario">
          <Input type="text" label="salario" value={salario}
            onchange={e => setSalario(e.target.value)}
          />
        </Label> <br /> <br />

        <Button title="Cadastrar" type="button" onclick={
          () => {
            setError(validate({ email, nome }))
            if (validate({ email, nome }).length === 0) {
              if (Salvar({ email, nome, salario })) {
                setEmail('')
                setNome('')
                setSalario('')
                setValida('Funcionario cadastrado com sucesso')
                setTimeout(() => {
                  setValida('')
                }, 5000)
              }
            } else {
              setValida('Preencha todos os campos')
              setTimeout(() => {
                setValida('')
                setError([''])
              }, 5000)
            }
          }
        } />
      </Form>
      <span>{valida}</span> <br />
      <span>{error}</span>
    </div>
  )
}