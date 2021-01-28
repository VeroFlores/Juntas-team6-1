import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Summary from './Summary';

const Final = (props) => {
  const { formData, formInfo, formBank } = props;
  console.log('Paso 4  - Traer datos del formulario Paso 2:', formBank);

  return (
    <>
      <section id="prestamos" className="padded">
        <Image src="https://susociodenegocios.com/wp-content/uploads/2019/02/mujer-duena-de-su-negocio.jpg" fluid />
        <div className="referenc">
          <p> Solicitud 100% Digital</p>
        </div>
        <p className="hola">
          Por favor completa el siguiente formulario,
          el banco se comunicará contigo para la gestión.
        </p>
        <p className="hola">
          *Nunca te pediremos claves de tus cuentas
        </p>
      </section>
      <div className="container">
        <ul className="progressBar">
          <li className="active"> Coloca tus datos</li>
          <li className="active"> Selecciona el banco/tasa</li>
          <li className="active"> Proceso Exitoso</li>
          <li className="active"> Final</li>
        </ul>
      </div>
      <Summary formData={formData} formInfo={formInfo} />
    </>
  );
};
export default Final;
Final.propTypes = {
  formData: PropTypes.shape.isRequired,
  formInfo: PropTypes.shape.isRequired,
  formBank: PropTypes.shape.isRequired,
};
