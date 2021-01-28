/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import {
  Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { getData, getRate } from '../../firebase/function';

const Prestamos = (props) => {
  const { calculate, formData } = props;
  const [data, setData] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    getData((arrObj) => {
      setData(arrObj);
      console.log(arrObj);
    });
    getRate((rates) => {
      setRate(rates);
    });
  }, []);
  console.log(data);
  console.log(rate);
  console.log(calculate);

  // const intereses = () => {
  //   // monto inicial * totalTasa
  // };
  console.log(calculate[0]);
  const montoTotalPagar = (amount, rates) => parseInt(amount, 10) + parseInt((amount * (rates / 100)), 10);

  const cuota = (totalAmount, time) => parseInt((totalAmount / time), 10);
  console.log(montoTotalPagar(5000, 18));
  console.log(typeof (montoTotalPagar(5000, 18)));
  console.log(cuota(montoTotalPagar(5000, 18), 18));

  return (
    <>
      <section id="listTasas" className="padded">
        <div className="containerListBank">
          <Row className="listTasasHeader">
            <Col xs="12"> </Col>
            <Col>
              {' '}
              Valor Cuota
              <br />
              <FontAwesomeIcon icon={faSort} />
            </Col>
            <Col>
              {' '}
              TCEA
              <br />
              <FontAwesomeIcon icon={faSort} />
            </Col>
            <Col>
              {' '}
              Pago Total
              <br />
              <FontAwesomeIcon icon={faSort} />
            </Col>
            <Col xs="12"> </Col>
          </Row>
          <Row className="listTasasEntidad">
            { // cambie calculate por formData --- Clari!
                formData.length > 0
                  ? rate.map((ra) => (
                    <>
                      <Col xs="12 listBank">
                        {ra.name}
                      </Col>
                      <Col>
                        {' '}
                        {cuota(montoTotalPagar(formData[0].monto, ra.tasa), formData[0].plazo)}
                      </Col>
                      <Col>
                        {' '}
                        {ra.tasa}
                        %
                      </Col>
                      <Col>
                        {' '}
                        { montoTotalPagar(formData[0].monto, ra.tasa)}
                        {' '}
                      </Col>
                      <Col xs="12 listBankHorario">
                        <b> Horario: Lun - Sab 8:00am a 8:00pm </b>
                      </Col>
                      <Col xs="12">
                        <div className="btnListTasas container  h-100">
                          <div className="d-flex h-100">
                            <div className="align-self-center mx-auto">
                              <button type="button" className="btn-prestamo-c btn btn-xm"> + </button>
                              {
                  ra.recomendado === 'si'
                    ? <b>Juntas recomienda </b>
                    : <p> </p>
                }
                              <button type="button" className="btn-prestamo-b  btn btn-xm">Lo quiero</button>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Col>
                    </>
                  ))
                  : (
                    <Col xs="12">
                      <b> No hay datos para comparar </b>
                    </Col>
                  )
}
          </Row>
        </div>
      </section>
    </>
  );
};
export default Prestamos;
Prestamos.propTypes = {
  calculate: PropTypes.shape.isRequired,
  formData: PropTypes.shape.isRequired,
};
