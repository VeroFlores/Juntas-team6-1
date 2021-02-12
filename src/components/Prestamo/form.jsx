/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Col, Form,
} from 'react-bootstrap';

const FormSection = (props) => {
  const history = useHistory();
  const redirectBank = () => {
    history.push('/selectBank');
  };

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
        <Form.Group as={Col} md="12" controlId="exampleForm.ControlSelect1">
          <Form.Label id="colorLabel">Moneda</Form.Label>
          <Form.Control
            className="colorOption"
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
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label id="colorLabel">Monto Solictado</Form.Label>
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
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label id="colorLabel">Plazo</Form.Label>
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
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label id="colorLabel">Ingresos (minimo 1000 soles)</Form.Label>
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
        <Form.Group as={Col} md="12">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="12">
          {/* <Button
            type="submit"
          >
            Comparar
          </Button> */}
          <Button
            type="button"
            onClick={() => { addformData(values.moneda, values.monto, values.plazo, values.ingreso); redirectBank(); }}
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
