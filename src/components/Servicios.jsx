import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import dashboard from "../assets/servicios_dashboard.jpg";
import nlp from "../assets/servicios_nlp.jpg";
import computer_vision from "../assets/servicios_vision_computer.jpg";
import app from "../assets/servicios_desarrollo_apps.jpg";
import forecasting from "../assets/forecasting.jpg";
import bi from "../assets/business_intelligence.jpg";

function Servicios() {
  return (
    <>
      <div>
        <h2 className="m-5">Algoritmos al servicio de tu negocio</h2>
        <p className="m-4">Las tecnologías basadas en la nube nos dan la posibilidad de generar soluciones que se ajusten a tu necesidad. Utiliza los datos para transformar la toma de decisiones.</p>
        <Image className="m-4" src={bi} fluid thumbnail />
      </div>
      <Container fluid>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3>Forecasting</h3>
            <p> Predice el futuro , anticipate a los eventos.</p>
          </Col>
          <Col md={6}>
            <Image src={forecasting} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3>Dashboard</h3>
            <p>Olvídate de esas presentaciones estáticas en power point. Analiza tus datos en tiempo real con gráficos interactivos que te permitan entender de mejor forma estos.</p>
          </Col>
          <Col md={6}>
            <Image src={dashboard} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3>NLP</h3>
            <p>Analiza texto con las ultimas herramientas de Natual Procesing Language</p>
          </Col>
          <Col md={6}>
            <Image src={nlp} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3>Computer Vision</h3>
            <p>Analiza imagenes y/o video </p>
          </Col>
          <Col md={6}>
            <Image src={computer_vision} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3>Desarrollo de Apps</h3>
            <p>aplicaciones basadas en datos </p>
          </Col>
          <Col md={6}>
            <Image src={app} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
      </Container>
    </>
  );
}

export default Servicios;
