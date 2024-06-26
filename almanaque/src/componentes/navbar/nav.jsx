
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CadastroModal from '../modals/cadastroModal';

function Navigation(args) {

  const [openCadastroModal, setOpenCadastroModal] = useState(false);

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Almanaque</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Button variant="success" onClick={() => setOpenCadastroModal(true)}>Cadastrar Planta</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CadastroModal isOpen={openCadastroModal} onClose={() => setOpenCadastroModal(false)}/>
    </>
  );
}

export default Navigation;