import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
  console.log(stateForm);

  // <-- Persistir Datos:
  const formDataLocalStorage = JSON.parse(localStorage.getItem('formData') || '[]');
  const [formData, setformData] = useState(formDataLocalStorage);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  console.log('Datos Ingresados - Paso 1:', formData);

  const addformData = (montoAdd, plazoAdd, ingresoAdd) => {
    if (formData.length === 0) {
      setformData([{
        moneda: 'Soles',
        monto: montoAdd,
        plazo: plazoAdd,
        ingreso: ingresoAdd,
      }]);
    } else {
      const newformData = [...formData];
      newformData.splice(0, formData.length);
      newformData.push(
        {
          moneda: 'Soles',
          monto: montoAdd,
          plazo: plazoAdd,
          ingreso: ingresoAdd,
        },
      );
      setformData(newformData);
    }
  };
  // -- --->

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
          <Route path="/dataClient">
            <DataClient handleSubmitForm={handleSubmitForm} addformData={addformData} />
          </Route>
          <Route path="/selectBank">
            <SelectBank calculate={stateForm} formData={formData} />
          </Route>
          <Route path="/completed">
            <Completed formData={formData} />
          </Route>
          <Route path="/Final">
            <Final formData={formData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
