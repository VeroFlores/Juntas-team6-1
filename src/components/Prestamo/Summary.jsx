import React from 'react';

const Summary = () => {
  console.log('hello');
  return (
    <>
      <section className="summary-section">
        <h1>Datos de Solicitud</h1>
        <div>
          <p>Datos personales</p>
          <div>
            <p>Nombres y apellidos:</p>
            <p>Documento de identidad:</p>
            <p>Correo :</p>
            <p>Celular:</p>
            <p>Operador:</p>
            <p>Rubro:</p>
            <p>RUC:</p>
          </div>
        </div>
        <div>
          <p>Datos personales</p>
          <div>
            <p>Monto:</p>
            <p>Cuotas:</p>
            <p>Fecha de pago:</p>
            <p>Cuota:</p>
          </div>
        </div>
      </section>
    </>

  );
};
export default Summary;
