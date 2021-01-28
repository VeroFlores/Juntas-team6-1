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
    <button type="submit" onClick={handleClick} className="">
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
          <p> Comparador de prestamos</p>
        </div>
        <div className="referenc2">
          <p className="hola">
            Angie,las tasa de interés son exclusivas de las comunidad Juntas.
            Elige la tasa que más te conviene.
          </p>
        </div>
        <div className="containerAll">
          <div className="container">
            <ul className="progressBar">
              <li className="active"> Rellena los datos</li>
              <li> Compara y elige</li>
              <li> Solicita</li>
              <li> Confirma</li>
            </ul>
          </div>
        </div>
        <div className="formDiv">
          <FormSection handleSubmitForm={handleSubmitForm} addformData={addformData} />
        </div>
        <div>
          <ButtonToSelect />
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
