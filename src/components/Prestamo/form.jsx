/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Form,
} from 'react-bootstrap';

const FormSection = (props) => {
  const { handleSubmitForm, addformData } = props;
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
  };

  const [values, setValues] = useState(initialStateValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmitForm(values);
    setValues(initialStateValues);
  };
  // const options = ['soles', 'dólares'];
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
            <option>Seleccionar</option>
            <option value="soles">soles</option>
            <option value="dolares">dólares</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Monto Solictado</Form.Label>
          <Form.Control
            required
            type="number"
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
            type="number"
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
        <Form.Group as={Col} md="4">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          {/* <Button
            type="submit"
          >
            Comparar
          </Button> */}
          <Button
            type="button"
            onClick={() => addformData(values.monto, values.plazo, values.ingreso)}
          >
            Comparar
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
  addformData: PropTypes.func.isRequired,
};
