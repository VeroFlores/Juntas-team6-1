import React from 'react';
import { useHistory } from 'react-router-dom';

export function ButtonToSelect() {
  const history = useHistory();
  function handleClick() {
    history.push('/Completed');
  }

  return (
    <button type="submit" onClick={handleClick}>
      Siguiente
    </button>
  );
}
const SelectBank = () => (
  <>
    <h1>Prestamos</h1>
    <div className="container">
      <ul className="progressBar">
        <li className="active"> Coloca tus datos</li>
        <li className="active"> Selecciona el banco/tasa</li>
        <li> Proceso Exitoso</li>
      </ul>
    </div>
    <h1 className="formulario">SelectBank</h1>
    <div>
      <ButtonToSelect />
    </div>
  </>
);

export default SelectBank;
