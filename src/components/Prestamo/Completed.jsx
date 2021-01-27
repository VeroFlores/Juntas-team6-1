import React from 'react';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';

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
const Completed = () => (
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
    <div>
      <ButtonToSelect />
    </div>
  </>
);

export default Completed;
