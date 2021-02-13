import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import FormSection from './Form';

const DataClient = (props) => {
  const { handleSubmitForm, addformData } = props;
  return (
    <>
      <section id="prestamos" className="padded">
        <Image src="https://susociodenegocios.com/wp-content/uploads/2019/02/mujer-duena-de-su-negocio.jpg" fluid />
        <div className="referenc">
          <h1 className="h3"> Comparador de préstamos</h1>
        </div>
        <div>
          <p className="hola">
            Angie,las tasa de interés son exclusivas de las comunidad Juntas.
            Elige la tasa que más te conviene.
          </p>
        </div>
        <div className="containerAll">
          <div>
            <ul className="progressBar">
              <li className="active"> Rellena los datos</li>
              <li> Compara y elige</li>
              <li> Solicita</li>
              <li> Confirma</li>
            </ul>
          </div>
        </div>
        <div className="col-10 col-sm-6 col-lg-4 formDiv mb-3">
          <FormSection handleSubmitForm={handleSubmitForm} addformData={addformData} />
        </div>
      </section>

    </>
  );
};

export default DataClient;
DataClient.propTypes = {
  // handleInputChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  addformData: PropTypes.func.isRequired,
};
