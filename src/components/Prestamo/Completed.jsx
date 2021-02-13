import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import SecondForm from './SecondForm';

const Completed = (props) => {
  const { handleSubmitForm, formData } = props;
  console.log('Paso 3  - Traer datos del formulario Paso 1:', formData);

  return (
    <>
      <section id="prestamos" className="padded">
        <Image src="https://susociodenegocios.com/wp-content/uploads/2019/02/mujer-duena-de-su-negocio.jpg" fluid />
        <div className="referenc">
          <h1 className="h3"> Solicitud 100% Digital</h1>
        </div>
        <div className="referenc2">
          <p className="hola">
            Por favor completa el siguiente formulario,
            el banco se comunicará contigo para la gestión.
          </p>
        </div>
        <p className="hola">
          *Nunca te pediremos claves de tus cuentas
        </p>
      </section>
      <div className="containerAll">
        <div>
          <ul className="progressBar">
            <li className="active"> Coloca tus datos</li>
            <li className="active"> Selecciona el banco/tasa</li>
            <li className="active"> Proceso Exitoso</li>
            <li> Final</li>
          </ul>
          <SecondForm handleSubmitForm={handleSubmitForm} />
        </div>
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
