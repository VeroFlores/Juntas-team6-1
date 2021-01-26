/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Servicios from './components/Servicios';
import ViewMenu from './components/ViewMenu';
import Prestamos from './components/Prestamos';
import saveData from './firebase/function';
// import db from './firebase';

const App = () => {
  const [stateForm, setStateForm] = useState([]);
  const handleSubmitForm = (values) => {
    setStateForm([values]);
    saveData(values);
  };
  console.log(stateForm);
  return (
    <div className="App">
      <BrowserRouter>
        <ViewMenu />
        <Switch>
          <Route path="/" exact>
            <Home handleSubmitForm={handleSubmitForm} />
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
};

export default App;
