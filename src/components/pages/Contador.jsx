import React from 'react';
import Home from './Home'
import AcionaContador from '../contador/AcionaContador'
export default props => {
  return (
    <div>
      <Home />
      <AcionaContador />
      <AcionaContador contador={10} />
    </div>
  )
}