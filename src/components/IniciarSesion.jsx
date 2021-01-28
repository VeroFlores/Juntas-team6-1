import { useHistory } from 'react-router-dom';
import React from 'react';
import {
  Button,
} from 'react-bootstrap';

const IniciarSesion = () => {
  const history = useHistory();
  function handleClick() {
    history.push('./dataClient');
  }
  return (
    <Button type="submit" onClick={handleClick} className="btn-prestamo-b12  btn btn-xm">
      Iniciar Sesión
    </Button>
  );
};

export default IniciarSesion;
