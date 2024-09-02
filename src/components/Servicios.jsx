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
        <h2 className="m-5 text-center">Algoritmos al servicio de tu negocio</h2>
        <p className="m-4">Las tecnologías basadas en la nube nos dan la posibilidad de generar soluciones que se ajusten a tu necesidad. Utiliza los datos para transformar la toma de decisiones.</p>
        <Image className="m-4" style={{width:"90%", height:"500px"}}  src={bi} fluid thumbnail />
      </div>
      <Container fluid>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3 id="forecasting">Forecasting</h3>
            <p> Predice el futuro , anticipate a los eventos.	Pronostica tus ventas,clientes, fuga.</p>
          </Col>
          <Col md={6}>
            <Image src={forecasting} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3 id="dashboard">Dashboard</h3>
            <p>Porque un buen gráfico vale más que mil reportes.	Observa tus datos en tiempo real de forma que puedas tomar mejores decisiones. </p>
          </Col>
          <Col md={6}>
            <Image src={dashboard} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3 id="nlp">NLP</h3>
            <p>Conjunto de herramientas utilizadas para analizar documentos de texto.</p>
          </Col>
          <Col md={6}>
            <Image src={nlp} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3 id="computervision">Computer Vision</h3>
            <p> Conjunto de herramientas utilizadas para analizar videos e imágenes.</p>
          </Col>
          <Col md={6}>
            <Image src={computer_vision} rounded fluid />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex align-items-center gx-5">
          <Col md={6} className="">
            <h3 id="aps"> Apps</h3>
            <p>Desarrollo de aplicaciones centradas en modelos de machine learning o IA. </p>
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
