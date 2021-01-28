import React from 'react';
import PropTypes from 'prop-types';

const Summary = (props) => {
  console.log('hello');
  const { formData, formInfo } = props;
  console.log('Paso 4  - Traer datos del formulario Paso 1:', formData[0]);
  console.log('Paso 4  - Traer datos del formulario Paso 3:', formInfo[0]);
  // eslint-disable-next-line max-len
  const montoTotalPagar = (amount, rates) => parseInt(amount, 10) + parseInt((amount * (rates / 100)), 10);

  const cuota = (totalAmount, time) => parseInt((totalAmount / time), 10);
  return (
    <>
      <section className="summary-section">
        <h1>Datos de Solicitud</h1>
        <div>
          <p>Datos personales</p>
          <div>
            <p>
              Nombres y apellidos:
              {formInfo[0].name}
            </p>
            <p>
              Documento de identidad:
              {formInfo[0].dni}
            </p>
            <p>Correo :</p>
            <p>
              Celular:
              {formInfo[0].celular}
            </p>
            <p>
              Operador:
              {formInfo[0].operador}
            </p>
            <p>
              Rubro:
              {formInfo[0].rubro}
            </p>
            <p>RUC:</p>
          </div>
        </div>
        <div>
          <p>Datos personales</p>
          <div>
            <p>
              Monto:
              {formData[0].monto}
            </p>
            <p>
              Nro. Cuotas:
              {formData[0].plazo}
            </p>
            <p>
              Fecha de pago:
              {formInfo[0].fechaPago}
            </p>
            <p>
              Valor de Cuota:
              {cuota(montoTotalPagar(formData[0].monto, 14.94), formData[0].plazo)}
            </p>
          </div>
        </div>
        <div>
          <p>Datos para el abono</p>
          <div>
            <p>Cuenta :  BBVA</p>
            <p>
              Nro. de cuenta:
              {formInfo[0].cuenta}
            </p>
          </div>
        </div>
      </section>
    </>

  );
};
export default Summary;
Summary.propTypes = {
  formData: PropTypes.shape.isRequired,
  formInfo: PropTypes.shape.isRequired,
};
