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
    } else {
      event.preventDefault();
      redirectBank();
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

  return (
    <>
      <Form action="post" noValidate validated={validated} onFormSubmit={onSubmit} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="12" controlId="exampleForm.ControlSelect1">
          <Form.Label className="colorLabel">Moneda</Form.Label>
          <Form.Control
            required
            className="custom-input"
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
          <Form.Label className="colorLabel">Monto Solictado</Form.Label>
          <Form.Control
            required
            type="number"
            className="custom-input"
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
          <Form.Label className="colorLabel">Plazo</Form.Label>
          <Form.Control
            required
            type="number"
            className="custom-input"
            placeholder="12 meses"
            name="plazo"
            value={values.plazo}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label className="colorLabel">Ingresos (minimo 1000 soles)</Form.Label>
          <Form.Control
            type="number"
            className="custom-input"
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
        <Form.Group className="form-align" as={Col} md="12">
          <Button
            type="submit"
            className="btnColor"
            onClick={() => { addformData(values.moneda, values.monto, values.plazo, values.ingreso); }}
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
