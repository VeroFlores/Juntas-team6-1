/* eslint-disable max-len */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  Nav, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import juntas from '../images/logoJuntas.jpg';
import PassLogin from './PassLogin';

const ViewMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" id="top-nav" className="navegation">
        <img src={juntas} className="img" alt="juntas" />
        <PassLogin />
        <Nav className="mx-auto mt-2 mb-2">
          <Nav.Link href="#"><Link to="/" className="btn-navbar nav-link">Inicio</Link></Nav.Link>
          <Nav.Link href="#Nosotros"><Link to="/Nosotros" className="btn-navbar nav-link">Nosotros</Link></Nav.Link>
          <Nav.Link href="#dataClient"><Link to="/dataClient" className="btn-navbar nav-link">Prestamos</Link></Nav.Link>
          <Nav.Link href="#Comunidad"><Link to="/Comunidad" className="btn-navbar nav-link">Comunidad</Link></Nav.Link>
          <Nav.Link href="#Contacto"><Link to="/Contacto" className="btn-navbar nav-link">Contacto</Link></Nav.Link>
        </Nav>
        <button className="navbar-toggler" type="button" onClick={handleShow}>
          <span className="navbar-toggler-icon" />
        </button>
      </Navbar>
      <Modal className="menuModal right fade menu" show={show} onHide={handleClose}>
        <div className="menuModal modal-dialog position-fixed m-auto" role="document">
          <div className="menuModal modal-content h-100">
            <Modal.Header className="menuModal" closeButton />
            <Modal.Body>
              <Nav className="mx-auto mt-2 mb-2">
                <Nav.Link href="#"><Link to="/" className="btn-navbar nav-link" onClick={handleClose}>Inicio</Link></Nav.Link>
                <Nav.Link href="#Nosotros"><Link to="/Nosotros" className="btn-navbar nav-link">Nosotros</Link></Nav.Link>
                <Nav.Link href="#DataClient"><Link to="/dataClient" className="btn-navbar nav-link" onClick={handleClose}>Prestamos</Link></Nav.Link>
                <Nav.Link href="#Comunidad"><Link to="/Comunidad" className="btn-navbar nav-link">Comunidad</Link></Nav.Link>
                <Nav.Link href="#Contacto"><Link to="/Contacto" className="btn-navbar nav-link">Contacto</Link></Nav.Link>
              </Nav>
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewMenu;
