/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Servicios from './components/Servicios';
import ViewMenu from './components/ViewMenu';
import DataClient from './components/Prestamo/DataClient';
import SelectBank from './components/Prestamo/SelectBank';
import Completed from './components/Prestamo/Completed';

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
          <Route path="/dataClient">
            <DataClient />
          </Route>
          <Route path="/selectBank">
            <SelectBank />
          </Route>
          <Route path="/completed">
            <Completed />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
