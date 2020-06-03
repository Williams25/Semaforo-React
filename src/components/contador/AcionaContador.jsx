import React, { useState } from 'react'
import Contador from './Contador'
import './css/index.css'

export default props => {
  const [contador, setContador] = useState(props.contador)

  const somarContador = (() => {
    setContador(contador => contador += 1)
  })

  const subtrairContador = (() => {
    if (contador >= 1) setContador(contador => contador -= 1)
  })

  return (
    <center className="container">
      <button onClick={subtrairContador}>-</button>
      <Contador contador={contador} />
      <button onClick={somarContador}>+</button>
    </center>
  )
}