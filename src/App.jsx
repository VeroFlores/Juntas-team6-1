/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Servicios from './components/Servicios';
import ViewMenu from './components/ViewMenu';
import Prestamos from './components/Prestamos';
// import db from './firebase';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ViewMenu />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/servicios">
            <Servicios />
          </Route>
          <Route path="/prestamos">
            <Prestamos />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
