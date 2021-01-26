import React from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import FormSection from './form';

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
const DataClient = (props) => {
  const { handleSubmitForm } = props;
  return (
    <>
      <section id="prestamos" className="padded">
        <Image src="https://pixabay.com/get/g405857ab00a26216c7b65963f23fb5c583004ecfa7cc1c23f252d665bab750013fb2a38bc667235faca0f2a184b7e6bdd0190ba037b1a8869eda9079c17fa9ab_1920.jpg" fluid />
        <h1> Prestamos</h1>
      </section>
      <div className="container">
        <ul className="progressBar">
          <li className="active"> Coloca tus datos</li>
          <li> Selecciona el banco/tasa</li>
          <li> Proceso Exitoso</li>
        </ul>
      </div>
      <>
        <h1 className="formulario">Formulario</h1>
        <FormSection handleSubmitForm={handleSubmitForm} />
      </>
      <div>
        <ButtonToSelect />
      </div>
    </>
  );
};

export default DataClient;
DataClient.propTypes = {
  // handleInputChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
};
