import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Servicios from './components/Servicios';
import ViewMenu from './components/ViewMenu';
import DataClient from './components/Prestamo/DataClient';
import SelectBank from './components/Prestamo/SelectBank';
import Completed from './components/Prestamo/Completed';
import { saveData } from './firebase/function';
import Final from './components/Prestamo/Final';
// import db from './firebase';

const App = () => {
  const [stateForm, setStateForm] = useState([]);
  const handleSubmitForm = (values) => {
    setStateForm([values]);
    saveData(values);
  };
  const submitSecondForm = (info) => {
    console.log(info);
  };
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
            <DataClient handleSubmitForm={handleSubmitForm} />
          </Route>
          <Route path="/selectBank">
            <SelectBank calculate={stateForm} />
          </Route>
          <Route path="/completed">
            <Completed handleSubmitForm={submitSecondForm} />
          </Route>
          <Route path="/Final">
            <Final />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
