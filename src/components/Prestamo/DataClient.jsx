import React from 'react';
import { useHistory } from 'react-router-dom';

export function ButtonToSelect() {
  const history = useHistory();
  function handleClick() {
    history.push('/selectBank');
  }

  return (
    <button type="submit" onClick={handleClick}>
      Empezar
    </button>
  );
}
const DataClient = () => (
  <>
    <>
      <h1 className="formulario">Formulario</h1>
    </>
    <div>
      <ButtonToSelect />
    </div>
  </>
);

export default DataClient;
