import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../components/pages/Home'))
const Semaforo = lazy(() => import('../components/pages/Semaforo'));
const CadastroCliente = lazy(() => import('../components/pages/CadastroCliente'));
const CadastroFuncionario = lazy(() => import('../components/pages/CadastroFuncionario'));
const ListaCliente = lazy(() => import('../components/pages/ListaCliente'));
const ListaFuncionario = lazy(() => import('../components/pages/ListaFuncionario'));
const Contador = lazy(() => import('../components/pages/Contador'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/contador" component={Contador} />
        <Route path="/semaforo" component={Semaforo} />
        <Route path="/cadastrocliente" component={CadastroCliente} />
        <Route path="/cadastrofuncionario" component={CadastroFuncionario} />
        <Route exact path="/listaCliente" component={ListaCliente} />
        <Route exact path="/listaFuncionario" component={ListaFuncionario} />
      </Switch>
    </Suspense>
  </Router>
);

export default App