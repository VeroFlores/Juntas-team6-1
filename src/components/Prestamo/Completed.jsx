import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SecondForm from './SecondForm';

export function ButtonToSelect() {
  const history = useHistory();
  function handleClick() {
    history.push('/Final');
  }

  return (
    <button type="submit" onClick={handleClick}>
      Siguiente
    </button>
  );
}
const Completed = (props) => {

  const { handleSubmitForm, formData } = props;

  console.log('Paso 3  - Traer datos del formulario Paso 1:', formData);

  return (
    <>
      <section id="prestamos" className="padded">
        <Image src="https://susociodenegocios.com/wp-content/uploads/2019/02/mujer-duena-de-su-negocio.jpg" fluid />
        <h1> Prestamos</h1>
      </section>
      <div className="container">
        <ul className="progressBar">
          <li className="active"> Coloca tus datos</li>
          <li className="active"> Selecciona el banco/tasa</li>
          <li className="active"> Proceso Exitoso</li>
          <li> Final</li>
        </ul>
      </div>
      <h1>Completado</h1>

      <SecondForm handleSubmitForm={handleSubmitForm} />


      <div>
        <ButtonToSelect />
      </div>
    </>
  );
};
export default Completed;
Completed.propTypes = {
  // handleInputChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
    formData: PropTypes.shape.isRequired,

};
