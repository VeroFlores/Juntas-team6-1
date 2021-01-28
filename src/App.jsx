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
  // const submitSecondForm = (info) => {
  //   console.log('info', info);
  // };
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
  const formInfoLocalStorage = JSON.parse(localStorage.getItem('formInfo') || '[]');
  const [formInfo, setformInfo] = useState(formInfoLocalStorage);

  useEffect(() => {
    localStorage.setItem('formInfo', JSON.stringify(formInfo));
  }, [formInfo]);

  const submitSecondForm = (info) => {
    if (info.length === 0) {
      const newformInfo = [info];
      console.log(newformInfo);
      setformInfo(newformInfo);
    } else {
      const newformInfo = [...formInfo];
      newformInfo.splice(0, formInfo.length);
      const newformInfox = [info];
      console.log(newformInfox);
      setformInfo(newformInfox);
    }
    // const newformDatax = [...formData];
    // newformDatax.splice(0, 1);
    // console.log('info', info);
    // const newformData = [...formData, info];
    // console.log(newformData);
    // setformData(newformData);
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
            <DataClient handleSubmitForm={handleSubmitForm} addformData={addformData} />
          </Route>
          <Route path="/selectBank">
            <SelectBank calculate={stateForm} formData={formData} />
          </Route>
          <Route path="/completed">
            <Completed handleSubmitForm={submitSecondForm} formData={formData} />
          </Route>
          <Route path="/Final">
            <Final formData={formData} formInfo={formInfo} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
