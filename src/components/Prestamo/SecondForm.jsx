import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Col, Form,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import juntas from '../../images/logoJuntas.jpg';
// import { useHistory } from 'react-router-dom';

const SecondForm = (props) => {
  const history = useHistory();
  const redirectFinal = () => {
    history.push('/Final');
  };
  const [smModalVerificate, setSmModalVerificate] = useState(false);
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
    ruc: '',
  };
  const [values, setValues] = useState(initialStateValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setSmModalVerificate(true);
      handleSubmitForm(values);
      event.preventDefault();
    }
    setValidated(true);
  };

  const clickToRedirect = (e) => {
    e.preventDefault();
    setSmModalVerificate(false);
    redirectFinal();
  };
  //   const onSubmitValue = (event) => {
  //     event.preventDefault();

  //     console.log('click');
  //   };
  return (
    <div className="col-10 col-sm-6 col-lg-4 formDiv">
      <Form action="post" noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="referenc3">
          <p className="title-form">Datos personales</p>
        </div>
        <div className="referenc3">
          <p className="hola">Estos datos son necesarios para validar tu identidad</p>
        </div>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label className="colorLabel">Nombres y apellidos</Form.Label>
            <Form.Control
              required
              className="custom-input"
              type="text"
              name="name"
              placeholder="Ej. Ana Ramos Flores"
              value={values.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Ingresa este campo</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label className="colorLabel">  Documento de Identidad</Form.Label>
            <Form.Control
              required
              className="custom-input"
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
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label className="colorLabel">Ubicación</Form.Label>
            <Form.Control
              as="select"
              className="custom-input"
              name="ubicacion"
              value={values.ubicacion}
              onChange={handleChange}
            >
              <option>Selecciona un área</option>
              <option value="Lima">Lima Metropolitana</option>
              <option value="Callao">Callao</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label className="colorLabel">Celular</Form.Label>
            <Form.Control
              type="number"
              className="custom-input"
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
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label className="colorLabel">Operador</Form.Label>
            <Form.Control
              as="select"
              className="custom-input"
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
        <p>Estos datos son necesarios para validar tu identidad</p>
        <p>La cuenta a abonar debe ser del solicitante</p>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label className="colorLabel">Rubro de Negocio</Form.Label>
            <Form.Control
              as="select"
              className="custom-input"
              name="rubro"
              value={values.rubro}
              onChange={handleChange}
            >
              <option>Selecciona</option>
              <option value="comercio">Comercio</option>
              <option value="industrial">Industrial</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label className="colorLabel">Ruc del Negocio,en caso tengas.</Form.Label>
            <Form.Control
              type="number"
              className="custom-input"
              placeholder="Ingrese su Ruc"
              name="ruc"
              value={values.ruc}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingresa este campo
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label className="colorLabel">Entidad bancaria</Form.Label>
            <Form.Control
              as="select"
              className="custom-input"
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
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label className="colorLabel">Número de cuenta de abono</Form.Label>
            <Form.Control
              type="number"
              className="custom-input"
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
        <Form.Group>
          <Form.Check
            required
            label="He leído y acpeto la política de Tratamiento y Protección de datos."
            feedback="Debes de estar de acuerdo ,antes de enviar."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      <Modal
        size="sm"
        show={smModalVerificate}
        onHide={() => setSmModalVerificate(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <img src={juntas} className="img" alt="juntas" />
        </Modal.Header>
        <Modal.Body>
          <p>Por favor verifica que tus datos en la solicitud siguiente sean correctos.</p>
          <Button type="button" onClick={() => clickToRedirect()}>Ok</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SecondForm;
SecondForm.propTypes = {
  // handleInputChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
};
