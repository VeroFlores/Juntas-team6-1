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
        <Image src="https://susociodenegocios.com/wp-content/uploads/2019/02/mujer-duena-de-su-negocio.jpg" fluid />
        <div className="referenc">
          <p> Elige el Prestamo ideal para ti</p>
        </div>
        <div className="referenc2">
          <p className="hola">
            Te recomendamos elegir el préstamo que más te convenga.
          </p>
        </div>
      </section>
      <div className="containerAll">
        <div className="container">
          <ul className="progressBar">
            <li className="active"> Coloca tus datos</li>
            <li> Selecciona el banco/tasa</li>
            <li> Proceso Exitoso</li>
            <li> Final</li>
          </ul>
        </div>
      </div>
      <div className="formDiv">
        <FormSection handleSubmitForm={handleSubmitForm} />
      </div>
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
