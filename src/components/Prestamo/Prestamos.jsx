import React from 'react';
import DataClient from './DataClient';

/* import SelectBank from './SelectBank'; */

/* import { ButtonToSelect } from './DataClient'; */

/* ButtonToSelect */

const Prestamos = () => (
  <>
    <h1>Prestamos</h1>
    <div className="container">
      <ul className="progressBar">
        <li className="active"> Coloca tus datos</li>
        <li> Selecciona el banco/tasa</li>
        <li> Proceso Exitoso</li>
      </ul>
    </div>
    <div className="formulario">
      <DataClient />
    </div>
  </>
);

export default Prestamos;
