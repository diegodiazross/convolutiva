import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import machine from "../assets/machine_learning_section.jpg";

function MachineLearningSection() {
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-md-center">
        <Col sm={12} md={6}>
          <Image src={machine} fluid rounded />
        </Col>
        <Col sm={12} md={6}>
          <h2> Inteligencia de negocios</h2>
          <p><i>Conoce a tus clientes , pronostica tus ventas , limita los fraudes. 
        Deja que tus datos y los algoritmos transformen tu negocio.</i></p>
        </Col>
      </Row>
    </Container>
  );
}

export default MachineLearningSection;
