import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import bi from "../assets/chess.jpg";

function BussinessIntelligence() {
  return (
    <section>
      <Container fluid className="mt-5">
        <Row className="justify-content-md-center">
          <Col sm={12} md={6}>
            <Image src={bi} fluid rounded />
          </Col>
          <Col sm={12} md={6}>
            <h3> Inteligencia de negocios</h3>
            <p>Según una estimación de Forrester, hasta el 70-80% de los datos generados por las empresas nunca se utilizan para análisis. Transforma datos en decisiones estratégicas.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BussinessIntelligence;
