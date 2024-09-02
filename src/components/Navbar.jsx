// import styles from "./Navbar.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image  from "react-bootstrap/Image";
import icon from "../assets/main-icon.svg";

function Navigator() {
  return (
    <Navbar expand="md" collapseOnSelect="true" bg="secondary" data-bs-theme="dark">
      <Navbar.Brand href="/" className="ps-5">
        <Image src={icon} alt="logo" width="30px" height="30px"/>
        {/* <img src={network} className="d-inline-block align-top" alt="logo"  />{" "} */}
        <strong>&nbsp;Convolutia</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center mx-2">
        <Nav className="">
          <Nav.Link href="/quienes-somos">Quienes Somos</Nav.Link>
          <Nav.Link href="/servicios">Servicios</Nav.Link>
          <Nav.Link href="/contacto" className="">
            Contacto{" "}
          </Nav.Link>
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigator;
