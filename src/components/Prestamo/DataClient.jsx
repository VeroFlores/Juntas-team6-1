import React from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import FormSection from './Form';

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
  const { handleSubmitForm, addformData } = props;
  return (
    <>
      <section id="prestamos" className="padded">
        <Image src="https://susociodenegocios.com/wp-content/uploads/2019/02/mujer-duena-de-su-negocio.jpg" fluid />
        <div className="referenc">
          <p> Elige el Prestamo ideal para ti</p>
        </div>
        <div className="referenc2">
          <p className="hola">
            Accede a los beneficios de ser parte de la comunidad Juntas.
            Te recomendamos el préstamo que más te conviene.
          </p>
        </div>
      </section>
      <div className="containerAll">
        <div className="container">
          <ul className="progressBar">
            <li className="active"> Coloca tus datos</li>
            <li> Compara y elige</li>
            <li> Solicita</li>
            <li> Confirma y ¡listo!</li>
          </ul>
        </div>
      </div>
      <div className="formDiv">
        <FormSection handleSubmitForm={handleSubmitForm} addformData={addformData} />
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
  addformData: PropTypes.func.isRequired,
};
