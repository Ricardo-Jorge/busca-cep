import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Pagina = (props) => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Front-End</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicial</Nav.Link>
            <Nav.Link href="/alertas">Alertas</Nav.Link>
            <Nav.Link href="/botoes">Botões</Nav.Link>
            <Nav.Link href="/endereco">Formulário</Nav.Link>
            <Nav.Link href="/contador">Contador</Nav.Link>
            <Nav.Link href="/disney">Disney</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-3">{props.children}</Container>
    </>
  );
};

export default Pagina;
