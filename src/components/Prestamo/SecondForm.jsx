import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Form,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import juntas from '../../images/logoJuntas.jpg';
// import { useHistory } from 'react-router-dom';

const SecondForm = (props) => {
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
  console.log(values);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log('no completado');
    } else {
      setSmModalVerificate(true);
      handleSubmitForm(values);
      event.preventDefault();
    }
    setValidated(true);
  };

  const clickToRedirect = () => {
    console.log('completado');
    setSmModalVerificate(false);
  };
    //   const onSubmitValue = (event) => {
    //     event.preventDefault();

  //     console.log('click');
  //   };

  return (
    <>
