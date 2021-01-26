import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewMenu = () => (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#"><Link to="/" className="btn-navbar nav-link">Home</Link></Nav.Link>
          <Nav.Link href="#servicios"><Link to="/servicios" className="btn-navbar nav-link">Servicios</Link></Nav.Link>
          <Nav.Link href="#dataClient"><Link to="/dataClient" className="btn-navbar nav-link">Préstamos</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default ViewMenu;
