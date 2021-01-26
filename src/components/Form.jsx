import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Form,
} from 'react-bootstrap';

const FormSection = (props) => {
  const { handleSubmitForm } = props;
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const initialStateValues = {
    moneda: '',
    monto: '',
    plazo: '',
    ingreso: '',
    dni: '',
    ubicación: '',
    rubro: '',
  };
  const [values, setValues] = useState(initialStateValues);
  const handleChange = (e) => {
    console.log('storaged');
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmitForm(values);
    setValues(initialStateValues);
  };
  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   // submitForm();
  // };
  return (
    <>
      <Form noValidate validated={validated} onFormSubmit={handleSubmit} onSubmit={onSubmit}>
        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect1">
          <Form.Label>Moneda</Form.Label>
          <Form.Control
            as="select"
            name="moneda"
            value={values.moneda}
            onChange={handleChange}
          >
            <option>soles</option>
            <option>dólares</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Monto Solictado</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="5000"
            name="monto"
            value={values.monto}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Ingrese el monto solicitado.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Plazo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="12 meses"
            name="plazo"
            value={values.plazo}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Ingresos</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa monto"
            name="ingreso"
            value={values.ingreso}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingrese el monto solicitado.
          </Form.Control.Feedback>

        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="DNI"
            name="dni"
            value={values.dni}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingrese su número de DNI.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control
            as="select"
            name="ubicación"
            value={values.ubicación}
            onChange={handleChange}
          >
            <option>Lima</option>
            <option>Callao</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Rubro</Form.Label>
          <Form.Control
            as="select"
            name="rubro"
            value={values.rubro}
            onChange={handleChange}
          >
            <option>Comercio</option>
            <option>Industria</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Button
            type="submit"
          >
            Submit form
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
export default FormSection;
FormSection.propTypes = {
  // handleInputChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,

};
