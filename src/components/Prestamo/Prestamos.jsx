import React, { useState, useEffect } from 'react';
import {
  Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { getData, getRate } from '../../firebase/function';

const Prestamos = (props) => {
  const { calculate } = props;
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
  return (
    <>
      <section id="listTasas" className="padded">
        <div className="container">
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
            <Col xs="12 listBank">
              {' '}
              BBVA
            </Col>
            <Col> S/.280 </Col>
            <Col> 14.94% </Col>
            <Col> S/.11,040 </Col>
            <Col xs="12 listBankHorario">
              <p> Horario: Lun - Sab 8:00am a 8:00pm</p>
            </Col>
            <Col xs="12">
              <div className="btnListTasas container  h-100">
                <div className="d-flex h-100">
                  <div className="align-self-center mx-auto">
                    <button type="button" className="btn-prestamo-c btn btn-xm"> + </button>
                    <button type="button" className="btn-prestamo-a btn btn-xm">Juntas recomienda</button>
                    <button type="button" className="btn-prestamo-b  btn btn-xm">Lo quiero</button>
                  </div>
                </div>
              </div>
              <hr />
            </Col>

            <Col xs="12 listBank">
              {' '}
              Banco de la Nación
            </Col>
            <Col> S/.280 </Col>
            <Col> 14.94% </Col>
            <Col> S/.11,040 </Col>
            <Col xs="12 listBankHorario">
              <p> Horario: Lun - Sab 8:00am a 8:00pm</p>
            </Col>
            <Col xs="12">
              <div className="btnListTasas container  h-100">
                <div className="d-flex h-100">
                  <div className="align-self-center mx-auto">
                    <button type="button" className="btn-prestamo-c btn btn-xm"> + </button>
                    <button type="button" className="btn-prestamo-a btn btn-xm">Juntas recomienda</button>
                    <button type="button" className="btn-prestamo-b  btn btn-xm">Lo quiero</button>
                  </div>
                </div>
              </div>
              <hr />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};
export default Prestamos;
Prestamos.propTypes = {
  calculate: PropTypes.shape.isRequired,
};
