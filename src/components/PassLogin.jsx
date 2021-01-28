import { useHistory } from 'react-router-dom';
import React from 'react';
import {
  Button,
} from 'react-bootstrap';

const PassLogin = () => {
  const history = useHistory();
  function handleClick() {
    history.push('./login');
  }
  return (
    <Button type="submit" onClick={handleClick} className="btn-prestamo-b1  btn btn-xm">
      Acceder
    </Button>
  );
};

export default PassLogin;
