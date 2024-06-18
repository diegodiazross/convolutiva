// import Container from "react-bootstrap/Container";

// import styles from "./Navbar.module.css";
// import React from "React"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import network from "../assets/network.png";

function Navigator() {
  return (
    <Navbar expand="md" className="" data-bs-theme="blue">
      <Navbar.Brand href="#home" className="ps-5">
        <img src={network} className="d-inline-block align-top" alt="logo" width="30px" height="30px" />
        {""} Convolut<span><strong>ia</strong></span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center mx-2">
        <Nav className="">
          <Nav.Link href="#home">Quienes Somos</Nav.Link>
          <NavDropdown title="Servicios" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Machine Learning + IA</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Dashboards</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Software como servicio (SaaS)</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#Contacto" className="">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigator;
