import { useHistory } from 'react-router-dom';
import React from 'react';
import {
  Button,
} from 'react-bootstrap';

const PassCompleted = () => {
  const history = useHistory();
  function handleClick() {
    history.push('/selectBank');
  }
  return (
    <Button type="submit" onClick={handleClick} className="btn-prestamo-b  btn btn-xm">
      Comparar
    </Button>
  );
};

export default PassCompleted;
