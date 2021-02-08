import React from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import Prestamos from './Prestamos';

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
const SelectBank = (props) => {
  const { calculate, formData, addBank } = props;
  console.log('Paso 2  - Traer datos del formulario Paso 1:', formData);
  console.log(calculate);
  return (
    <>
      <section id="prestamos" className="padded">
        <Image src="https://susociodenegocios.com/wp-content/uploads/2019/02/mujer-duena-de-su-negocio.jpg" fluid />
        <div className="referenc">
          <p> Comparador de Prestamos</p>
          <p> ----------------------- </p>
          <p className="hola">
            Las Tasas de interés son exclusivas de la
            comunidad Juntas. te recomendamos el prestamo
            que más de conviene.
          </p>
        </div>
      </section>
      <div className="container">
        <ul className="progressBar">
          <li className="active"> Coloca tus datos</li>
          <li className="active"> Selecciona el banco/tasa</li>
          <li> Proceso Exitoso</li>
          <li> Final</li>
        </ul>
      </div>
      <Prestamos calculate={calculate} formData={formData} addBank={addBank} />
      <div>
        <ButtonToSelect />
      </div>
    </>
  );
};

export default SelectBank;
SelectBank.propTypes = {
  calculate: PropTypes.shape.isRequired,
  formData: PropTypes.shape.isRequired,
  addBank: PropTypes.shape.isRequired,
};
