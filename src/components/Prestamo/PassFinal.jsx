import { useHistory } from 'react-router-dom';
import React from 'react';

const PassFinal = () => {
  const history = useHistory();
  function handleClick() {
    history.push('/Completed');
  }
  return (
    <button type="submit" onClick={handleClick} className="btn-prestamo-b  btn btn-xm">
      Siguiente
    </button>
  );
};

export default PassFinal;
