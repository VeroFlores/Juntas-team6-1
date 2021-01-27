import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Form,
} from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

const SecondForm = (props) => {
  const { handleSubmitForm } = props;
  const [validated, setValidated] = useState(false);
  const initialStateValues = {
    name: '',
    dni: '',
    ubicacion: '',
    celular: '',
    operador: '',
    rubro: '',
    cuenta: '',
    entidad: '',
    fechaPago: '',
  };
  const [values, setValues] = useState(initialStateValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  console.log(values);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log('no completado');
    } else {
      handleSubmitForm(values);
      event.preventDefault();
    }
    setValidated(true);
  };

  const clickToRedirect = (e) => {
    e.preventDefault();
    console.log('completado');
  };
  //   const onSubmitValue = (event) => {
  //     event.preventDefault();

  //     console.log('click');
  //   };
  return (
    <>
      <Form action="post" noValidate validated={validated} onSubmit={handleSubmit}>
        <p>Datos personales</p>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nombres y apellidos</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Ej. Ana Ramos Flores"
              value={values.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Ingresa este campo</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>  Documento de Identidad</Form.Label>
            <Form.Control
              required
              type="number"
              name="dni"
              placeholder="Los números deben contener 8 dígitos"
              value={values.dni}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Ingresa este campo</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Ubicación</Form.Label>
            <Form.Control
              as="select"
              name="ubicacion"
              value={values.ubicacion}
              onChange={handleChange}
            >
              <option>Selecciona un área</option>
              <option value="Lima">Lima Metropolitana</option>
              <option value="Callao">Callao</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="number"
              placeholder="000-000-000"
              name="celular"
              value={values.celular}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingresa este campo
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Operador</Form.Label>
            <Form.Control
              as="select"
              name="operador"
              value={values.operador}
              onChange={handleChange}
            >
              <option>Selecciona</option>
              <option value="claro">Claro</option>
              <option value="movistar">Movistar</option>
              <option value="entel">Entel</option>
              <option value="bitel">Bitel</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <p>Datos para el préstamo</p>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Rubro de Negocio</Form.Label>
            <Form.Control
              as="select"
              name="rubro"
              value={values.rubro}
              onChange={handleChange}
            >
              <option>Selecciona</option>
              <option value="comercio">Comercio</option>
              <option value="industrial">Industrial</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Número de cuenta</Form.Label>
            <Form.Control
              type="number"
              placeholder="5246-0100-0312-0523"
              name="cuenta"
              value={values.cuenta}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingresa este campo
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Entidad bancaria</Form.Label>
            <Form.Control
              as="select"
              name="entidad"
              value={values.entidad}
              onChange={handleChange}
            >
              <option>Selecciona</option>
              <option value="bcp">Banco de Crédito</option>
              <option value="interbank">Interbank</option>
              <option value="bn">Banco de la Nación </option>
              <option value="bbva">BBVA</option>
              <option value="pichincha">Pichincha</option>
              <option value="mibanco">MiBanco</option>
              <option value="scotiabanks">Scotiabank</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Fecha de pago</Form.Label>
            <Form.Control
              as="select"
              name="fechaPago"
              value={values.fechaPago}
              onChange={handleChange}
            >
              <option>Selecciona</option>
              <option value="1 de cada mes">01 de cada mes</option>
              <option value="2 de cada mes">02 de cada mes</option>
              <option value="3 de cada mes">03 de cada mes</option>
              <option value="4 de cada mes">04 de cada mes</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit" onClick={clickToRedirect}>Submit form</Button>
      </Form>
    </>
  );
};
export default SecondForm;
SecondForm.propTypes = {
  // handleInputChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
};
